import express, { Request, Response } from 'express'
import { Client } from '@notionhq/client'
import cors from 'cors'

import config from './config.js'
import { YoutubeResponseBody } from './types/index.js'

const app = express()

app.use(cors())
app.use(express.json())

const notion = new Client({
  auth: config.notionToken,
})

// TODO
// - TypeScript config from this boilerplate ? XD
// - eslint not working in server
// - shared eslint config in root dir (?)
// - shared .gitignore (?)
// - play with pnpm workspaces (?)
export const createPage = async (req: Request, res: Response) => {
  try {
    const { url } = req.body as { url: string }
    const regex = /v=([^&]+)/
    const match = url.match(regex)
    const videoId = match[1]

    const youtubeURL = `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
      {
        key: config.youtubeApiKey,
        type: 'video',
        part: 'snippet',
        id: videoId,
      }
    )}`

    const youtubeApiResponse = await fetch(youtubeURL)

    const data = (await youtubeApiResponse.json()) as YoutubeResponseBody
    const video = data.items[0].snippet
    console.log(video)

    await notion.pages.create({
      parent: {
        database_id: config.notionDatabaseId,
      },
      properties: {
        title: [
          {
            text: {
              content: video.title,
              link: null,
            },
          },
        ],
        URL: url
      },
      children: [
        {
          video: {
            external: {
              url,
            },
          },
        },
        {
          image: {
            external: {
              url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            },
          },
        },
      ],
    })

    res.status(201)
  } catch (error) {
    res.status(400)
  }
}

app.post('/', createPage)

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})

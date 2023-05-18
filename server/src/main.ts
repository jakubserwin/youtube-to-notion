import express, { Request, Response } from 'express'
import { Client } from '@notionhq/client'
import cors from 'cors'

import config from './config.js'

const app = express()

app.use(cors())
app.use(express.json())

const notion = new Client({
  auth: config.notionToken,
})

// TODO
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

    const response = await notion.pages.create({
      parent: {
        database_id: config.notionDatabaseId,
      },
      properties: {
        title: [
          {
            text: {
              content: 'Hello from Nuxt client',
              link: null,
            },
          },
        ],
      },
      children: [
        {
          video: {
            external: {
              url,
            }
          }
        },
        {
          image: {
            external: {
              url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }
          }
        }
      ]
    })

    // TODO -> proper response
    res.status(200).json({
      response,
    })
  } catch (error) {
    res.status(400)
  }
}

app.post('/', createPage)

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})

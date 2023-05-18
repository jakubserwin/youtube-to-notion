import express, { Request, Response} from 'express'
import { Client } from '@notionhq/client'
import config from './config.js'

const app = express()

const notion = new Client({
  auth: config.notionToken,
})

// TODO
// - eslint not working in server
// - shared eslint config in root dir (?)
// - shared .gitignore (?)
// - play with pnpm workspaces (?)
export const createPage = async (_: Request, res: Response) => {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: config.notionDatabaseId,
      },
      properties: {
        title: [
          {
            text: {
              content: 'Hello from Nuxt client',
              link: null
            }
          }
        ]
      }
    })
    // TODO -> proper response
    res.status(200).json({
      response
    })
  } catch (error) {
    res.status(400)
  }
}

app.get('/', createPage)

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})

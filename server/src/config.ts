import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT ?? 8080,
  notionToken: process.env.NOTION_TOKEN ?? '',
  notionDatabaseId: process.env.NOTION_DATABASE_ID ?? '',
}

export default config
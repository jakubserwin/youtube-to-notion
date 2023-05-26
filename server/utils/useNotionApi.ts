import { Client } from '@notionhq/client'

export const useNotionApi = () => {
  const { NOTION_DATABASE_ID, NOTION_INTEGRATION_TOKEN } = useRuntimeConfig()

  const notion = new Client({
    auth: NOTION_INTEGRATION_TOKEN
  })

  const createPage = async (
    videoUrl: string,
    videoTitle: string,
    videoId: string
  ) => {
    await notion.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID
      },
      properties: {
        title: [
          {
            text: {
              content: videoTitle,
              link: null
            }
          }
        ],
        URL: videoUrl
      },
      children: [
        {
          video: {
            external: {
              url: videoUrl
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
  }

  return {
    createPage
  }
}

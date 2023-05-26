import { useNotionApi } from '../utils/useNotionApi'
import { useYoutubeApi } from '../utils/useYoutubeApi'

export default defineEventHandler(async (event) => {
  try {
    const { getVideo } = useYoutubeApi()
    const { createPage } = useNotionApi()

    const body = await readBody(event)
    const { url } = body as { url: string }

    const {
      video,
      videoId
    } = await getVideo(url)

    await createPage(url, video.title, videoId ?? '')

    return {
      status: 201
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      data: error
    })
  }
})

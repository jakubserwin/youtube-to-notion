import { YoutubeResponseBody } from '~/types'

export const useYoutubeApi = () => {
  const { YOUTUBE_API_KEY } = useRuntimeConfig()

  const getVideo = async (url: string) => {
    const regex = /v=([^&]+)/
    const match = url.match(regex)
    const videoId = match ? match[1] : null

    const youtubeApiResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
      {
        key: YOUTUBE_API_KEY,
        type: 'video',
        part: 'snippet',
        id: videoId ?? ''
      }
    )}`)

    const data = (await youtubeApiResponse.json()) as YoutubeResponseBody
    const video = data.items[0].snippet

    return {
      video,
      videoId
    }
  }

  return {
    getVideo
  }
}

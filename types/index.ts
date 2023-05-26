export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Standard {
  url: string
  width: number
  height: number
}

export interface Maxres {
  url: string
  width: number
  height: number
}

export interface Localized {
  title: string
  description: string
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}


export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
  standard: Standard
  maxres: Maxres
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  defaultLanguage: string
  localized: Localized
  defaultAudioLanguage: string
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
}

export interface YoutubeResponseBody {
  kind: string
  etag: string
  items: Item[]
  pageInfo: PageInfo
}

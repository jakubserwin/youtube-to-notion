export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    NOTION_INTEGRATION_TOKEN: '',
    NOTION_DATABASE_ID: '',
    YOUTUBE_API_KEY: '',
    public: {
      API_BASE_URL: ''
    }
  }
})

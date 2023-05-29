# Youtube To Notion

Save your "for later" vides in Notion database. 

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Env Variables

```bash
# .env
# Create integration https://www.notion.so/my-integrations to get your integration secret and then make connection with your notion database 
#(Open page -> ... dots -> Add connections)
NUXT_NOTION_INTEGRATION_TOKEN=YOUR_NOTION_TOKEN
# How to get database id https://stackoverflow.com/questions/67728038/where-to-find-database-id-for-my-database-in-notion
NUXT_NOTION_DATABASE_ID=YOUR_NOTION_DATABASE_ID
# How to get YOUTUBE_API_KEY https://developers.google.com/youtube/v3/getting-started
NUXT_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
```

## Running Application

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

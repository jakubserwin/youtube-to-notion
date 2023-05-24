# Youtube To Notion

Save your "for later" vides in Notion database. 

## Setup

Make sure to install the dependencies in both client and server folders:

```bash
# pnpm
cd client && pnpm install && cd ../server && pnpm install
```

## Env Variables

```bash
# client/.env
NUXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8080/
```

```bash
# server/.env
PORT=8080
# Create integration https://www.notion.so/my-integrations to get your integration secret and then make connection with your notion database 
#(Open page -> ... dots -> Add connections)
NOTION_TOKEN=YOUR_NOTION_TOKEN
# How to get database id https://stackoverflow.com/questions/67728038/where-to-find-database-id-for-my-database-in-notion
NOTION_DATABASE_ID=YOUR_NOTION_DATABASE_ID
# How to get YOUTUBE_API_KEY https://developers.google.com/youtube/v3/getting-started
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
```

## Development Client

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

## Development Server

Start the development server on `http://localhost:8080`

```bash
pnpm build

pnpm start
```
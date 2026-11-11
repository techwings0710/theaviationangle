# The Aviation Angle — website source

This archive contains the complete source code of the current website: its React/Vinext frontend, styles, logo and social artwork, dependency lockfile, build configuration, and Sites hosting manifest.

## Implemented features

- Responsive aviation news homepage
- Masthead with The Aviation Angle logo
- Topic navigation, lead story, latest-news list, news and briefing sections
- Safety and analysis sections
- Newsletter form that opens the visitor's email application
- Social-sharing metadata and artwork

## Current limitations

The news stories and timestamps are sample content in app/page.tsx. They are not connected to a live news feed or an editorial publishing system.

There is no separate backend, database, account system, or newsletter service in this version. Vinext renders the site for Cloudflare Workers; app/page.tsx is the only page route. The newsletter form uses mailto: and does not store subscriptions.

## Run locally

Install Node.js 22.13 or newer and pnpm. In this directory, run pnpm install followed by pnpm dev. Open the local address printed by the development server. Run pnpm build to create a production build.

The .openai/hosting.json file identifies the existing hosted Site. Keep that ID if continuing the same site; create a new Site identity if hosting an independent copy.

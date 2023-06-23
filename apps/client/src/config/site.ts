import { SiteConfig } from "@/types"
import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "ChessHub",
  description: "A brand new chess application with features never seen before.",
  url: env.NEXT_PUBLIC_APP_URL as string || "http://localhost:3000",
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
}

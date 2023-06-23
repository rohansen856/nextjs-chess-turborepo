import GameAuthWrapper from "@/components/game/GameAuthWrapper"
import { notFound } from "next/navigation"

import { env } from "@/env.mjs"

import { fetchActiveGame } from "@/lib/game"

export async function generateMetadata({
  params,
}: {
  params: { code: string }
}) {
  const game = await fetchActiveGame(params.code)
  if (!game) {
    return {
      description: "Game not found",
      robots: {
        index: false,
        follow: false,
        nocache: true,
        noarchive: true,
      },
    }
  }
  return {
    description: `Play or watch a game with ${game.host?.name}`,
    openGraph: {
      title: "chessu",
      description: `Play or watch a game with ${game.host?.name}`,
      url: `${env.NEXT_PUBLIC_APP_URL}/${game.code}`,
      siteName: "chessu",
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true,
    },
  }
}

export default async function Game({ params }: { params: { code: string } }) {
  const game = await fetchActiveGame(params.code)
  if (!game) {
    notFound()
  }

  return <GameAuthWrapper initialLobby={game} />
}

"use client"

import { SessionContext } from "@/context/ContextProvider"
import type { Game } from "@/types"
import { useContext } from "react"

import GamePage from "./GamePage"

export default function GameAuthWrapper({
  initialLobby,
}: {
  initialLobby: Game
}) {
  const session = useContext(SessionContext)

  if (!session?.profile || !session.profile?.id) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-2xl font-bold">Loading</div>
        <div className="text-xl">Waiting for authentication...</div>
      </div>
    )
  }

  return <GamePage initialLobby={initialLobby} />
}

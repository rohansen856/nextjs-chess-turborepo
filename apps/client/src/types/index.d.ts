import type { Chess } from "chess.js"
import { User, profile as Profile } from "database"
import type { Icon } from "lucide-react"
import { InferModel } from "drizzle-orm"

import { friendlist } from "database"

import { Icons } from "@/components/icons"

export type { User, Profile }

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type GameConfig = {
  mainNav: MainNavItem[]
}

export type GameData = {
  moveNo: number
  piece: Piece
  from: string
  to: string
}

export type AllMovesData = {
  id: string
  user: string
  date: string
  moves: GameData[]
}

export type Piece = {
  player: "w" | "b" | null
  highlight: number
  possible: number
  checked: number
  in_check: number
  icon: string | null
  ascii: string | null
  can_move: (x: number, y: number) => boolean
}

export type Friend = InferModel<typeof friendlist, "insert" | "select">

export interface Game {
  id?: number
  pgn?: string
  white?: Profile
  black?: Profile
  winner?: "white" | "black" | "draw"
  endReason?:
    | "draw"
    | "checkmate"
    | "stalemate"
    | "repetition"
    | "insufficient"
    | "abandoned"
  host?: Profile
  code?: string
  unlisted?: boolean
  timeout?: number
  observers?: Profile[]
  startedAt?: number
  endedAt?: number
}

export interface Profile {
  id?: number | string // string for guest IDs
  name?: string | null
  email?: string
  wins?: number
  losses?: number
  draws?: number

  // mainly for players, not spectators
  connected?: boolean
  disconnectedOn?: number
}

export interface Lobby extends Game {
  actualGame: Chess
  side: "b" | "w" | "s"
}

export interface CustomSquares {
  options: { [square: string]: { background: string; borderRadius?: string } }
  lastMove: { [square: string]: { background: string } }
  rightClicked: { [square: string]: { backgroundColor: string } | undefined }
  check: { [square: string]: { background: string; borderRadius?: string } }
}

export type Action =
  | {
      type: "updateLobby"
      payload: Partial<Lobby>
    }
  | {
      type: "setSide"
      payload: Lobby["side"]
    }
  | {
      type: "setGame"
      payload: Chess
    }

export interface Message {
  author: Profile
  message: string
}

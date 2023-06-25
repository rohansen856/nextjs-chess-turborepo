import { fetchPublicGames } from "@/lib/game"
import JoinButton from "@/components/home/PublicGames/JoinButton"
import RefreshButton from "@/components/home/PublicGames/RefreshButton"

import type { Game } from "@/types"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@rcsen/ui/src/components/ui/table"

export default async function PublicGames() {
  const games = await fetchPublicGames()

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl font-bold leading-tight">
        Public games <RefreshButton />
      </h2>

      <div className="bg-secondary h-80 max-h-80 overflow-y-auto rounded-xl">
        <Table>
          <TableCaption>Join a random game.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-48">Host</TableHead>
              <TableHead className="w-48">Opponent</TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {games && games.length > 0
              ? games.map((game: Game) => (
                  <TableRow key={game.id}>
                    <TableCell className="font-medium">
                      {game.host?.name}
                    </TableCell>
                    <TableCell className="">
                      {(game.host?.id === game.white?.id
                        ? game.black?.name
                        : game.white?.name) || ""}
                    </TableCell>
                    <TableCell>
                      <JoinButton code={game.code as string} />
                    </TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

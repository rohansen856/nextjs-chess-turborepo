import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { GameStartButton } from "@/components/game-start-button"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="New Game" text="Start anew game of chess now.">
        <GameStartButton />
      </DashboardHeader>
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>Start Playing</EmptyPlaceholder.Title>
        <GameStartButton variant="outline" className="my-3" />
      </EmptyPlaceholder>
    </DashboardShell>
  )
}

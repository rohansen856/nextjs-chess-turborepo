import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "History",
  description: "Data of your previous games",
}

export default async function History() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/")
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="History" text="Replay your previous games" />
    </DashboardShell>
  )
}

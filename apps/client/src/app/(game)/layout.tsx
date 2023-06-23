import { redirect } from "next/navigation"

import type { Profile } from "@/types"

import { gameConfig } from "@/config/game"
import { getCurrentUser } from "@/lib/session"

import { MainNav } from "@/components/main-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { SiteFooter } from "@/components/site-footer"

import { ContextProvider } from "@/context/ContextProvider"
import { db } from "@/lib/db"

interface GameLayoutProps {
  children?: React.ReactNode
}

export default async function GameLayout({ children }: GameLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return redirect("/")
  }

  const profile = await db.profile.findFirst({
    where: { id: user.id },
  })

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={gameConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        <ContextProvider user={profile as Profile}>{children}</ContextProvider>
      </main>
      <SiteFooter className="border-t" />
    </div>
  )
}

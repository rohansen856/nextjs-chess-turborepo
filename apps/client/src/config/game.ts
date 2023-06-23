import { GameConfig } from "@/types"

export const gameConfig: GameConfig = {
  mainNav: [
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Learn Chess",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
}

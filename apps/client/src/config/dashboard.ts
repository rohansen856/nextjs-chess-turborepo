import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
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
  sidebarNav: [
    {
      title: "New game",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "History",
      href: "/dashboard/history",
      icon: "billing",
    },
    {
      title: "Friends",
      href: "/dashboard/friends",
      icon: "friend",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}

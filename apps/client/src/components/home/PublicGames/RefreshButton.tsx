"use client"

import { IconRefresh } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export default function RefreshButton() {
  const router = useRouter()
  const [isLoading, startTransition] = useTransition()

  function handleRefresh() {
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <button
      aria-label="Refresh public games"
      className={
        "btn-ghost btn-square btn-sm btn" + (isLoading ? " loading" : "")
      }
      onClick={handleRefresh}
    >
      <IconRefresh size={16} />
    </button>
  )
}

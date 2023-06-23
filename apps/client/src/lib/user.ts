import { env } from "@/env.mjs"
import type { Game, Profile } from "@/types"

const API_URL = env.NEXT_PUBLIC_API_URL

export const fetchProfileData = async (name: string) => {
  try {
    // TODO: handle caching more efficiently?
    const res = await fetch(`${API_URL}/v1/users/${name}`, {
      next: { revalidate: 10 },
    })

    if (res && res.status === 200) {
      const data: Profile & { recentGames: Game[] } = await res.json()
      return data
    }
  } catch (err) {
    console.error(err)
  }
}

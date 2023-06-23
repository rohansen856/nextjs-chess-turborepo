"use client"

import {
  type ReactNode,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react"

import type { Profile } from "@/types"

export const SessionContext = createContext<{
  profile: Profile | null // undefined = hasn't been checked yet, null = no profile
  setProfile: Dispatch<SetStateAction<Profile | null>>
} | null>(null)

export function ContextProvider({
  user,
  children,
}: {
  user: Profile
  children: ReactNode
}) {
  const [profile, setProfile] = useState<Profile | null>(user || null)

  return (
    <SessionContext.Provider value={{ profile, setProfile }}>
      {children}
    </SessionContext.Provider>
  )
}

import { env } from "@/env.mjs"

import type { User } from "@/types"

const API_URL = env.NEXT_PUBLIC_API_URL

export async function register(name: string, password: string, email: string) {
  try {
    const res = await fetch(`${API_URL}/v1/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    })
    if (res.status === 201) {
      const user: User = await res.json()
      return user
    } else if (res.status === 409) {
      const { message } = await res.json()
      return message as string
    }
  } catch (err) {
    console.error(err)
  }
}

export async function login(name: string, password: string) {
  try {
    const res = await fetch(`${API_URL}/v1/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    })
    if (res.status === 200) {
      const user: User = await res.json()
      return user
    } else if (res.status === 404 || res.status === 401) {
      const { message } = await res.json()
      return message as string
    }
  } catch (err) {
    console.error(err)
  }
}

export async function logout() {
  try {
    const res = await fetch(`${API_URL}/v1/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
    if (res.status === 204) {
      return true
    }
  } catch (err) {
    console.error(err)
  }
}

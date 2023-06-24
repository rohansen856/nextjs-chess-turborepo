import { NextResponse } from "next/server"
import * as z from "zod"
import { getServerSession } from "next-auth/next"
import { eq } from "drizzle-orm"

import { db, friendrequest } from "@rcsen/database"
import { psc } from "@/lib/psc.db" 
import { authOptions } from "@/lib/auth"

const newFriendSchema = z.object({
  userId: z.string(),
  friendId: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json("Unauthorized", { status: 401 })
    }

    const json = await req.json()
    const body = newFriendSchema.parse(json)

    if (session.user.id === body.friendId) {
      return NextResponse.json("Bad Request", { status: 400 })
    }

    const friendData = await db.user.findFirst({
      where: {
        id: body.friendId,
      },
      select: {
        id: true,
        image: true,
        name: true,
      },
    })

    if (!friendData) {
      return NextResponse.json("User Not Found", { status: 404 })
    }

    return NextResponse.json(friendData)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(JSON.stringify(error.issues), { status: 422 })
    }
    return NextResponse.json({ error }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json("Unauthorized", { status: 401 })
    }

    const demoData = [
      {
        id: "4",
        receiverId: "jhgjgvjvhvghvgh",
        senderId: "gujyggjhujhuujh",
        senderName: "demoname",
        senderImage: "https://images.app.goo.gl/2TJrXkcnUyPBtVct8",
      },
    ]
    // const incomingReq = await psc.select().from(friendrequest).where(eq(friendrequest.receiverId, session.user.id))

    // if (!incomingReq) {
    //   return NextResponse.json([], { status: 200 })
    // }

    return NextResponse.json(demoData, { status: 200 })
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}

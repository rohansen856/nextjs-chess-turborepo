import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import * as z from "zod"

import { friendrequest } from "database"
import { psc } from "@/lib/psc.db" 

import { authOptions } from "@/lib/auth"

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

export async function POST(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json("Unauthorized", { status: 401 })
    }

    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    await psc.insert(friendrequest).values({
      receiverId: params.userId,
      senderId: session.user.id,
      senderName: session.user.name,
      senderImage: session.user.image,
    })

    return NextResponse.json(null, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(JSON.stringify(error.issues), { status: 422 })
    }

    return NextResponse.json(null, { status: 500 })
  }
}

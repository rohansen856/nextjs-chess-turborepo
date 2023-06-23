"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { Friend } from "@/types"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "ui/src/components/ui/table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "ui/src/components/ui/avatar"
import { Button } from "ui/src/components/ui/button"
import { Icons } from "@/components/icons"

export function IncomingRequest() {
  const [friendData, setFriendData] = useState<null | Friend[]>(null)

  async function getRequests() {
    const { data, status } = await axios.get("/api/friends")
    if (status === 200) setFriendData(data)
  }
  useEffect(() => {
    getRequests()
  })

  if (!friendData) {
    return null
  }

  return (
    <Table>
      <TableCaption>User found.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {friendData.map((friend: any) => (
          <TableRow key={friend.id}>
            <TableCell className="font-medium">
              <Avatar className="h-6 w-6">
                <AvatarImage src={friend.image} alt="@shadcn" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="font-medium">{friend.name}</TableCell>
            <TableCell className="font-medium">
              <Button variant="outline">
                <Icons.add className="mr-2 h-5 w-5" />
                Add Friend
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

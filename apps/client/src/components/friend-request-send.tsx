"use client"

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
} from "@rcsen/ui/src/components/ui/table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@rcsen/ui/src/components/ui/avatar"
import { Button } from "@rcsen/ui/src/components/ui/button"
import { toast } from "@rcsen/ui/src/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface SendRequestProps {
  friendData: Friend[]
  canRequest: boolean
}

async function addFriend(receiverId: string) {
  if (!receiverId) {
    return toast({
      title: "Invalid user id",
      description:
        "The user id you have entered is not valid! please enter a valid id.",
      variant: "destructive",
    })
  }

  try {
    await axios.post(`/api/friends/${receiverId}`)

    return toast({
      title: "Sent SuccessFully",
      description: "The friend Request has been sent successfully",
      variant: "default",
    })
  } catch (err) {
    return toast({
      title: "Unexpected error",
      description:
        "There was an error while sending the request. please try again later.",
      variant: "destructive",
    })
  }
}

export function SendRequest({ friendData, canRequest }: SendRequestProps) {

  if(!friendData || friendData.length === 0) return null

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
            {canRequest && (
              <TableCell className="font-medium">
                <Button variant="outline" onClick={() => addFriend(friend.id)}>
                  <Icons.add className="mr-2 h-5 w-5" />
                  Add Friend
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

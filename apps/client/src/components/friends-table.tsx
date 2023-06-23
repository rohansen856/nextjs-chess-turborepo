"use client"

import { useState, useEffect } from "react"

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
import { Input } from "ui/src/components/ui/input"
import { SortFriends } from "@/components/sort-button"

interface FriendsTableProps {
  friends: Friend[]
}

export function FriendsTable({ friends }: FriendsTableProps) {
  const [friendList, setFriendList] = useState<Friend[]>(friends || [])
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [sortTerm, setSortTerm] = useState<string>("")

  useEffect(() => {
    let searchedList: Friend[] = []

    if (searchTerm.length === 0) return setFriendList(friends)

    for (const friend of friends) {
      if (friend.friendName.toLowerCase().includes(searchTerm.toLowerCase())) {
        searchedList.push(friend)
      }
    }

    setFriendList(searchedList)
  }, [searchTerm])

  useEffect(() => {
    let sortedList: Friend[] = []

    if (sortTerm.length === 0) return setFriendList(friends)

    if (sortTerm === "pending" || "friend") {
      for (const friend of friends) {
        if (friend.status?.toLowerCase().includes(sortTerm.toLowerCase())) {
          sortedList.push(friend)
        }
      }
    }

    if (sortTerm === "name") {
      sortedList = friends.slice().sort((a: Friend, b: Friend) => {
        const nameA = a.friendName.toLowerCase()
        const nameB = b.friendName.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return +1
        return 0
      })
    }

    setFriendList(sortedList)
  }, [sortTerm])

  if (!friends || friends.length === 0) {
    return (
      <div className="flex h-full w-full">
        <h3 className="text-xl">You Currently have no friends</h3>
      </div>
    )
  }

  return (
    <div>
      <div className="flex h-10 w-full">
        <Input
          className="mx-2 w-1/2"
          placeholder="Search friends"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SortFriends sortBy={setSortTerm} />
      </div>
      <Table>
        <TableCaption>A list of your friends.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {friendList.map((friend: Friend) => (
            <TableRow key={friend.friendId}>
              <TableCell className="font-medium">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={friend.friendImage || ""} alt="@shadcn" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{friend.friendName}</TableCell>
              <TableCell
                className={
                  friend.status !== "friend" ? "text-red-700" : "text-green-700"
                }
              >
                {friend.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

"use client"

import { useState } from "react"
import axios, { type AxiosResponse, isAxiosError } from "axios"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

import type { User, Friend } from "@/types"

import { Input } from "@rcsen/ui/src/components/ui/input"
import { Button } from "@rcsen/ui/src/components/ui/button"
import { toast } from "@rcsen/ui/src/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { IncomingRequest } from "@/components/friend-request-incoming"
import { SendRequest } from "@/components/friend-request-send"

interface FindFriendProps {
  user: User
  friends: Friend[]
}

interface FetchedDataProps {
  data: AxiosResponse
}

export function FindFriend({ user, friends }: FindFriendProps) {
  const [id, setId] = useState<string>("")
  const [isLoading, setLoading] = useState<boolean>(false)
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [friendData, setFriendData] = useState<null | any>(null)
  const [canRequest, setCanRequest] = useState<boolean>(false)

  async function findUser(user: User, id: string) {
    setLoading(true)
    if (id === user?.id) {
      toast({
        title: "Cannot send request to yourself",
        description:
          "You cannot send a friend request to yourself. please enter a valid user id",
        variant: "destructive",
      })
      setFriendData(null)
      setCanRequest(false)
      return setLoading(false)
    }
    if (id.length < 22 || id.length > 27) {
      toast({
        title: "Invalid user id",
        description:
          "The user id you entered is not valid. please check again.",
        variant: "destructive",
      })

      setFriendData(null)
      setCanRequest(false)
      return setLoading(false)
    }
    try {
      friends.map((friend) => {
        if (friend.id === parseInt(id)) {
          setFriendData(friend)
          setCanRequest(false)
          return setLoading(false)
        }
      })

      const { data }: FetchedDataProps = await axios.post("/api/friends", {
        userId: user.id,
        friendId: id,
      })

      if (data) {
        setFriendData([data])
        setCanRequest(true)
        return setLoading(false)
      }
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.status)
      }
      setFriendData(null)
      setCanRequest(false)
      return setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="mx-2 my-3 flex">
        <p className="my-auto mr-2">Your user id:{"  "}</p>
        <Button variant={"outline"} onClick={() => copyToClipboard(user.id)}>
          {user.id}
          <p className="ml-2 border p-1">
            {copiedText.text ? "copied" : "copy"}
          </p>
        </Button>
      </div>
      <div className="flex h-10 w-full">
        <Input
          className="mx-2 w-3/4"
          placeholder="Enter User ID here"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button
          variant={"default"}
          onClick={() => findUser(user, id)}
          disabled={isLoading}
        >
          {isLoading && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
          Search
        </Button>
      </div>
      <IncomingRequest />
      {friendData && (
        <SendRequest canRequest={canRequest} friendData={friendData} />
      )}
    </div>
  )
}

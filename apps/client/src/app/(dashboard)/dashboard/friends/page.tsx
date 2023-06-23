import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"

import { User, Friend } from "@/types"

import { psc } from "@/lib/psc.db"
import { friendlist } from "@/lib/psc.schema"
import { getCurrentUser } from "@/lib/session"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "ui/src/components/ui/tabs"
import { FriendsTable } from "@/components/friends-table"
import { FindFriend } from "@/components/friend-search"

async function getFriends(userId: string) {
  const friends: Friend[] = await psc
    .select()
    .from(friendlist)
    .where(eq(friendlist.userId, userId))
  return friends
}

export default async function FriendsData() {
  const user = await getCurrentUser()
  if (!user) {
    return redirect("/")
  }

  // const friends = await getFriends(user.id)
  const friends: Friend[] = []

  return (
    <Tabs defaultValue={"friends"} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="friends">Friends</TabsTrigger>
        <TabsTrigger value="addFriends">Add Friend</TabsTrigger>
      </TabsList>
      <TabsContent value="friends">
        <FriendsTable friends={friends} />
      </TabsContent>
      <TabsContent value="addFriends">
        <FindFriend user={user as User} friends={friends} />
      </TabsContent>
    </Tabs>
  )
}

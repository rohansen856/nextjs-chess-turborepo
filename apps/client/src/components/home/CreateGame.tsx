"use client"

import { useRouter } from "next/navigation"
import type { FormEvent } from "react"
import { useContext, useState } from "react"

import { SessionContext } from "@/context/ContextProvider"
import { createGame } from "@/lib/game"

import { Checkbox } from "ui/src/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "ui/src/components/ui/select"
import { Label } from "ui/src/components/ui/label"
import { Button } from "ui/src/components/ui/button"
import { toast } from "ui/src/components/ui/use-toast"

export default function CreateGame() {
  const session = useContext(SessionContext)
  const [buttonLoading, setButtonLoading] = useState(false)
  const router = useRouter()

  async function submitCreateGame(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!session?.profile?.id) return
    setButtonLoading(true)

    const target = e.target as HTMLFormElement
    const unlisted = target.elements.namedItem(
      "createUnlisted"
    ) as HTMLInputElement
    const startingSide = (
      target.elements.namedItem("createStartingSide") as HTMLSelectElement
    ).value

    const game = await createGame(
      session.profile,
      startingSide,
      unlisted.checked
    )

    if (game) {
      router.push(`/newgame/${game.code}`)
    } else {
      setButtonLoading(false)

      toast({
        title: "There was an error",
        description:
          "We encountered an unexpected error! please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <form className="form-control" onSubmit={submitCreateGame}>
      <Label className="label cursor-pointer">
        <span className="label-text">Unlisted/invite-only</span>
        <Checkbox
          className="checkbox"
          name="createUnlisted"
          id="createUnlisted"
        />
      </Label>
      <Label className="label" htmlFor="createStartingSide">
        <span className="label-text">Select your side</span>
      </Label>
      <div className="input-group">
        <Select>
          <SelectTrigger
            className="select-bordered select"
            name="createStartingSide"
            id="createStartingSide"
          >
            <SelectValue placeholder="choose your side" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="random">Random</SelectItem>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="black">Black</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className={
            "btn" +
            (buttonLoading ? " loading" : "") +
            (!session?.profile?.id ? " btn-disabled text-base-content" : "")
          }
          type="submit"
        >
          Create
        </Button>
      </div>
    </form>
  )
}

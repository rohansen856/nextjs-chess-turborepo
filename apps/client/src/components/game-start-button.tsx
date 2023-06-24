"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@rcsen/ui/src/components/ui/button"
import { Icons } from "@/components/icons"

interface GameStartButtonProps extends ButtonProps {}

export function GameStartButton({
  className,
  variant,
  ...props
}: GameStartButtonProps) {
  const [isLoading, setLoading] = React.useState<boolean>(false)

  return (
    <button
      onClick={() => setLoading(true)}
      className={cn(
        buttonVariants({ variant }),
        "p-0",
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      <Link
        href={"/newgame"}
        className="justify-content-center flex h-full w-full items-center p-2"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.add className="mr-2 h-4 w-4" />
        )}
        New Game
      </Link>
    </button>
  )
}

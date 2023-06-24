import { useState, useEffect } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@rcsen/ui/src/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@rcsen/ui/src/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@rcsen/ui/src/components/ui/popover"

const frameworks = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "recent",
    label: "Recent",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "friend",
    label: "Friend",
  },
]

export function SortFriends({ sortBy }: { sortBy: any }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    sortBy(value)
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Sort By..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

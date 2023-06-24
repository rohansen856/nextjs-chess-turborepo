import { Skeleton } from "@rcsen/ui/src/components/ui/skeleton"
import { Separator } from "@rcsen/ui/src/components/ui/separator"

export default function FriendsDataLoading() {
  return (
    <div className="h-full w-full">
      <Skeleton className="h-10 w-full" />
      <div className="my-1 flex h-10 w-full">
        <Skeleton className="mx-1 h-10 w-1/2" />
        <Skeleton className="h-10 w-[120px]" />
      </div>
      {[1, 2, 3, 4, 5].map((i) => (
        <>
          <Skeleton className="h-16 w-full rounded-none" />
          <Separator />
        </>
      ))}
    </div>
  )
}

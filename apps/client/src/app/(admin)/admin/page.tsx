import { DataCard } from "@/components/admin/data-card"

export const revalidate = 0

export default function AdminPage() {
  return (
    <div className="">
      <div className="flex w-full flex-wrap justify-around">
        <DataCard title="any title" data={"any data"} footer="any footer" />
        <DataCard title="any title" data={"any data"} footer="any footer" />
        <DataCard title="any title" data={"any data"} footer="any footer" />
      </div>
      <div className="bg-blue-700"></div>
    </div>
  )
}

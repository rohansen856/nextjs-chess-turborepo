import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@rcsen/ui/src/components/ui/card"

interface DataCardProps {
  title: string
  data: string | number | null
  footer: string
}

export function DataCard({ title, data, footer }: DataCardProps) {
  return (
    <Card className="bg-secondary m-2 w-[300px]">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle>{data}</CardTitle>
      </CardHeader>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}

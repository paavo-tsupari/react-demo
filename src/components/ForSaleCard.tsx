import type { SaleItem } from '@/api-mock/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { useNavigate } from '@tanstack/react-router'

type ForSaleCardProps = {
  item: SaleItem
}
export default function ForSaleCard({ item }: ForSaleCardProps) {
  const navigate = useNavigate()
  return (
    <Card
      onClick={() =>
        navigate({ to: '/listing/$listingId', params: { listingId: item.id } })
      }
      className="w-full max-w-sm "
    >
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.price}€</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={item.image} className="w-full h-full object-cover" />
      </CardContent>
    </Card>
  )
}

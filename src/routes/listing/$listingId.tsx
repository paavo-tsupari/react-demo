import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

export const Route = createFileRoute('/listing/$listingId')({
  component: RouteComponent,
})

function RouteComponent() {
  //const { listingId } = Route.useParams()
  const navigate = useNavigate()
  const mockData = {
    id: '1',
    name: 'tshirt',
    description: 'A cozy shirt',
    image: 'url',
    price: 19.99,
  }
  return (
    <Card className="w-full max-w-xl mx-auto w-full mt-10 ">
      <CardHeader>
        <Button onClick={() => navigate({ to: '/' })} className="w-30">
          <ChevronLeft />
          <span className="mr-3">Go back</span>
        </Button>
        <CardTitle>{mockData.name}</CardTitle>
        <CardTitle>{mockData.price}€</CardTitle>
        <CardDescription>{mockData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={mockData.image} className="w-full h-full object-cover" />
      </CardContent>
    </Card>
  )
}

import ForSaleCard from '@/components/ForSaleCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const mockData = [
    {
      id: '1',
      name: 'tshirt',
      description: 'A cozy shirt',
      image: 'url',
      price: 19.99,
    },
    {
      id: '2',
      name: 'hamburger',
      description: 'A healthy desert',
      image: 'url',
      price: 8.49,
    },
    {
      id: '3',
      name: 'pizza slice',
      description: 'Cheesy and delicious',
      image: 'url',
      price: 4.99,
    },
    {
      id: '4',
      name: 'smoothie',
      description: 'Fresh fruit blend',
      image: 'url',
      price: 5.99,
    },
    {
      id: '5',
      name: 'coffee',
      description: 'Hot and energizing',
      image: 'url',
      price: 3.49,
    },
    {
      id: '10',
      name: 'sneakers',
      description: 'Light and durable shoes',
      image: 'url',
      price: 59.99,
    },
    {
      id: '11',
      name: 'jacket',
      description: 'Windproof outdoor jacket',
      image: 'url',
      price: 89.99,
    },
    {
      id: '12',
      name: 'cap',
      description: 'Adjustable baseball cap',
      image: 'url',
      price: 14.99,
    },
  ]
  return (
    <div className="text-center">
      <div className="p-5 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full mt-4">
        {mockData &&
          mockData.map((item) => <ForSaleCard item={item} key={item.id} />)}
      </div>
    </div>
  )
}

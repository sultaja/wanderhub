import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    title: "Paris, France",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 2392,
    price: "$1,200",
  },
  {
    title: "Bali, Indonesia",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 1829,
    price: "$800",
  },
  {
    title: "Tokyo, Japan",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 3104,
    price: "$1,500",
  },
]

export function LandingDestinations() {
  return (
    <section id="destinations" className="container space-y-8 py-12 md:py-24 lg:space-y-16">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Destinations</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Explore our most popular destinations and start planning your next adventure.
          </p>
        </div>
        <Button
          variant="outline"
          className="w-full md:w-auto border-[#FF7757] text-[#FF7757] hover:bg-[#FF7757] hover:text-white"
        >
          View All Destinations
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Card key={destination.title} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">{destination.title}</h3>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({destination.reviews} reviews)</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-bold text-[#FF7757]">{destination.price}</p>
                <Button size="sm" className="bg-[#FF7757] hover:bg-[#FF7757]/90">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


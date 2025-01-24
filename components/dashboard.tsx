"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const destinations = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
  },
]

const upcomingTrips = [
  {
    id: 1,
    title: "Kuala Lumpur - Ipoh",
    country: "Malaysia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    days: 12,
    daysLeft: 4,
    budget: "$1,200",
    travelers: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    ],
  },
  {
    id: 2,
    title: "Sapa - Ninh Binh",
    country: "Vietnam",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    days: 24,
    daysLeft: 12,
    budget: "$890",
    travelers: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    ],
  },
]

const places = [
  {
    id: 1,
    name: "Central Market - Kuala Lumpur",
    description: "A vibrant cultural landmark offering local crafts, souvenirs, and Malaysian cuisine.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    rating: 4.5,
    reviews: 47,
    guide: {
      name: "Nita",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    },
    tags: ["Shopping", "Souvenirs", "Culture"],
  },
  {
    id: 2,
    name: "Merdeka Square - Kuala Lumpur",
    description: "An iconic historic site surrounded by colonial buildings and the famous Sultan Abdul Samad Building.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    rating: 4.6,
    reviews: 53,
    guide: {
      name: "El Primo",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp",
    },
    tags: ["History", "Architecture", "Photography"],
  },
]

export function Dashboard() {
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      try {
        const { name } = JSON.parse(user)
        setUserName(name)
      } catch (error) {
        console.error("Error parsing user data:", error)
        handleSignOut()
      }
    } else {
      // If no user is found, redirect to signin
      router.push("/signin")
    }
  }, [router])

  const handleSignOut = () => {
    localStorage.removeItem("user")
    router.push("/signin")
  }

  if (!userName) {
    return null // or a loading spinner
  }

  return (
    <div className="flex-1">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-2xl font-semibold">
          Good Morning, {userName} <span className="wave">👋</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search destinations..." />
          </div>
          <Button size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </header>
      <ScrollArea className="h-[calc(100vh-73px)]">
        <main className="p-6">
          <div className="mb-8">
            <p className="mb-4 text-sm text-muted-foreground">Plan your itinerary with us</p>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="relative aspect-[4/3] w-[200px] shrink-0 overflow-hidden rounded-xl"
                >
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt="Destination"
                    className="object-cover"
                    fill
                  />
                  <Avatar className="absolute bottom-3 left-3 h-8 w-8 border-2 border-white">
                    <AvatarImage src={destination.avatar} alt="Avatar" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Upcoming Trip</h2>
              <Button variant="link" className="text-[#FF7757]">
                Details
              </Button>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">Remember your upcoming trips!</p>
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingTrips.map((trip) => (
                <Card key={trip.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} className="object-cover" fill />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{trip.title}</h3>
                        <p className="text-sm text-muted-foreground">{trip.country}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="rounded bg-[#FF7757]/10 px-2 py-1 text-xs font-medium text-[#FF7757]">
                              {trip.days} Days
                            </div>
                            <div className="rounded bg-[#FF7757]/10 px-2 py-1 text-xs font-medium text-[#FF7757]">
                              {trip.daysLeft} Days Left
                            </div>
                          </div>
                          <div className="flex -space-x-2">
                            {trip.travelers.map((traveler, index) => (
                              <Avatar key={index} className="border-2 border-white">
                                <AvatarImage src={traveler} alt="Traveler" />
                                <AvatarFallback>T</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-sm font-medium">Budget:</span>
                          <span className="text-sm text-muted-foreground">{trip.budget}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                For your Malaysia <span className="inline-block translate-y-[2px]">🗺️</span> Trip
              </h2>
              <Button variant="link" className="text-[#FF7757]">
                Details
              </Button>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">These can&apos;t be missed places</p>
            <div className="grid gap-4">
              {places.map((place) => (
                <Card key={place.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-lg">
                        <Image src={place.image || "/placeholder.svg"} alt={place.name} className="object-cover" fill />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-start justify-between">
                          <h3 className="font-semibold">{place.name}</h3>
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0">
                              <svg
                                className=" h-5 w-5 text-red-500"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                              </svg>
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0">
                              <svg
                                className=" h-5 w-5"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                                <path d="M21 3v5h-5" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">{place.description}</p>
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <svg
                              className=" h-4 w-4 text-yellow-400"
                              fill="currentColor"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="text-sm font-medium">{place.rating}</span>
                            <span className="text-sm text-muted-foreground">({place.reviews})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Guide by:</span>
                            <div className="flex items-center gap-1">
                              <Avatar className="h-5 w-5">
                                <AvatarImage src={place.guide.avatar} alt={place.guide.name} />
                                <AvatarFallback>{place.guide.name[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{place.guide.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {place.tags.map((tag) => (
                            <div key={tag} className="rounded-full bg-muted px-2 py-1 text-xs">
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </ScrollArea>
    </div>
  )
}


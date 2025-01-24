import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24">
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Plan Your Perfect Trip with <span className="text-[#FF7757]">WanderHub</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Discover amazing destinations, connect with fellow travelers, and create unforgettable memories. Your next
              adventure starts here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input className="pl-9" placeholder="Where do you want to go?" />
              </div>
              <Button size="lg" className="bg-[#FF7757] text-white hover:bg-[#FF7757]/90">
                Start Planning
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold">50k+</p>
                <p className="text-sm text-gray-500">Destinations</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100k+</p>
                <p className="text-sm text-gray-500">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold">150k+</p>
                <p className="text-sm text-gray-500">Trips Planned</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image src="/placeholder.svg" alt="Travel Destinations" fill className="object-cover rounded-lg" priority />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 to-white" />
    </section>
  )
}


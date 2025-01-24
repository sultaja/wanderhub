import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "WanderHub made planning my trip to Japan so much easier. The itinerary tools and local recommendations were invaluable!",
    author: "Sarah Chen",
    title: "Travel Enthusiast",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "I love how easy it is to connect with other travelers and share experiences. The community aspect sets WanderHub apart.",
    author: "Michael Rodriguez",
    title: "Digital Nomad",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "The budget tracking feature helped me stay on top of my expenses during my European tour. Highly recommended!",
    author: "Emma Thompson",
    title: "Adventure Seeker",
    avatar: "/placeholder.svg",
  },
]

export function LandingTestimonials() {
  return (
    <section id="testimonials" className="container space-y-8 py-12 md:py-24 lg:space-y-16">
      <div className="mx-auto text-center md:max-w-[58rem]">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Loved by travelers worldwide</h2>
        <p className="mt-4 text-gray-500 md:text-xl">
          Don't just take our word for it. Here's what our users have to say about their WanderHub experience.
        </p>
      </div>
      <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.author} className="relative overflow-hidden">
            <CardContent className="p-6">
              <svg
                className="absolute right-6 top-6 h-8 w-8 text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                />
              </svg>
              <div className="mt-8 space-y-4">
                <p className="text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


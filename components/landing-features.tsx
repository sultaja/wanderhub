import { Globe2, Map, Users2, Wallet } from "lucide-react"

const features = [
  {
    icon: Globe2,
    title: "Worldwide Destinations",
    description: "Access to thousands of destinations worldwide, with detailed guides and local insights.",
  },
  {
    icon: Users2,
    title: "Connect with Travelers",
    description: "Join a community of passionate travelers, share experiences, and make new friends.",
  },
  {
    icon: Map,
    title: "Smart Trip Planning",
    description: "Intelligent trip planning tools to create the perfect itinerary for your journey.",
  },
  {
    icon: Wallet,
    title: "Budget Management",
    description: "Keep track of your expenses and plan your budget with our smart tools.",
  },
]

export function LandingFeatures() {
  return (
    <section id="features" className="container space-y-8 py-12 md:py-24 lg:space-y-16">
      <div className="mx-auto text-center md:max-w-[58rem]">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Everything you need to plan the perfect trip
        </h2>
        <p className="mt-4 text-gray-500 md:text-xl">
          WanderHub provides all the tools and features you need to plan, organize, and enjoy your travels.
        </p>
      </div>
      <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-white p-6">
            <feature.icon className="h-12 w-12 text-[#FF7757]" />
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


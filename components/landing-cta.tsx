import { Button } from "@/components/ui/button"

export function LandingCTA() {
  return (
    <section className="bg-[#FF7757]/5 py-12 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Ready to start your adventure?
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Join thousands of travelers who are already using WanderHub to plan their perfect trips.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-[#FF7757] text-white hover:bg-[#FF7757]/90">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


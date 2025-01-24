import { LandingHero } from "@/components/landing-hero"
import { LandingFeatures } from "@/components/landing-features"
import { LandingDestinations } from "@/components/landing-destinations"
import { LandingTestimonials } from "@/components/landing-testimonials"
import { LandingCTA } from "@/components/landing-cta"
import { LandingFooter } from "@/components/landing-footer"
import { LandingNav } from "@/components/landing-nav"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingDestinations />
      <LandingTestimonials />
      <LandingCTA />
      <LandingFooter />
    </div>
  )
}


import Link from "next/link"

const footerLinks = {
  Product: ["Features", "Pricing", "Testimonials", "FAQ"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Support", "Privacy Policy", "Terms of Service"],
  Social: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
}

export function LandingFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              WanderHub
            </Link>
            <p className="mt-4 text-gray-500">
              Plan, share, and explore your next adventure with WanderHub. Join our community of passionate travelers
              today.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-500 hover:text-[#FF7757] hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} WanderHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


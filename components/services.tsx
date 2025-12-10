"use client"

import { Home, Paintbrush, Droplets, Hammer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/components/use-scroll-animation"

const services = [
  {
    icon: Home,
    title: "Interior & Exterior Painting",
    description:
      "Complete painting solutions for inside and outside your property. Premium finishes that protect and beautify your home or business.",
  },
  {
    icon: Paintbrush,
    title: "Custom Paint Finishes",
    description:
      "Specialty finishes including faux painting, textured walls, accent walls, and decorative techniques to make your space unique.",
  },
  {
    icon: Droplets,
    title: "Power Wash",
    description:
      "Professional power washing services to clean and prepare surfaces. Remove dirt, mold, and grime from driveways, decks, and siding.",
  },
  {
    icon: Hammer,
    title: "Carpentry & Floor Services",
    description:
      "Expert carpentry repairs and floor refinishing. We handle trim work, moldings, deck repairs, and wood floor restoration.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional painting services tailored to your needs, whether it's a cozy home renovation or a large-scale
            commercial project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-lg transition-all duration-300 border-border bg-card hover:border-primary/30 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

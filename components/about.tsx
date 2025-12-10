"use client"

import { Award, Clock, Users, Shield } from "lucide-react"
import { useScrollAnimation } from "@/components/use-scroll-animation"

const stats = [
  { icon: Clock, value: "11+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Award, value: "100%", label: "Satisfaction Rate" },
  { icon: Shield, value: "5 Year", label: "Warranty" },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="about" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-primary-foreground/70 font-semibold tracking-wide uppercase text-sm">About Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Quality Craftsmanship, Every Brush Stroke
            </h2>
            <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed">
              <p>
                Looking for a painting company with skilled in-house professionals, organizational excellence, and
                outstanding customer service skills? Don't look any further....
              </p>
              <p>
                With over 11 years of experience, Diaz's Painters is here to assist you in all areas of your painting
                project. 💯
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center ${isVisible ? "animate-scale-in" : ""}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-foreground/80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

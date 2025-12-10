"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Award } from "lucide-react"
import { useScrollAnimation } from "@/components/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const highlights = [
    { icon: Clock, text: "Fast Turnaround Time" },
    { icon: Shield, text: "Fully Insured & Certified" },
    { icon: Award, text: "11+ Years Experience" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/herosection.jpg"
          alt="Beautifully painted living room with blue walls"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-[#1a2744]/60" />
      </div>

      {/* Content with animations */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className={`max-w-2xl ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
            Your First Choice for Interior & Exterior Painting
          </h1>

          <div className="space-y-4 mb-8">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className={`flex items-center gap-3 text-white ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <item.icon className="h-5 w-5 text-[#d4a84b]" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            asChild
            className={`bg-primary hover:bg-primary/90 text-primary-foreground text-base rounded-full px-8 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}
          >
            <Link href="#contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Floating card with animation */}
      <div
        className={`absolute bottom-0 right-0 lg:right-20 lg:bottom-20 z-20 hidden lg:block ${isVisible ? "animate-fade-in-right delay-300" : "opacity-0"}`}
      >
        <div className="bg-[#1a2744] text-white p-8 rounded-t-lg lg:rounded-lg shadow-2xl max-w-md">
          {/* Review badges */}
          <div className="flex items-center justify-center gap-6 mb-6 pb-6 border-b border-white/20">
            <div className="text-center">
              <p className="text-[#4285f4] font-semibold">Google</p>
              <div className="flex text-[#fbbc05]">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">Facebook</p>
              <div className="flex text-[#fbbc05]">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-2">GET A FREE ESTIMATE</h3>
          <p className="text-white/70 text-center text-sm mb-4">
            Fill out our form below and a representative will be in touch.
          </p>
          <Button asChild className="w-full bg-[#d4a84b] hover:bg-[#c49a3d] text-[#1a2744] font-bold">
            <Link href="#contact">Request Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

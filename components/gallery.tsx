"use client"

import { useScrollAnimation } from "@/components/use-scroll-animation"

const beforeAfterPairs = [
  {
    before: "/images/1.jpeg",
    after: "/images/1.jpeg",
    altBefore: "Blue house before painting - peeling paint with ladders",
    altAfter: "Blue house after painting - fresh navy finish",
  },
  {
    before: "/images/2.jpeg",
    after: "/images/2.jpeg",
    altBefore: "Yellow house before painting - peeling siding with workers",
    altAfter: "Yellow house after painting - clean yellow finish",
  },
  {
    before: "/images/3.jpeg",
    after: "/images/3.jpeg",
    altBefore: "Gray house before - work in progress with ladder",
    altAfter: "White house after painting - completed project",
  },
]

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="gallery" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">Recent Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Take a look at some of our recent painting projects showcasing our quality workmanship.
          </p>
        </div>

        <div className={`flex flex-col gap-8 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {beforeAfterPairs.map((pair, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]">
                <img
                  src={pair.before || "/placeholder.svg"}
                  alt={pair.altBefore}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  Before
                </div>
              </div>
              {/* After Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]">
                <img
                  src={pair.after || "/placeholder.svg"}
                  alt={pair.altAfter}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  After
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

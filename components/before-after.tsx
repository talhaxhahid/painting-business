"use client"

import { useScrollAnimation } from "@/components/use-scroll-animation"

const transformations = [
  {
    id: 1,
    title: "Window Frame Restoration",
    description: "Exterior woodwork restored to a rich burgundy finish",
    beforeImage: "/images/window.jpg",
    afterImage: "/images/window.jpg",
  },
  {
    id: 2,
    title: "Bedroom Transformation",
    description: "Complete room makeover with elegant mauve walls",
    beforeImage: "/images/room.jpg",
    afterImage: "/images/room.jpg",
  },
  {
    id: 3,
    title: "Master Bedroom Transformation",
    description: "Fresh new look with sophisticated color scheme",
    beforeImage: "/images/masterbed.jpg",
    afterImage: "/images/masterbed.jpg",
  },
]

export function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="work" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Our Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            See the Transformation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            View our stunning before and after results of professional painting work.
          </p>
        </div>

        <div className="space-y-12">
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Before Image - LEFT SIDE */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.beforeImage || "/placeholder.svg"}
                    alt={`${item.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Before
                  </div>
                </div>

                {/* After Image - RIGHT SIDE */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.afterImage || "/placeholder.svg"}
                    alt={`${item.title} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    After
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

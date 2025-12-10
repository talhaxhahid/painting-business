import { Paintbrush } from "lucide-react"

interface LogoProps {
  className?: string
  iconColor?: string
  textColor?: string
}

export function Logo({ className = "", iconColor = "text-[#d4a84b]", textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Paintbrush className={`h-8 w-8 ${iconColor} -rotate-45`} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-2xl md:text-3xl font-bold tracking-tight ${textColor}`}>Diaz's</span>
        <span className={`text-xs md:text-sm font-semibold uppercase tracking-[0.2em] ${iconColor}`}>Painting</span>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "@/components/logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        Professional Painting Services in Lawrence, MA - Call for a Free Quote!
      </div>

      <div className="bg-[#1a2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-stretch h-20">
            <Link href="/" className="flex items-center mr-8">
              <Logo />
            </Link>

            <nav className="flex items-center gap-8 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="tel:9783273791"
              className="flex flex-col items-center justify-center px-8 bg-gradient-to-b from-[#e8b84a] to-[#c49a3d] hover:from-[#f0c45a] hover:to-[#d4a84b] transition-all -my-0 ml-4"
            >
              <span className="text-[#1a2744] text-xs font-bold uppercase tracking-wider">Free Estimates</span>
              <span className="text-[#1a2744] text-xl font-bold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                978 327 3791
              </span>
            </a>
          </div>

          <div className="md:hidden">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <Logo />
              </Link>

              <div className="flex items-center gap-2">
                <a
                  href="tel:9783273791"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-[#e8b84a] to-[#c49a3d]"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5 text-[#1a2744]" />
                </a>

                <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                  {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="py-4 border-t border-white/20">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors font-medium py-2 uppercase text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

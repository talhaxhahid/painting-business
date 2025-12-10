import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              Professional painting services for homes and businesses. Quality craftsmanship since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Interior & Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Custom Paint Finishes
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Power Wash
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Carpentry & Floor Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/diaz_paint_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d4a84b]" />
                <a href="tel:9783273791" className="hover:text-white transition-colors">
                  978 327 3791
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#d4a84b]" />
                <a href="mailto:Eribertodiaz978@gmail.com" className="hover:text-white transition-colors">
                  Eribertodiaz978@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d4a84b]" />
                <span>Lawrence, MA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Diaz's Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const LINKS = [
  { href: '/products', label: 'Jewelry Products' },
  { href: '/creations', label: 'Master Creations' },
  { href: '/about', label: 'About The Maison' },
  { href: '/craft', label: 'The Atelier & Craft' },
  { href: '/standards', label: 'Purity & Standards' },
  { href: '/salons', label: 'Flagship Salons' },
  { href: '/book', label: 'Book VIP Appointment' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0b10] px-4 py-12 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="font-serif text-2xl tracking-[0.22em] font-medium text-white">
              VALOIRE
            </Link>
            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Handcrafted 18K/22K solid gold and GIA certified natural diamond creations by VALOIRE Haute Joaillerie.
            </p>
            <div className="flex items-center gap-2 pt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Karachi</span> · <span>Lahore</span> · <span>Worldwide</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer" className="flex flex-col gap-2.5 font-mono text-xs uppercase tracking-wider md:col-span-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Navigation</span>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-muted-foreground transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Direct Contact */}
          <div className="flex flex-col gap-3 font-mono text-xs md:col-span-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Direct Contact</span>
            <a
              href="tel:+923072151932"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5 text-muted-foreground" /> 0307 2151932
            </a>
            <a
              href="https://wa.me/923072151932?text=Hi%20VALOIRE%2C%20I%20would%20like%20to%20inquire%20about%20your%20Fine%20Jewelry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp: 0307 2151932
            </a>
            <a
              href="mailto:arehman2370@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" /> arehman2370@gmail.com
            </a>
            <Link
              href="/payment"
              className="text-muted-foreground transition-colors hover:text-white uppercase tracking-wider text-[11px] pt-1"
            >
              Secure Payment & Delivery →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row text-center sm:text-left">
          <p>© 2026 VALOIRE Haute Joaillerie (Pakistan). All rights reserved.</p>
          <p className="text-white font-medium">Phone / WhatsApp: 0307 2151932</p>
        </div>
      </div>
    </footer>
  )
}


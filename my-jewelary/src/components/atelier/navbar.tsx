'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ShoppingBag,
  Sparkles,
  Gem,
  Hammer,
  ShieldCheck,
  Building2,
  CalendarCheck,
  Home as HomeIcon,
  User,
} from 'lucide-react'

interface NavbarProps {
  cartCount?: number
  onOpenBag?: () => void
}

const SECTIONS = [
  { name: 'Home', href: '/', icon: HomeIcon, tag: 'Overview' },
  { name: 'Products', href: '/products', icon: Gem, tag: 'Catalog' },
  { name: 'Creations', href: '/creations', icon: Sparkles, tag: 'Masterpieces' },
  { name: 'Craft', href: '/craft', icon: Hammer, tag: 'Atelier' },
  { name: 'Standards', href: '/standards', icon: ShieldCheck, tag: 'Purity' },
  { name: 'Salons', href: '/salons', icon: Building2, tag: 'Locations' },
  { name: 'Book Visit', href: '/book', icon: CalendarCheck, tag: 'VIP' },
]

export function Navbar({ cartCount = 0, onOpenBag }: NavbarProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08080a]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl transition-all">
      {/* Top Brand & Actions Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        {/* Brand Name */}
        <Link href="/" className="flex flex-col group cursor-pointer">
          <span className="font-serif text-lg sm:text-2xl tracking-[0.22em] text-white font-medium group-hover:text-white/90 transition">
            VALOIRE
          </span>
          <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-muted-foreground group-hover:text-white/70 transition">
            Haute Joaillerie · Pakistan
          </span>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 sm:px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300 hover:border-white/30 hover:text-white transition"
          >
            <User className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Account</span>
          </Link>

          <Link
            href="/book"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-amber-200 hover:bg-amber-500/20 transition cursor-pointer"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            <span>Book Visit</span>
          </Link>

          {onOpenBag ? (
            <button
              type="button"
              onClick={onOpenBag}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 sm:px-4 py-1.5 font-mono text-xs text-white hover:bg-white/20 transition active:scale-95"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Bag ({cartCount})</span>
            </button>
          ) : (
            <Link
              href="/products"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 sm:px-4 py-1.5 font-mono text-xs text-white hover:bg-white/20 transition active:scale-95"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Catalog</span>
            </Link>
          )}
        </div>
      </div>

      {/* Prominent Horizontal Section Navigation Bar at the Very Top */}
      <nav aria-label="Main Site Sections" className="border-t border-white/[0.06] bg-[#050507]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-none">
            {SECTIONS.map((sec) => {
              const isActive = pathname === sec.href
              const Icon = sec.icon
              return (
                <Link
                  key={sec.name}
                  href={sec.href}
                  className={`group relative flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 transition ${isActive ? 'text-black' : 'text-zinc-400 group-hover:text-white'}`} />
                  <span>{sec.name}</span>
                  {isActive && (
                    <span className="hidden md:inline-block rounded-full bg-black/15 px-1.5 py-0.5 text-[8px] font-bold text-black uppercase">
                      {sec.tag}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

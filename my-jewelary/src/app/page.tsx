'use client'

import {
  ArrowRight,
  ArrowUpRight,
  Gem,
  ShieldCheck,
  Sparkles,
  Hammer,
  Building2,
  CalendarCheck,
  Award,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { BlinkClientBoundary } from '@/components/BlinkClientBoundary'
import { PRODUCTS, type Product } from '@/components/atelier/collection'
import { Footer } from '@/components/atelier/footer'
import { Navbar } from '@/components/atelier/navbar'
import { CheckoutDrawer } from '@/components/atelier/CheckoutDrawer'

export default function Home() {
  return (
    <BlinkClientBoundary fallback={<div className="min-h-dvh bg-[#0d0e15]" />}>
      <MainHero />
    </BlinkClientBoundary>
  )
}

function MainHero() {
  const [cart, setCart] = useState<Product[]>([])
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const sectionCards = [
    {
      title: 'Fine Jewelry Products',
      subtitle: 'Complete Catalog & Inventory',
      desc: 'Explore diamond solitaire rings, emerald necklaces, and bridal sets with direct checkout.',
      href: '/products',
      icon: Gem,
      shade: 'from-[#1a1b29] to-[#12131d]',
      cta: 'Explore Products',
    },
    {
      title: 'Master Creations',
      subtitle: 'Haute Joaillerie Signatures',
      desc: 'Rare diamonds, 18K/22K solid gold, and platinum creations crafted for distinction.',
      href: '/creations',
      icon: Sparkles,
      shade: 'from-[#1e1f30] to-[#141522]',
      cta: 'View Creations',
    },
    {
      title: 'About The Maison',
      subtitle: 'Heritage, Craft & Standards',
      desc: 'Discover our founding story, 4-stage metallurgy, and GIA diamond grading standards.',
      href: '/about',
      icon: Award,
      shade: 'from-[#1c1d2c] to-[#13141f]',
      cta: 'Discover Maison',
    },
    {
      title: 'Artisanal Craftsmanship',
      subtitle: 'Master Metallurgy & Setting',
      desc: 'Witness how rough gemstones and 22K gold are transformed by our master goldsmiths.',
      href: '/craft',
      icon: Hammer,
      shade: 'from-[#191a27] to-[#11121c]',
      cta: 'Explore Craft',
    },
    {
      title: 'Flagship Salons',
      subtitle: 'Karachi & Lahore Lounges',
      desc: 'Visit our private consultation viewing lounges in Clifton, Karachi and Gulberg, Lahore.',
      href: '/salons',
      icon: Building2,
      shade: 'from-[#171825] to-[#10111a]',
      cta: 'Locate Salons',
    },
    {
      title: 'Book Private Visit',
      subtitle: 'VIP Concierge Consultation',
      desc: 'Reserve a private one-on-one session at VALOIRE luxury viewing suites.',
      href: '/book',
      icon: CalendarCheck,
      shade: 'from-[#222338] to-[#161726]',
      cta: 'Book Salon Visit',
    },
  ]

  // Featured 3 signature pieces for homepage preview
  const featuredPieces = PRODUCTS.slice(0, 3)

  return (
    <main id="top" className="bg-[#0e0f16] text-[#F8FAFC] overflow-x-hidden w-full max-w-full selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation */}
      <Navbar cartCount={cart.length} onOpenBag={() => setCheckoutOpen(true)} />

      {/* Hero Section with Lightened, High-Clarity Video Background */}
      <section className="relative min-h-[85vh] md:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#10111a]">
        {/* Background Video (Lightened & Luminous) */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-85 brightness-105 contrast-105"
          src="/media/atelier-diamond.mp4"
          poster="/media/atelier-diamond-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="A diamond transformed by the cutting house"
        />
        
        {/* Subtle, Soft Luminous Vignette Overlays so Video is Clearly Visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f16] via-transparent to-black/30 pointer-events-none" />

        {/* Ambient Gold Halo */}
        <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

        {/* Hero Content Center */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 md:px-12 my-auto">
          <div className="max-w-2xl space-y-4 sm:space-y-6 rounded-3xl bg-black/35 backdrop-blur-md p-6 sm:p-8 border border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-amber-300" />
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-200 font-medium">
                Valoire Haute Joaillerie Atelier
              </p>
            </div>

            <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight text-white font-normal drop-shadow-md">
              Measured Purity.<br />
              <span className="italic font-light text-amber-100/90">Timeless Elegance.</span>
            </h1>

            <p className="max-w-xl text-xs sm:text-base leading-relaxed text-zinc-200">
              Handcrafted 18K/22K solid gold, certified natural diamonds, and pure silver creations by <strong>VALOIRE Atelier</strong>. Tailored for distinction in Karachi, Lahore, and worldwide.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 sm:px-7 py-3.5 sm:py-4 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-zinc-200 transition active:scale-[0.98] shadow-2xl cursor-pointer"
              >
                Explore Products ({PRODUCTS.length}) <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 sm:px-6 py-3.5 sm:py-4 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/20 transition cursor-pointer backdrop-blur-md"
              >
                About The Maison <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero 3 Trust Badges Bar */}
        <div className="relative z-20 border-t border-white/[0.08] bg-[#0e0f16]/90 backdrop-blur-md px-4 py-5 sm:px-8 md:px-12">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-medium text-white">Karachi & Lahore Salons</h4>
                <p className="text-[11px] text-zinc-400">Handcrafted jewelry heritage</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300">
                <Gem className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-medium text-white">GIA & IGI Certified</h4>
                <p className="text-[11px] text-zinc-400">Independently graded natural gems</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-medium text-white">18K / 22K Solid Gold</h4>
                <p className="text-[11px] text-zinc-400">Official hallmark purity guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Sections Navigation Hub */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#12131d] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">Explore The Maison</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal">
              Dedicated Experience Sections
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Select any section below or use the top navigation bar to explore our jewelry creations, craft, standards, and salons.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectionCards.map((sec) => {
              const Icon = sec.icon
              return (
                <Link
                  key={sec.title}
                  href={sec.href}
                  className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b ${sec.shade} p-6 hover:border-amber-400/40 hover:-translate-y-1 transition duration-300 shadow-xl`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] text-white group-hover:bg-amber-400 group-hover:text-black transition">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                        {sec.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-white group-hover:text-amber-200 transition">
                        {sec.title}
                      </h3>
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs uppercase tracking-wider text-white">
                    <span>{sec.cta}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Masterpieces Showcase Preview */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#0e0f16] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">Exclusive Spotlight</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal mt-1">
                Featured Atelier Creations
              </h2>
            </div>
            <Link
              href="/creations"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-amber-300 transition"
            >
              View All Masterpieces ({PRODUCTS.length}) <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {featuredPieces.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl border border-white/[0.08] bg-[#161725] overflow-hidden hover:border-amber-400/40 transition shadow-xl"
              >
                <div className="relative aspect-square w-full bg-black/40">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161725] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-300 backdrop-blur-md border border-white/10">
                    {p.specs.metal}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-base text-white group-hover:text-amber-200 transition">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-amber-300">
                    {p.price}
                  </p>
                  <Link
                    href="/creations"
                    className="inline-flex items-center gap-1.5 pt-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400 group-hover:text-white transition"
                  >
                    View Piece Details <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Consultation & Bespoke Commission Callout */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#12131d]">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#1a1b2b] via-[#141522] to-[#1a1b2b] p-8 sm:p-14 text-center space-y-5 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs text-amber-300 mx-auto">
              <Award className="h-3.5 w-3.5" />
              <span className="font-mono uppercase tracking-widest text-[10px]">Private Atelier Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal max-w-xl mx-auto">
              Experience Bespoke Haute Joaillerie in Karachi & Lahore
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
              Reserve a private viewing session to inspect certified gems under high-magnification stereomicroscopes with VALOIRE master setters.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-amber-300 transition shadow-xl"
              >
                Book Private Salon Visit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/salons"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/15 transition"
              >
                Explore Salons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <Footer />

      {/* Cart Drawer Modal */}
      {checkoutOpen && (
        <CheckoutDrawer
          cart={cart}
          onClose={() => setCheckoutOpen(false)}
          onRemove={(index) => setCart((items) => items.filter((_, i) => i !== index))}
          onClear={() => setCart([])}
        />
      )}
    </main>
  )
}

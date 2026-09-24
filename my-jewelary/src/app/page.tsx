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
    <BlinkClientBoundary fallback={<div className="min-h-dvh bg-[#08080a]" />}>
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
      desc: 'Explore all diamond rings, gold necklaces, cuffs, and chandelier earrings with real-time checkout.',
      href: '/products',
      icon: Gem,
      shade: 'from-[#12131d] to-[#0a0b12]',
      cta: 'Explore Products',
    },
    {
      title: 'Master Creations',
      subtitle: 'Haute Joaillerie Signatures',
      desc: 'One-of-a-kind royal masterpieces handcrafted for distinction and prestige.',
      href: '/creations',
      icon: Sparkles,
      shade: 'from-[#151624] to-[#0d0e17]',
      cta: 'View Creations',
    },
    {
      title: 'The Atelier & Craft',
      subtitle: 'Artisanal Workshop Journey',
      desc: 'Witness how rough gems and raw gold are forged by our master setters in Karachi & Lahore.',
      href: '/craft',
      icon: Hammer,
      shade: 'from-[#13141c] to-[#09090c]',
      cta: 'Discover Craft',
    },
    {
      title: 'Certified Standards',
      subtitle: 'Diamond & Gold Purity',
      desc: 'Independent GIA/IGI laboratory grading, 4Cs diamond breakdown, and official 18K/22K hallmarking.',
      href: '/standards',
      icon: ShieldCheck,
      shade: 'from-[#141622] to-[#0d0e14]',
      cta: 'View Standards',
    },
    {
      title: 'Flagship Salons',
      subtitle: 'Karachi & Lahore Boutiques',
      desc: 'Visit our private consultation lounges in Clifton, Karachi and Gulberg, Lahore.',
      href: '/salons',
      icon: Building2,
      shade: 'from-[#13141e] to-[#0a0a0e]',
      cta: 'Locate Salons',
    },
    {
      title: 'Book Private Visit',
      subtitle: 'Exclusive VIP Consultation',
      desc: 'Reserve a private one-on-one session at VALOIRE luxury viewing suites.',
      href: '/book',
      icon: CalendarCheck,
      shade: 'from-[#191a27] to-[#0f1017]',
      cta: 'Book Salon Visit',
    },
  ]

  // Featured 3 signature pieces for homepage preview
  const featuredPieces = PRODUCTS.slice(0, 3)

  return (
    <main id="top" className="bg-[#08080a] text-foreground overflow-x-hidden w-full max-w-full selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation Displayed at the Top */}
      <Navbar cartCount={cart.length} onOpenBag={() => setCheckoutOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#08080a]">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          src="/media/atelier-diamond.mp4"
          poster="/media/atelier-diamond-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="A diamond transformed by the cutting house"
        />
        
        {/* Dark Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/95 via-[#08080a]/75 to-[#08080a]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/70 via-transparent to-[#08080a] pointer-events-none" />

        {/* Hero Content Center */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 md:px-12 my-auto">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-white" />
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-white/90">
                Master Fine Jewelry Atelier
              </p>
            </div>

            <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight text-white font-normal">
              Measured Purity.<br />
              <span className="italic font-light text-white/90">Timeless Elegance.</span>
            </h1>

            <p className="max-w-xl text-xs sm:text-base leading-relaxed text-zinc-300">
              Handcrafted 18K/22K solid gold, certified natural diamonds, and pure silver creations by <strong>VALOIRE Atelier</strong>. Tailored for distinction in Karachi, Lahore, and worldwide.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 sm:px-7 py-3.5 sm:py-4 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition active:scale-[0.98] shadow-2xl cursor-pointer"
              >
                Explore Products ({PRODUCTS.length}) <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/creations"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 sm:px-6 py-3.5 sm:py-4 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition cursor-pointer backdrop-blur-sm"
              >
                View Masterpieces <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero 3 Trust Badges Bar */}
        <div className="relative z-20 border-t border-white/[0.08] bg-[#0c0d12]/90 backdrop-blur-md px-4 py-5 sm:px-8 md:px-12">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08]">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-medium text-white">Karachi & Lahore Ateliers</h4>
                <p className="text-[11px] text-muted-foreground">Handcrafted jewelry heritage</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08]">
                <Gem className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-medium text-white">GIA & IGI Certified</h4>
                <p className="text-[11px] text-muted-foreground">Independently graded natural gems</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08]">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-medium text-white">18K / 22K Solid Gold</h4>
                <p className="text-[11px] text-muted-foreground">Official hallmark purity guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Sections Navigation Hub (Separate Black Shades For Every Section) */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#090a0f] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300/80">Explore The Maison</span>
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
                  className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b ${sec.shade} p-6 hover:border-white/20 transition duration-300 shadow-xl`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] text-white group-hover:bg-white group-hover:text-black transition">
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
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Masterpieces Showcase Preview (Shade: #0b0c14) */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#0b0c14] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300/80">Exclusive Spotlight</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal mt-1">
                Featured Atelier Creations
              </h2>
            </div>
            <Link
              href="/creations"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-amber-200 transition"
            >
              View All Masterpieces ({PRODUCTS.length}) <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {featuredPieces.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl border border-white/[0.08] bg-[#12131d] overflow-hidden hover:border-white/20 transition shadow-xl"
              >
                <div className="relative aspect-square w-full bg-black/40">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131d] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-300 backdrop-blur-md border border-white/10">
                    {p.specs.metal}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-base text-white group-hover:text-amber-200 transition">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-white/90">
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

      {/* Private Consultation & Bespoke Commission Callout (Shade: #08080b) */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#08080b]">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#141522] via-[#10111a] to-[#141522] p-8 sm:p-14 text-center space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 text-xs text-amber-300 mx-auto">
              <Award className="h-3.5 w-3.5" />
              <span className="font-mono uppercase tracking-widest text-[10px]">Private Atelier Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal max-w-xl mx-auto">
              Experience Bespoke Haute Joaillerie in Karachi & Lahore
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
              Reserve a private viewing session to inspect certified gems under high-magnification stereomicroscopes with VALOIRE master setters.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition shadow-xl"
              >
                Book Private Salon Visit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/salons"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition"
              >
                Explore Salons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strictly containing phone number (Deepest Black: #060608) */}
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

'use client'

import {
  ArrowDown,
  ArrowUpRight,
  Gem,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { BlinkClientBoundary } from '@/components/BlinkClientBoundary'
import { PRODUCTS, type Product } from '@/components/atelier/collection'
import { Making } from '@/components/atelier/making'
import { Specification } from '@/components/atelier/specification'
import { Cities } from '@/components/atelier/cities'
import { Booking } from '@/components/atelier/booking'
import { Footer } from '@/components/atelier/footer'
import { CheckoutDrawer } from '@/components/atelier/CheckoutDrawer'

export default function Home() {
  return (
    <BlinkClientBoundary fallback={<div className="min-h-dvh bg-background" />}>
      <MainHero />
    </BlinkClientBoundary>
  )
}

function MainHero() {
  const [cart, setCart] = useState<Product[]>([])
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  return (
    <main id="top" className="bg-background text-foreground overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.92),rgba(9,9,11,0.65)_50%,rgba(9,9,11,0.85))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.7),transparent_40%,rgba(9,9,11,0.95))]" />

        {/* Top Navigation Bar */}
        <header className="relative z-30 flex items-center justify-between px-4 py-5 sm:px-6 md:px-10 md:py-8">
          <Link href="/" className="flex flex-col cursor-pointer">
            <span className="font-serif text-lg md:text-2xl tracking-[0.25em] text-foreground font-medium">
              ABDUL RAHMAN
            </span>
            <span className="font-mono text-[7px] md:text-[8px] tracking-[0.3em] uppercase text-muted-foreground">
              Pakistan · Haute Joaillerie
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
            <Link
              href="/products"
              className="cursor-pointer font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-primary"
            >
              Products Catalog
            </Link>
            <a href="#making" className="hidden transition-colors hover:text-primary sm:inline cursor-pointer">
              Craft
            </a>
            <a href="#specification" className="hidden transition-colors hover:text-primary sm:inline cursor-pointer">
              Purity
            </a>
            <a href="#cities" className="hidden transition-colors hover:text-primary sm:inline cursor-pointer">
              Salons
            </a>
            <Link href="/payment" className="hidden border-l border-border pl-4 transition-colors hover:text-primary md:inline cursor-pointer">
              Payment
            </Link>
            <Link href="/app" className="hidden border-l border-border pl-4 transition-colors hover:text-primary sm:inline cursor-pointer">
              Client Area
            </Link>
            <button
              type="button"
              onClick={() => setCheckoutOpen(true)}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs text-foreground transition hover:border-primary"
              aria-label={`Open shopping bag, ${cart.length} items`}
            >
              <ShoppingBag className="h-3.5 w-3.5 text-primary" /> Bag ({cart.length})
            </button>
          </div>
        </header>

        {/* Hero Content Center */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:px-10">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Artisan Fine Jewelry · Est. Pakistan
              </p>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em] text-foreground">
              MEASURED<br />PURITY
            </h1>

            <p className="max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-foreground/80">
              Exclusive handcrafted 18K/22K solid gold and certified natural diamond creations by master jeweler <strong>Abdul Rahman</strong>. Tailored for distinction in Karachi, Lahore, and worldwide.
            </p>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground font-semibold shadow-xl transition hover:opacity-90 active:scale-[0.98] cursor-pointer"
              >
                Explore Products Catalog ({PRODUCTS.length}) <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:border-primary transition cursor-pointer"
              >
                Book VIP Salon Visit <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero 3 Pillars Bar */}
        <div className="relative z-20 border-t border-border/50 bg-background/80 backdrop-blur-md px-4 py-5 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card border border-border">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-foreground">01 · Origin & Craft</h4>
                <p className="text-[11px] text-muted-foreground">Handcrafted in Karachi & Lahore ateliers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card border border-border">
                <Gem className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-foreground">02 · Master Setting</h4>
                <p className="text-[11px] text-muted-foreground">GIA & IGI Certified natural gemstones</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card border border-border">
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-foreground">03 · Royal Heritage</h4>
                <p className="text-[11px] text-muted-foreground">18K/22K Solid gold hallmark guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <Making />
      <Specification />
      <Cities />
      <Booking />
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

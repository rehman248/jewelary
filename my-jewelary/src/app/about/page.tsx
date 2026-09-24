'use client'

import {
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Flame,
  Gem,
  Hammer,
  Layers,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/atelier/navbar'
import { Footer } from '@/components/atelier/footer'

export default function AboutPage() {
  const pillars = [
    {
      icon: Award,
      title: 'Haute Joaillerie Heritage',
      desc: 'Founded with a singular vision: to craft bespoke royal heirlooms using ethically sourced natural diamonds, Swat Valley emeralds, and solid 18K/22K gold in Pakistan.',
    },
    {
      icon: Hammer,
      title: 'Centuries-Old Hand Craft',
      desc: 'Every bezel, prong, and signet is hand-forged and microscopically hand-set by master craftsmen with over 30 years of generational bench-jeweler experience.',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Authenticity',
      desc: 'All diamonds over 0.50 ct come with GIA or IGI certificates. Gold is assayed and stamped with official purity hallmarks and accompanied by lifetime warranties.',
    },
    {
      icon: Building2,
      title: 'Private Viewing Salons',
      desc: 'Experience bespoke consultations inside discreet, armored private viewing suites located in Clifton, Karachi and Gulberg, Lahore.',
    },
  ]

  const metallurgyStages = [
    {
      step: '01',
      title: '18K & 22K Solid Gold Metallurgy',
      subtitle: 'Pure Alloy Induction',
      detail:
        'We blend 99.99% pure 24K gold with rich copper and silver alloys to create dense 18K (750 hallmark) and 22K (916 hallmark) gold with exceptional structural durability and warmth.',
      badge: 'Zero Porosity Casting',
    },
    {
      step: '02',
      title: 'Microscopic Diamond & Gem Setting',
      subtitle: 'Stereomicroscope Pavé Precision',
      detail:
        'Master setters work under 40x optical magnification, hand-carving beads to secure D-Flawless and VVS natural diamonds with millimeter tolerance.',
      badge: 'GIA & IGI Graded',
    },
    {
      step: '03',
      title: '925 Sterling Silver & 950 Platinum Forging',
      subtitle: 'High-Density Hand Fabrication',
      detail:
        'Cold-forged platinum and solid sterling silver pieces are treated with multi-layer rhodium plating to guarantee mirror luster and lifetime tarnish resistance.',
      badge: 'Rhodium Sealed',
    },
    {
      step: '04',
      title: 'Dual Assay Hallmarking & Final Polish',
      subtitle: 'The Valoire Seal of Perfection',
      detail:
        'Every finished creation is inspected with X-ray fluorescence spectrometry, given a mirror-sheen high polish, and stamped with the official Valoire Master Hallmark.',
      badge: 'Lifetime Guarantee',
    },
  ]

  return (
    <div className="min-h-dvh flex flex-col bg-[#0e0f16] text-[#F8FAFC] selection:bg-white selection:text-black overflow-x-hidden">
      {/* Top Section Navigation */}
      <Navbar />

      {/* Hero Section with Lightened, Luminous Video / Backdrop */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#141520] via-[#0e0f16] to-[#0e0f16] py-16 sm:py-24 border-b border-white/[0.08]">
        {/* Luminous Ambient Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" /> About The Maison & Atelier
          </div>

          <h1 className="mt-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            The Architecture of Timeless Splendor.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
            VALOIRE Haute Joaillerie is Pakistan’s premier luxury atelier, fusing generational goldsmithing mastery with internationally certified gemstones to sculpt pieces of permanent distinction.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 font-mono text-xs uppercase tracking-wider text-black font-semibold transition hover:bg-zinc-200"
            >
              <Gem className="h-4 w-4" /> View Catalog
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 font-mono text-xs uppercase tracking-wider text-white transition hover:border-white/50 hover:bg-white/10"
            >
              <CalendarCheck className="h-4 w-4" /> Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Pillars Grid */}
      <section className="py-16 sm:py-20 bg-[#12131d] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400">
              Foundational Values
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-4xl text-white">
              Why Discerning Collectors Choose Valoire
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.08] bg-[#181924]/80 p-6 sm:p-7 backdrop-blur-md transition duration-300 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Workshop Spotlight Showcase */}
      <section className="py-16 sm:py-24 bg-[#0e0f16] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Video Card with Luminous Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 shadow-2xl group">
              <video
                src="/media/stone-1.mp4"
                poster="/media/stone-1.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-white">
                <span className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-amber-400 animate-pulse" /> Master Setter Bench
                </span>
                <span className="text-zinc-400">Karachi · Atelier</span>
              </div>
            </div>

            {/* Right: Craft Narrative */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
                <Hammer className="h-4 w-4" /> The Alchemy of Gold & Diamonds
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                From Raw Earth Gemstones to Sovereign Masterpieces.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                At Valoire, every creation begins in deep gemological study. We source unheated Swat Valley emeralds, conflict-free D-Flawless diamonds, and heavy 18K/22K bullion. In our workshop, time slows down — hundreds of hours are dedicated to ensuring every setting is structurally eternal.
              </p>
              <div className="grid gap-3 pt-2">
                {[
                  '100% Solid Gold with Official Assay Purity Stamp',
                  'Hand-cut Natural Diamonds with GIA / IGI Certification',
                  'High-Density 925 Silver with 3-Layer Rhodium Barrier',
                  'Custom Bridal & High-Jewelry Bespoke Commissions',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/creations"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-300 hover:text-amber-200 transition"
                >
                  Explore Master Creations <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Stage Metallurgy Process */}
      <section className="py-16 sm:py-24 bg-[#141520] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400">
              Meticulous Craftsmanship
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-white">
              The 4 Stages of Haute Metallurgy
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400">
              How gold, platinum, silver, and diamonds are transformed inside the Valoire workshop.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metallurgyStages.map((stage, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/[0.08] bg-[#1a1b29] p-6 sm:p-7 flex flex-col justify-between transition duration-300 hover:border-amber-400/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-amber-400/80">{stage.step}</span>
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-amber-300">
                      {stage.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-white mb-1">{stage.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-3">{stage.subtitle}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salons & Direct Appointment Invitation */}
      <section className="py-16 sm:py-24 bg-[#0e0f16]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-10 text-center">
          <div className="rounded-3xl border border-amber-400/30 bg-gradient-to-b from-[#191a27] to-[#12131e] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none" />

            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-400">
              Private Consultation
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Experience Valoire in Person
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
              Reserve a one-on-one session in our Clifton, Karachi or Gulberg, Lahore private salons. Discuss custom bridal creations, diamond certification, and ring sizing with our head artisans.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-amber-400 px-8 font-mono text-xs uppercase tracking-wider text-black font-semibold transition hover:bg-amber-300 shadow-lg"
              >
                <CalendarCheck className="h-4 w-4" /> Book Salon Appointment
              </Link>
              <Link
                href="/salons"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 font-mono text-xs uppercase tracking-wider text-white transition hover:border-white/40"
              >
                <Building2 className="h-4 w-4" /> View Flagship Locations
              </Link>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6 font-mono text-xs text-zinc-400">
              <span>Direct Concierge Contact: </span>
              <a href="mailto:arehman2370@gmail.com" className="text-amber-300 hover:underline">
                arehman2370@gmail.com
              </a>
              <span className="mx-2">·</span>
              <span className="text-white">0307 2151932</span>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Gem, Hammer, ShieldCheck, Sparkles } from 'lucide-react'
import { Eyebrow } from '@/components/atelier/motion'
import { Footer } from '@/components/atelier/footer'
import { Navbar } from '@/components/atelier/navbar'

const CRAFT_STEPS = [
  {
    n: '01',
    icon: Sparkles,
    title: 'Artisan Sketching & Silhouette',
    desc: 'Each piece begins on paper in our Karachi & Lahore design studios. VALOIRE master designers draw upon centuries of royal jewelry traditions re-imagined for modern high society.',
  },
  {
    n: '02',
    icon: Gem,
    title: 'Ethical Gemological Sourcing',
    desc: 'We curate certified natural Swat emeralds from northern Pakistan, untreated Kashmir sapphires, and GIA/IGI certified natural diamonds with Color D–F and IF–VVS clarity.',
  },
  {
    n: '03',
    icon: Hammer,
    title: 'Stereomicroscope Setting',
    desc: 'Micro-pavé and prong settings are performed under high-precision stereomicroscopes, ensuring perfect stone security, optimal light return, and flawless symmetry.',
  },
  {
    n: '04',
    icon: ShieldCheck,
    title: 'Mirror Polish & Hallmark Assay',
    desc: 'Multi-stage rouge hand polishing provides an immaculate mirror luster, followed by strict gemological verification and official 18K/22K hallmark stamping.',
  },
]

export default function CraftPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#08080a] text-foreground selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation */}
      <Navbar />

      {/* Main Content Area - Shaded in #09090c & #111218 */}
      <main className="flex-1 bg-[#09090c] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <Eyebrow index="II">Atelier Heritage</Eyebrow>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-white">
              The Art of Craftsmanship
            </h1>
            <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
              VALOIRE Haute Joaillerie brings decades of bench-setting expertise to every creation, transforming raw earth minerals into royal heirlooms.
            </p>
          </div>

          {/* Video & Workshop Feature */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-2 shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
                <video
                  className="h-full w-full object-cover"
                  src="/media/loupe.mp4"
                  poster="/media/loupe-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Jewelry crafting process in VALOIRE workshop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/90">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Bench Cam
                  </span>
                  <span>Karachi & Lahore</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Master Bench Jeweler
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white">
                Precision Down to the Hundredth Millimeter
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Every prong, bezel, and channel is hand-carved and burnished. We reject mass casting in favor of individual goldsmithing, ensuring density, heft, and lifetime structural integrity.
              </p>
              <div className="pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition shadow-lg"
                >
                  Book Private Atelier Viewing <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 4-Step Process Grid */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">The Four-Stage Creation Journey</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CRAFT_STEPS.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.n}
                    className="group rounded-2xl border border-white/[0.08] bg-[#111218] p-6 space-y-4 transition-all duration-300 hover:border-white/20 hover:bg-[#151620] hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground/80">
                        {s.n}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-white">{s.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Phone only at bottom */}
      <Footer />
    </div>
  )
}

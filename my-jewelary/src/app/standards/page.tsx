'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Gem, ShieldCheck, Sparkles } from 'lucide-react'
import { Eyebrow } from '@/components/atelier/motion'
import { Footer } from '@/components/atelier/footer'
import { Navbar } from '@/components/atelier/navbar'

const STANDARDS_LIST = [
  {
    title: 'Cut & Symmetry',
    grade: 'Triple Excellent (3EX)',
    desc: 'Each diamond is cut to precise mathematical proportions, maximizing internal total reflection, fiery scintillation, and optimal brightness.',
  },
  {
    title: 'Color Grading',
    grade: 'D – F (Pure Colorless)',
    desc: 'We select exclusively from the highest colorless tiers of the GIA spectrum, free of yellow or brown tints under standard gemological lighting.',
  },
  {
    title: 'Clarity Scale',
    grade: 'Flawless (IF) to VVS1',
    desc: 'Stones chosen are free of eye-visible imperfections, verified under 10x binocular gemological magnification.',
  },
  {
    title: 'Carat Weight & Laser Inscription',
    grade: 'GIA / IGI Laser Inscribed',
    desc: 'Each center diamond possesses an individual microscopic laser inscription on its girdle matching its official third-party certificate.',
  },
  {
    title: 'Solid Gold Metallurgy',
    grade: '18K (750) & 22K (916) Pure Gold',
    desc: 'We never use hollow casting or gold plating. Every gram is verified with official government assay purity hallmark stamps.',
  },
  {
    title: 'Platinum Standards',
    grade: '950 Pure Platinum',
    desc: '95% pure noble platinum for hypoallergenic luxury, heavy density, and lifetime prong security for precious diamonds.',
  },
]

export default function StandardsPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#08080a] text-foreground selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation */}
      <Navbar />

      {/* Main Content Area - Shaded in #0d0e14 & #14151e */}
      <main className="flex-1 bg-[#0d0e14] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <Eyebrow index="III">Certified Purity</Eyebrow>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-white">
                Certified Standards
              </h1>
              <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
                Every piece created by VALOIRE is accompanied by an international diamond grading report, metal purity assay hallmark, and lifetime authenticity guarantee.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#14151e] p-4 shrink-0 shadow-lg">
              <ShieldCheck className="h-6 w-6 text-white" />
              <div className="text-left font-mono text-xs">
                <span className="block font-semibold text-white">GIA & IGI Certified</span>
                <span className="text-[10px] text-muted-foreground">100% Genuine Natural Gems</span>
              </div>
            </div>
          </div>

          {/* Standards Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STANDARDS_LIST.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/[0.08] bg-[#14151e] p-6 sm:p-8 space-y-4 transition-all duration-300 hover:border-white/20 hover:bg-[#181924] hover:shadow-xl"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {item.title}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {item.grade}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Certification Assurance Banner */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#14151e] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-white" /> Lifetime Authenticity
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white">Official Assay Stamped & Inspected</h2>
              <p className="max-w-xl text-xs sm:text-sm text-muted-foreground">
                We invite clients to inspect their chosen diamonds and gemstone hallmarks under high-magnification stereomicroscopes at our Karachi & Lahore salons.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition shadow-lg shrink-0"
            >
              Book Salon Inspection <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer - Phone only at bottom */}
      <Footer />
    </div>
  )
}

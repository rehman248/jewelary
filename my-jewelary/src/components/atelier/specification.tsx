'use client'

import { Eyebrow } from './motion'
import { ShieldCheck, Award, Gem, CheckCircle2 } from 'lucide-react'

const SPECS_GRID = [
  {
    category: 'The 4Cs of Diamonds',
    items: [
      { label: 'Color Grade', value: 'D – F (Colorless)', desc: 'Highest standard of pure natural white' },
      { label: 'Clarity Rating', value: 'Flawless (IF) to VVS1', desc: 'No visible internal inclusions' },
      { label: 'Cut & Symmetry', value: 'Triple Excellent (3EX)', desc: 'Maximum light dispersion & brilliance' },
      { label: 'Carat Precision', value: 'Individually Weighed', desc: 'Laser-inscribed laser serial numbers' },
    ],
  },
  {
    category: 'Metals & Certification',
    items: [
      { label: 'Solid Gold Purity', value: '18K (750) & 22K (916)', desc: 'Official government hallmark stamped' },
      { label: 'Pure Platinum', value: '950 Pure Platinum', desc: 'Hypoallergenic dense precious metal' },
      { label: 'Gem Laboratories', value: 'GIA · IGI Certified', desc: 'Global third-party grading reports' },
      { label: 'Lifetime Warranty', value: 'Authenticity Guarantee', desc: 'Complimentary cleaning & maintenance' },
    ],
  },
]

export function Specification() {
  return (
    <section id="specification" className="relative bg-[#0e0f15] border-t border-white/[0.06] px-5 py-20 sm:py-28 md:px-10" aria-labelledby="spec-title">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <Eyebrow index="III">Certified Purity</Eyebrow>
            <h2 id="spec-title" className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-foreground">
              Uncompromising Standards
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Every creation by Valoire is accompanied by an international diamond grading certificate and gold purity hallmark.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#161720] px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-white" />
            <div className="text-left font-mono text-xs">
              <span className="block font-semibold text-foreground">100% Certified</span>
              <span className="text-[10px] text-muted-foreground">GIA & IGI Verified</span>
            </div>
          </div>
        </div>

        {/* 2 Column Spec Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SPECS_GRID.map((block) => (
            <div
              key={block.category}
              className="rounded-2xl border border-white/[0.08] bg-[#14151e] p-6 sm:p-8 space-y-6 shadow-xl"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-4">
                <Award className="h-4 w-4 text-white" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-foreground">
                  {block.category}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {block.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.05] bg-[#1a1b26] p-4 transition-colors hover:border-white/15"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <p className="mt-1 font-serif text-base sm:text-lg font-medium text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground/80 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



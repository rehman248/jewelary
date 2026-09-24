'use client'

import { Eyebrow, SlideIn } from './motion'
import { Sparkles, Hammer, ShieldCheck, Gem } from 'lucide-react'

const STEPS = [
  {
    n: '01',
    icon: Sparkles,
    title: 'Bespoke Design',
    copy: 'Every piece begins with hand-drawn sketches in our Karachi and Lahore design studios, balancing classical heritage with modern silhouette.',
  },
  {
    n: '02',
    icon: Gem,
    title: 'Certified Sourcing',
    copy: 'Independently graded GIA/IGI diamonds and natural Pakistani Swat emeralds, paired exclusively with hallmarked 18K/22K solid gold.',
  },
  {
    n: '03',
    icon: Hammer,
    title: 'Master Setting',
    copy: 'Micro-pavé prong setting performed under high-magnification stereomicroscopes for immaculate stone security and light reflection.',
  },
  {
    n: '04',
    icon: ShieldCheck,
    title: 'Mirror Finish & Assay',
    copy: 'Final multi-stage hand polishing, rigorous gemological inspection, and official government assay hallmarking for lifetime authenticity.',
  },
]

export function Making() {
  return (
    <section id="making" className="relative bg-[#08080a] border-t border-white/[0.06] px-5 py-20 sm:py-28 md:px-10" aria-labelledby="making-title">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <Eyebrow index="II">Artisan Heritage</Eyebrow>
          <h2 id="making-title" className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-foreground">
            The Art of Creation
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Crafted by master artisans at Valoire. A meticulous four-stage journey from raw gemstone to regal heirloom.
          </p>
        </div>

        {/* 2-Column Content: Steps & Video */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* 4 Clean Steps Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.n}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#111218] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#151620] hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-foreground">
                        <Icon className="h-4 w-4 text-white" />
                      </span>
                      <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground/80">
                        {s.n}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {s.copy}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Workshop Video Frame */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-2 shadow-2xl">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden rounded-xl bg-black">
                <video
                  className="h-full w-full object-cover"
                  src="/media/loupe.mp4"
                  poster="/media/loupe-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Jewelry crafting process in Valoire Haute Joaillerie workshop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/90">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live Atelier Feed
                  </span>
                  <span>Karachi & Lahore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


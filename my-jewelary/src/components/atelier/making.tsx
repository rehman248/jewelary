'use client'

import { Eyebrow, SlideIn } from './motion'

const STEPS = [
  { n: '01', title: 'Design', copy: 'Every piece starts with a sketch. We plan the shape, size, and style before any work begins.' },
  { n: '02', title: 'Select Materials', copy: 'We pick the best stones and metals by hand. Only top quality materials make it into our jewelry.' },
  { n: '03', title: 'Craft', copy: 'Skilled workers shape each piece with care. Every detail is checked to make sure it looks perfect.' },
  { n: '04', title: 'Finish', copy: 'The final polish and setting. Your jewelry is ready to wear and built to last a lifetime.' },
]

export function Making() {
  return (
    <section id="making" className="border-t border-border/60 px-5 py-24 md:px-10 md:py-32" aria-labelledby="making-title">
      <Eyebrow index="II">How We Make It</Eyebrow>
      <h2 id="making-title" className="max-w-3xl font-serif text-4xl tracking-[-0.04em] md:text-6xl">Four Simple Steps</h2>

      <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-10">
        <ol className="space-y-14 lg:col-span-6">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <SlideIn from={i % 2 === 0 ? 'left' : 'right'} className={`max-w-md ${i % 2 === 1 ? 'ml-auto text-right lg:ml-16' : ''}`}>
                <span className="font-mono text-xs tracking-[0.28em] text-primary">{s.n}</span>
                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] md:text-4xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </SlideIn>
            </li>
          ))}
        </ol>

        <figure className="lg:col-span-6">
          <video
            className="h-[60vh] w-full rounded-2xl border border-border/60 object-cover"
            src="/media/loupe.mp4"
            poster="/media/loupe-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Jewelry crafting process"
          />
          <figcaption className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span>Our Workshop</span>
            <span>Handcrafted with Care</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

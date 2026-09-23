'use client'

import { CountUp, Eyebrow } from './motion'
import { useRevealed } from './use-revealed'

type Row = { label: string; value: string | { n: number; decimals: number; suffix: string } }

const ROWS: Row[] = [
  { label: 'Diamond Weight', value: { n: 3.12, decimals: 2, suffix: ' carats' } },
  { label: 'Cut Quality', value: 'Excellent' },
  { label: 'Color Grade', value: 'D (Colorless)' },
  { label: 'Clarity', value: 'Flawless (IF)' },
  { label: 'Polish', value: 'Excellent' },
  { label: 'Symmetry', value: 'Excellent' },
  { label: 'Metal Purity', value: '18K Solid Gold / 950 Platinum' },
  { label: 'Certificate', value: 'GIA & IGI Certified' },
]

export function Specification() {
  const { ref, revealed } = useRevealed<HTMLTableElement>()
  return (
    <section id="specification" className="border-t border-border/60 px-5 py-24 md:px-10 md:py-32" aria-labelledby="spec-title">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow index="III">Quality & Standards</Eyebrow>
          <h2 id="spec-title" className="font-serif text-4xl tracking-[-0.04em] md:text-6xl">Certified<br /><em>Quality.</em></h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Every gemstone and metal we use is 100% authentic and independently certified for quality, clarity, and ethical sourcing.
          </p>
        </div>
        <table ref={ref} className="w-full self-end border-t border-border lg:col-span-7">
          <tbody>
            {ROWS.map((r, i) => (
              <tr
                key={r.label}
                className={`border-b border-border/70 transition-all duration-500 ease-out ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <th scope="row" className="py-4 text-left font-mono text-[10px] font-normal uppercase tracking-[0.24em] text-muted-foreground">{r.label}</th>
                <td className="py-4 text-right font-mono text-sm tabular-nums">
                  {typeof r.value === 'string' ? r.value : (
                    <><CountUp value={r.value.n} decimals={r.value.decimals} start={revealed} />{r.value.suffix}</>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}


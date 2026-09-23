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
    <section id="specification" className="border-t border-border/60 px-5 py-16 md:px-10 md:py-24" aria-labelledby="spec-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow index="III">Certification</Eyebrow>
          <h2 id="spec-title" className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.04em]">Certified<br /><em>Standards.</em></h2>
          <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Hallmarked 18K/22K gold and independently certified natural gemstones.
          </p>
        </div>
        <div className="w-full overflow-x-auto lg:col-span-7 self-end">
          <table ref={ref} className="w-full border-t border-border">
            <tbody>
              {ROWS.map((r, i) => (
                <tr
                  key={r.label}
                  className={`border-b border-border/70 transition-all duration-500 ease-out ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <th scope="row" className="py-3.5 pr-3 text-left font-mono text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.18em] sm:tracking-[0.24em] text-muted-foreground whitespace-nowrap">{r.label}</th>
                  <td className="py-3.5 pl-3 text-right font-mono text-xs sm:text-sm tabular-nums text-foreground">
                    {typeof r.value === 'string' ? r.value : (
                      <><CountUp value={r.value.n} decimals={r.value.decimals} start={revealed} />{r.value.suffix}</>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}


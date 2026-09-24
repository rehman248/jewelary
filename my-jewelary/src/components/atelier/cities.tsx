import { Eyebrow } from './motion'
import { MapPin, Clock, ArrowUpRight } from 'lucide-react'

const LOCATIONS = [
  {
    name: 'Karachi Flagship Salon',
    city: 'Karachi, Sindh',
    tag: 'Main Atelier & Custom Studio',
    address: 'Clifton Block 4, Ocean Towers District, Karachi',
    hours: 'Mon – Sat: 11:30 AM – 9:00 PM (Sunday by Appointment)',
  },
  {
    name: 'Lahore Haute Boutique',
    city: 'Lahore, Punjab',
    tag: 'Private Viewing Suite',
    address: 'MM Alam Road, Gulberg III, Lahore',
    hours: 'Mon – Sat: 12:00 PM – 9:30 PM (Sunday Closed)',
  },
]

export function Cities() {
  return (
    <section id="cities" className="relative bg-[#08080a] border-t border-white/[0.06] px-4 py-16 sm:py-24 sm:px-6 md:px-10" aria-labelledby="cities-title">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <Eyebrow index="IV">Private Boutiques</Eyebrow>
            <h2 id="cities-title" className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-foreground">
              Karachi & Lahore
            </h2>
            <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
              Experience the master collection in person with private VIP consultations and custom jewelry design.
            </p>
          </div>

          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition shadow-lg self-start md:self-auto"
          >
            Book Private Visit <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Salon Cards Grid */}
        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
          {LOCATIONS.map((c) => (
            <div
              key={c.name}
              className="group rounded-2xl border border-white/[0.08] bg-[#111218] p-5 sm:p-8 space-y-4 sm:space-y-5 transition-all duration-300 hover:border-white/20 hover:bg-[#151620] hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.tag}
                  </span>
                  <h3 className="mt-1 font-serif text-xl sm:text-2xl text-foreground">
                    {c.name}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-foreground shrink-0">
                  {c.city.split(',')[0]}
                </span>
              </div>

              <div className="space-y-3 border-t border-white/[0.06] pt-4 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-foreground/90">{c.address}</span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-foreground/90">{c.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




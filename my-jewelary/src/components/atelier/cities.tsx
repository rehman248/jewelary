import { Eyebrow } from './motion'

const LOCATIONS = [
  {
    name: 'Karachi Flagship Salon',
    city: 'Karachi',
    address: ['Clifton Block 4, Ocean Towers District', 'Karachi, Sindh, Pakistan'],
    hours: ['Monday – Saturday: 11:30 AM – 9:00 PM', 'Sunday: By Private Appointment'],
    phone: '+92 21 3587 9000',
    email: 'arehman2370@gmail.com',
  },
  {
    name: 'Lahore Haute Atelier',
    city: 'Lahore',
    address: ['MM Alam Road, Gulberg III', 'Lahore, Punjab, Pakistan'],
    hours: ['Monday – Saturday: 12:00 PM – 9:30 PM', 'Sunday: Closed'],
    phone: '+92 42 3578 4000',
    email: 'arehman2370@gmail.com',
  },
]

const STRIP = 'PAKISTAN’S PREMIER HAUTE JOAILLERIE · KARACHI · LAHORE · ISLAMABAD · ABDUL RAHMAN JEWELRY · '

export function Cities() {
  return (
    <section id="cities" className="border-t border-border/60 py-24 md:py-32" aria-labelledby="cities-title">
      <div className="overflow-hidden border-y border-border/60 py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]" aria-hidden="true">
        <div className="animate-marquee flex w-max whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-foreground/70">
          <span className="pr-0">{STRIP.repeat(3)}</span>
          <span className="pr-0">{STRIP.repeat(3)}</span>
        </div>
      </div>

      <div className="px-5 pt-20 md:px-10">
        <Eyebrow index="IV">Our Flagship Salons</Eyebrow>
        <h2 id="cities-title" className="font-serif text-4xl tracking-[-0.04em] md:text-6xl">Karachi & Lahore</h2>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          Experience our handcrafted Pakistani jewelry in person. Private viewings available across Pakistan.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {LOCATIONS.map((c) => (
            <address key={c.name} className="border-t border-border pt-8 not-italic">
              <h3 className="font-serif text-3xl tracking-[-0.03em]">{c.name}</h3>
              <dl className="mt-6 grid gap-6 text-sm leading-relaxed">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Address</dt>
                  <dd className="mt-2 text-foreground/80">{c.address.map((l) => <span key={l} className="block">{l}</span>)}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Salon Hours</dt>
                  <dd className="mt-2 text-foreground/80">{c.hours.map((l) => <span key={l} className="block">{l}</span>)}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Contact & Appointments</dt>
                  <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-foreground/80">
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="font-mono text-sm hover:text-primary">{c.phone}</a>
                    <a href="mailto:arehman2370@gmail.com" className="font-mono text-xs text-primary hover:underline">{c.email}</a>
                    <a href="#book" className="border-b border-primary pb-0.5 text-xs uppercase tracking-[0.2em] hover:text-primary">Book a Visit</a>
                  </dd>
                </div>
              </dl>
            </address>
          ))}
        </div>
      </div>
    </section>
  )
}

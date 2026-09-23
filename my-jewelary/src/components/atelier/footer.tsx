import Link from 'next/link'

const LINKS = [
  { href: '/products', label: 'Jewelry Catalog' },
  { href: '/#making', label: 'Craftsmanship' },
  { href: '/#specification', label: 'Purity Standards' },
  { href: '/#cities', label: 'Flagship Salons' },
  { href: '/#book', label: 'Book Appointment' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-10">
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4">
          <Link href="/" className="font-serif text-2xl tracking-[0.2em] font-medium">ABDUL RAHMAN</Link>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Handcrafted 18K/22K solid gold and certified diamond creations by Abdul Rahman.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] md:col-span-4">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-foreground/70 transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.22em] md:col-span-4">
          <a href="mailto:arehman2370@gmail.com" className="text-primary transition-colors hover:underline">
            arehman2370@gmail.com
          </a>
          <a href="tel:+922135879000" className="text-foreground/70 transition-colors hover:text-primary">
            +92 21 3587 9000
          </a>
          <Link href="/payment" className="text-foreground/70 transition-colors hover:text-primary">
            Secure Payment & Checkout
          </Link>
          <span className="text-[10px] text-muted-foreground">
            Karachi · Lahore · Islamabad · Nationwide Delivery
          </span>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
        <p>© 2026 Abdul Rahman Jewelry (Pakistan). All rights reserved.</p>
        <p className="text-primary font-medium">Made & Handcrafted in Pakistan by Abdul Rahman</p>
      </div>
    </footer>
  )
}

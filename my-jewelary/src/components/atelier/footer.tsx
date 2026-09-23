import Link from 'next/link'

const LINKS = [
  { href: '#collection', label: 'All Jewelry Collection' },
  { href: '#making', label: 'Artisan Craftsmanship' },
  { href: '#specification', label: 'Gold & Diamond Purity' },
  { href: '#cities', label: 'Karachi & Lahore Salons' },
  { href: '#book', label: 'Book VIP Appointment' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-14 md:px-10">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4">
          <a href="#top" className="font-serif text-2xl tracking-[0.2em] font-medium">ABDUL RAHMAN</a>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Pakistan’s premier fine jewelry house. Masterfully handcrafted 18K/22K gold and certified diamond creations by Abdul Rahman.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.22em] md:col-span-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/70 transition-colors hover:text-primary">{l.label}</a>
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

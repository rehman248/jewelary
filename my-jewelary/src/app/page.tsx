'use client'

import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShoppingBag,
  Smartphone,
  Trash2,
  WalletCards,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BlinkClientBoundary } from '@/components/BlinkClientBoundary'
import { Collection, type Product } from '@/components/atelier/collection'
import { Making } from '@/components/atelier/making'
import { Specification } from '@/components/atelier/specification'
import { Cities } from '@/components/atelier/cities'
import { Booking } from '@/components/atelier/booking'
import { Footer } from '@/components/atelier/footer'

export default function Home() {
  return (
    <BlinkClientBoundary fallback={<div className="min-h-dvh bg-background" />}>
      <ScrollHero />
    </BlinkClientBoundary>
  )
}

/** Linear ramp: 0 before `a`, 1 after `b`. */
const ramp = (p: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (p - a) / (b - a)))

function ScrollHero() {
  const wrapRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [p, setP] = useState(0)
  const [cart, setCart] = useState<Product[]>([])
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const vid = videoRef.current
    if (!wrap || !vid) return
    let cur = 0
    let lastSeek = -1
    let lastP = -1
    let raf = 0
    let unlocked = false

    const unlock = () => {
      if (unlocked) return
      unlocked = true
      const pr = vid.play()
      if (pr && typeof pr.then === 'function') {
        pr.then(() => vid.pause()).catch(() => {})
      } else {
        vid.pause()
      }
    }

    const tick = () => {
      const span = wrap.offsetHeight - window.innerHeight
      const target = span > 0
        ? Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / span))
        : 0
      cur += (target - cur) * 0.18
      if (Math.abs(target - cur) < 0.001) cur = target
      if (Math.abs(cur - lastP) > 0.002) {
        lastP = cur
        setP(cur)
      }
      const d = vid.duration
      if (vid.readyState >= 2 && Number.isFinite(d) && d > 0 && !vid.seeking) {
        const t = cur * (d - 0.05)
        if (Math.abs(t - lastSeek) > 1 / 30) {
          lastSeek = t
          vid.currentTime = t
          unlock()
        }
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Chapter one 0.00–0.30, two 0.35–0.65, three 0.70–1.00; cross-fade in the gaps.
  const firstOpacity = 1 - ramp(p, 0.3, 0.35)
  const secondOpacity = ramp(p, 0.3, 0.35) * (1 - ramp(p, 0.65, 0.7))
  const thirdOpacity = ramp(p, 0.65, 0.7)
  const chapter = p < 0.325 ? 1 : p < 0.675 ? 2 : 3

  function jumpToChapter(progress: number) {
    const section = wrapRef.current
    if (!section) return
    const scrollableHeight = section.offsetHeight - window.innerHeight
    window.scrollTo({
      top: section.offsetTop + scrollableHeight * progress,
      behavior: 'smooth',
    })
  }

  return (
    <main id="top" className="bg-background text-foreground">
      <section
        ref={wrapRef}
        data-scrub-progress={p.toFixed(3)}
        className="relative h-[250vh]"
        aria-label="Abdul Rahman fine jewelry story"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/media/atelier-diamond.mp4"
            poster="/media/atelier-diamond-poster.jpg"
            muted
            playsInline
            preload="auto"
            aria-label="A diamond transformed by the cutting house"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.88),transparent_52%,rgba(9,9,11,0.45))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.65),transparent_28%,rgba(9,9,11,0.92))]" />

          {/* Navigation Bar */}
          <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-6 md:px-10 md:py-8">
            <a href="#top" className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.25em] text-foreground font-medium">ABDUL RAHMAN</span>
              <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-primary">Pakistan · Haute Joaillerie</span>
            </a>
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">
              <a href="#collection" className="hidden transition-colors hover:text-primary sm:inline">Collection</a>
              <a href="#cities" className="hidden transition-colors hover:text-primary sm:inline">Karachi · Lahore</a>
              <Link href="/payment" className="hidden border-l border-foreground/30 pl-4 transition-colors hover:text-primary sm:inline">Payment</Link>
              <Link href="/app" className="hidden border-l border-foreground/30 pl-4 transition-colors hover:text-primary sm:inline">Client Area</Link>
              <button
                type="button"
                onClick={() => setCheckoutOpen(true)}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1.5 text-primary transition hover:bg-primary hover:text-primary-foreground"
                aria-label={`Open cart, ${cart.length} items`}
              >
                <ShoppingBag className="h-3.5 w-3.5" /> Bag ({cart.length})
              </button>
              <span className="hidden border-l border-foreground/30 pl-4 md:inline">{String(chapter).padStart(2, '0')} / 03</span>
            </div>
          </header>

          {/* Chapter 1 */}
          <article
            style={{
              opacity: firstOpacity,
              transform: `translateY(${(1 - firstOpacity) * 18}px) scale(${0.985 + firstOpacity * 0.015})`,
              filter: `blur(${(1 - firstOpacity) * 2}px)`,
            }}
            className="absolute bottom-10 left-5 z-10 max-w-xl transition-[opacity,transform,filter] duration-700 ease-out md:bottom-16 md:left-10"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Chapter 01 · Origin & Craft</p>
            <button type="button" onClick={() => jumpToChapter(0.08)} className="cursor-pointer text-left">
              <h1 className="font-serif text-5xl leading-[0.9] tracking-[-0.05em] transition hover:text-primary md:text-8xl">
                MEASURED<br />PURITY
              </h1>
            </button>
            <p className="mt-4 max-w-md text-sm text-foreground/80 leading-relaxed">
              Designed and handcrafted in Pakistan by master jeweler <strong>Abdul Rahman</strong>. Solid 18K/22K gold & certified natural diamonds.
            </p>
            <a href="#collection" className="mt-6 inline-flex items-center gap-3 bg-primary px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 active:scale-[0.98]">
              Explore Collection <ArrowDown className="h-4 w-4" />
            </a>
          </article>

          {/* Chapter 2 */}
          <article
            style={{
              opacity: secondOpacity,
              transform: `translateY(${(1 - secondOpacity) * -18}px) scale(${0.985 + secondOpacity * 0.015})`,
              filter: `blur(${(1 - secondOpacity) * 2}px)`,
            }}
            className="absolute right-5 top-28 z-10 max-w-md text-right transition-[opacity,transform,filter] duration-700 ease-out md:right-10 md:top-32"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Chapter 02 · Master Setting</p>
            <button type="button" onClick={() => jumpToChapter(0.5)} className="ml-auto block cursor-pointer text-right">
              <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] transition hover:text-primary md:text-7xl">
                Every facet,<br /><em>perfected.</em>
              </h2>
            </button>
            <p className="ml-auto mt-4 max-w-xs text-sm leading-relaxed text-foreground/80">
              In our Karachi & Lahore ateliers, each gemstone is precision-cut to maximize fire, brilliance, and timeless value.
            </p>
            <a href="#making" className="mt-6 inline-flex items-center gap-3 border border-primary px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:bg-primary hover:text-primary-foreground active:scale-[0.98]">
              See How It's Made <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>

          {/* Chapter 3 */}
          <article
            style={{
              opacity: thirdOpacity,
              transform: `translateY(${(1 - thirdOpacity) * 18}px) scale(${0.985 + thirdOpacity * 0.015})`,
              filter: `blur(${(1 - thirdOpacity) * 2}px)`,
            }}
            className="absolute bottom-10 right-5 z-10 max-w-lg text-right transition-[opacity,transform,filter] duration-700 ease-out md:bottom-16 md:right-10"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Chapter 03 · Pakistani Heritage</p>
            <button type="button" onClick={() => jumpToChapter(0.88)} className="ml-auto block cursor-pointer text-right">
              <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] transition hover:text-primary md:text-8xl">
                Worn with<br /><em>distinction.</em>
              </h2>
            </button>
            <p className="ml-auto mt-4 max-w-sm text-sm leading-relaxed text-foreground/80">
              Heirloom jewelry tailored for royal weddings, formal galas, and treasured milestones across Pakistan and worldwide.
            </p>
            <a href="#book" className="mt-6 inline-flex items-center gap-3 bg-primary px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 active:scale-[0.98]">
              Book Private Salon Visit <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>

          <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/50 md:flex">
            <span>Scroll to explore</span><span className="h-px w-16 bg-foreground/30" />
          </div>
        </div>
      </section>

      {/* Atelier statement */}
      <section id="craft" className="grid min-h-[50vh] place-items-center px-6 py-24 text-center">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Atelier Abdul Rahman</p>
          <h2 className="font-serif text-4xl tracking-[-0.04em] md:text-6xl">Pakistan’s Pinnacle of Fine Jewelry.</h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted-foreground">
            From men’s signature diamond timepieces and 22K signet rings to women’s Swat emerald necklaces and solitaire rings, every piece is sculpted to perfection.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <Collection onAdd={(product) => setCart((prev) => [...prev, product])} />
      <Making />
      <Specification />
      <Cities />
      <Booking />
      <Footer />

      {/* Cart Drawer Modal */}
      {checkoutOpen && (
        <CheckoutDrawer
          cart={cart}
          onClose={() => setCheckoutOpen(false)}
          onRemove={(index) => setCart((items) => items.filter((_, i) => i !== index))}
          onClear={() => setCart([])}
        />
      )}
    </main>
  )
}

function CheckoutDrawer({
  cart,
  onClose,
  onRemove,
  onClear,
}: {
  cart: Product[]
  onClose: () => void
  onRemove: (index: number) => void
  onClear: () => void
}) {
  const total = cart.reduce((sum, item) => sum + (item.priceNumber || 0), 0)
  const [paid, setPaid] = useState(false)
  const [reviewing, setReviewing] = useState(false)
  const [clientName, setClientName] = useState('Abdul Rahman')
  const [clientEmail, setClientEmail] = useState('arehman2370@gmail.com')
  const [deliveryCity, setDeliveryCity] = useState('Karachi')
  const [paymentMethod, setPaymentMethod] = useState('bank')

  const paymentMethods = [
    { id: 'bank', label: 'Direct Bank Wire / Raast (Pakistan)', detail: 'Meezan, HBL, Bank Alfalah transfer', icon: Building2 },
    { id: 'card', label: 'Credit or Debit Card', detail: 'Visa, Mastercard, PayFast', icon: CreditCard },
    { id: 'cod', label: 'Cash on Insured Delivery (Pakistan)', detail: 'Secure courier collection', icon: WalletCards },
  ]

  const selectedPayment = paymentMethods.find(m => m.id === paymentMethod) ?? paymentMethods[0]

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-background/80 p-0 backdrop-blur-md md:p-6">
      <aside className="flex h-[92vh] w-full max-w-xl flex-col border border-border bg-card p-6 shadow-2xl md:h-full md:p-8">
        <div className="flex items-start justify-between border-b border-border pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              {reviewing ? 'Order Review' : 'Shopping Bag'}
            </p>
            <h2 className="mt-1 font-serif text-3xl md:text-4xl">
              {reviewing ? 'Confirm Reservation' : `Your Selection (${cart.length})`}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bag"
            className="cursor-pointer rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {paid ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center p-6 space-y-4 animate-in fade-in zoom-in-95 duration-400">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Reservation Confirmed</p>
            <h3 className="font-serif text-4xl">Shukriya / Thank you.</h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your order has been recorded. Abdul Rahman Atelier concierge will contact you at <strong>{clientEmail}</strong> with dispatch tracking and gold certification cards.
            </p>
            <div className="pt-4 flex gap-4">
              <button
                type="button"
                onClick={() => { onClear(); onClose(); }}
                className="cursor-pointer bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            {reviewing ? (
              <div className="flex flex-1 flex-col overflow-y-auto py-6 space-y-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Please verify your reservation details below. Insured courier shipping across Pakistan and handcrafted velvet box are included free of charge.
                </p>

                <div className="rounded-lg border border-border/80 bg-background/50 p-5 space-y-4">
                  <div className="border-b border-border/60 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Items in Order</span>
                    {cart.map((item, index) => (
                      <div key={`${item.name}-${index}`} className="mt-3 flex items-center justify-between gap-4 text-sm">
                        <div>
                          <span className="font-serif text-lg">{item.name}</span>
                          <span className="block text-xs text-muted-foreground">{item.material}</span>
                        </div>
                        <span className="font-mono text-sm font-medium text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <dl className="grid gap-2.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">Client Name:</dt>
                      <dd className="font-medium text-foreground">{clientName}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">Client Email:</dt>
                      <dd className="font-medium text-foreground">{clientEmail}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">City / Destination:</dt>
                      <dd className="font-medium text-foreground">{deliveryCity}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">Payment Method:</dt>
                      <dd className="font-medium text-foreground">{selectedPayment.label}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">Insured Courier:</dt>
                      <dd className="text-primary font-medium">Free (Pakistan Wide)</dd>
                    </div>
                  </dl>

                  <div className="flex items-center justify-between border-t border-border/60 pt-3 font-mono text-xs uppercase tracking-[0.15em]">
                    <span>Total Amount</span>
                    <span className="font-serif text-2xl font-semibold text-primary">
                      PKR {total.toLocaleString('en-US')}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-5 space-y-4">
                  {cart.length === 0 ? (
                    <div className="py-20 text-center space-y-3">
                      <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground">Your shopping bag is currently empty.</p>
                      <p className="text-xs text-muted-foreground/70">Explore our signature Pakistani jewelry collection above and add pieces to your bag.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((item, index) => (
                        <div key={`${item.name}-${index}`} className="flex gap-4 rounded-lg border border-border/60 bg-background/40 p-3">
                          <img src={item.img} alt={item.name} className="h-16 w-16 rounded object-cover border border-border/60" />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif text-base truncate">{item.name}</h3>
                            <p className="text-xs text-muted-foreground truncate">{item.material}</p>
                            <p className="mt-1 font-mono text-xs font-semibold text-primary">{item.price}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="self-center cursor-pointer p-2 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-border pt-5 space-y-5">
                    <div className="flex justify-between font-mono text-xs uppercase tracking-[0.15em]">
                      <span>Total (PKR)</span>
                      <span className="font-serif text-2xl font-medium text-primary">
                        PKR {total.toLocaleString('en-US')}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Your Full Name</span>
                        <input
                          required
                          value={clientName}
                          onChange={e => setClientName(e.target.value)}
                          className="mt-1 h-10 w-full rounded border border-border bg-background px-3 text-xs outline-none focus:border-primary"
                          placeholder="Abdul Rahman"
                        />
                      </label>
                      <label className="block text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Email Address</span>
                        <input
                          required
                          type="email"
                          value={clientEmail}
                          onChange={e => setClientEmail(e.target.value)}
                          className="mt-1 h-10 w-full rounded border border-border bg-background px-3 text-xs outline-none focus:border-primary"
                          placeholder="arehman2370@gmail.com"
                        />
                      </label>
                      <label className="block text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">City (Pakistan & International)</span>
                        <select
                          value={deliveryCity}
                          onChange={e => setDeliveryCity(e.target.value)}
                          className="mt-1 h-10 w-full rounded border border-border bg-background px-3 text-xs outline-none focus:border-primary"
                        >
                          <option>Karachi</option>
                          <option>Lahore</option>
                          <option>Islamabad</option>
                          <option>Rawalpindi</option>
                          <option>Faisalabad</option>
                          <option>Multan</option>
                          <option>Peshawar</option>
                          <option>Quetta</option>
                          <option>International (Worldwide Insured)</option>
                        </select>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        disabled={!cart.length || !clientName || !clientEmail}
                        onClick={() => setReviewing(true)}
                        className="h-12 flex-1 cursor-pointer bg-primary font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
                      >
                        Reserve Pieces (PKR)
                      </button>
                      <Link
                        href="/payment"
                        className="inline-flex h-12 items-center justify-center border border-border px-4 font-mono text-xs uppercase tracking-[0.16em] transition hover:border-primary"
                      >
                        Payment Page
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}

            {reviewing && (
              <div className="border-t border-border pt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => setReviewing(false)}
                  className="h-12 flex-1 cursor-pointer border border-border font-mono text-xs uppercase tracking-[0.16em] transition hover:border-primary"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setPaid(true)}
                  className="h-12 flex-1 cursor-pointer bg-primary font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition hover:opacity-90"
                >
                  Confirm & Reserve
                </button>
              </div>
            )}
          </>
        )}
      </aside>
    </div>
  )
}

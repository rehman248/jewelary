'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  Building2,
  Check,
  CheckCircle2,
  CreditCard,
  Download,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
} from 'lucide-react'
import { useState } from 'react'
import { Navbar } from '@/components/atelier/navbar'
import { Footer } from '@/components/atelier/footer'

type MethodId = 'bank' | 'card' | 'easypaisa' | 'cod'

const methods: Array<{ id: MethodId; label: string; detail: string; icon: typeof CreditCard }> = [
  { id: 'bank', label: 'Direct Bank Wire / Raast', detail: 'Meezan Bank, HBL, Bank Alfalah (Instant Transfer)', icon: Building2 },
  { id: 'card', label: 'Credit or Debit Card', detail: 'Visa, Mastercard, UnionPay, PayFast', icon: CreditCard },
  { id: 'easypaisa', label: 'JazzCash / EasyPaisa / Nayapay', detail: 'Mobile wallet instant transfer', icon: Smartphone },
  { id: 'cod', label: 'Cash on Insured Delivery', detail: 'Pay cash upon discrete signed delivery across Pakistan', icon: WalletCards },
]

export default function PaymentPage() {
  const [method, setMethod] = useState<MethodId>('bank')
  const [isProcessing, setIsProcessing] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [orderCode, setOrderCode] = useState('')

  // Card Form State
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  // Shipping details
  const [email, setEmail] = useState('arehman2370@gmail.com')
  const [phone, setPhone] = useState('+92 307 2151932')
  const [address, setAddress] = useState('House 42, Khayaban-e-Shamsheer, DHA Phase 5')
  const [city, setCity] = useState('Karachi')
  const [province, setProvince] = useState('Sindh')

  // Sample Pakistani luxury jewelry order items
  const orderItems = [
    {
      name: 'Aurelia Solitaire Diamond Ring',
      spec: '18K Rose Gold · 2.10 ct Round Brilliant (GIA Certified)',
      price: 850000,
      img: '/media/stone-1.jpg',
    },
    {
      name: 'Royal Swat Emerald Pendant',
      spec: '18K White Gold · 3.40 ct Emerald & Diamond Halo',
      price: 1150000,
      img: '/media/womens-necklace.jpg',
    },
  ]

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0)
  const shipping = 0 // Free insured delivery across Pakistan
  const tax = Math.round(subtotal * 0.03) // 3% sales tax
  const total = subtotal + tax

  // Format Card Number
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16)
    const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ')
    setCardNumber(formatted)
  }

  // Format Expiry (MM/YY)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 4)
    if (raw.length >= 3) {
      setExpiry(`${raw.slice(0, 2)}/${raw.slice(2)}`)
    } else {
      setExpiry(raw)
    }
  }

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      const code = `PK-VAL-${Math.floor(100000 + Math.random() * 900000)}`
      setOrderCode(code)
      setCompleted(true)
    }, 1200)
  }

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Top Universal Navbar */}
      <Navbar />

      {/* Subheader Breadcrumb & Security Indicator */}
      <div className="border-b border-border/60 bg-[#0c0d12] px-4 py-3 sm:px-6 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Atelier</span>
          </Link>

          <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-400/90">
            <LockKeyhole className="h-3 w-3" />
            <span>256-Bit Encrypted Checkout</span>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* Left Column: Checkout Steps / Form */}
            <section className="min-w-0 w-full">
              {completed ? (
                <div className="rounded-xl border border-primary/30 bg-primary/[0.03] p-5 sm:p-8 md:p-12 text-center animate-in fade-in zoom-in-95 duration-500 w-full">
                  <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <p className="mt-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary">
                    Order Confirmed · Ref {orderCode}
                  </p>
                  <h1 className="mt-2 font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight">
                    Shukriya / Thank You.
                  </h1>
                  <p className="mx-auto mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Your order has been reserved with Valoire Haute Joaillerie. Our senior concierge will contact you at <strong className="text-foreground break-all">{email}</strong> or <strong className="text-foreground">{phone}</strong> to confirm your ring sizing and insured courier dispatch.
                  </p>

                  <div className="mt-6 sm:mt-8 rounded-lg border border-border/80 bg-card/70 p-4 sm:p-5 text-left text-xs space-y-3 font-mono">
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/60 pb-2 gap-1">
                      <span className="text-muted-foreground uppercase text-[10px] sm:text-xs">Order Reference:</span>
                      <span className="font-semibold text-foreground break-all">{orderCode}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/60 pb-2 gap-1">
                      <span className="text-muted-foreground uppercase text-[10px] sm:text-xs">Client Name:</span>
                      <span className="text-foreground">{cardName || 'Valued Patron'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/60 pb-2 gap-1">
                      <span className="text-muted-foreground uppercase text-[10px] sm:text-xs">Contact Email:</span>
                      <span className="text-primary break-all">arehman2370@gmail.com</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/60 pb-2 gap-1">
                      <span className="text-muted-foreground uppercase text-[10px] sm:text-xs">Payment Option:</span>
                      <span className="text-foreground capitalize">{methods.find(m => m.id === method)?.label}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/60 pb-2 gap-1">
                      <span className="text-muted-foreground uppercase text-[10px] sm:text-xs">Delivery Area:</span>
                      <span className="text-foreground">{city}, Pakistan (Insured Express)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between pt-1 font-semibold text-sm gap-1">
                      <span className="uppercase text-xs sm:text-sm">Total Amount:</span>
                      <span className="text-primary font-serif text-base sm:text-lg">PKR {total.toLocaleString('en-US')}</span>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Link
                      href="/"
                      className="inline-flex h-12 items-center justify-center bg-primary px-6 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 rounded"
                    >
                      Return to Collection
                    </Link>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex h-12 items-center justify-center gap-2 border border-border px-6 font-mono text-xs uppercase tracking-[0.18em] transition hover:border-primary rounded"
                    >
                      <Download className="h-4 w-4" /> Print Receipt
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCompletePayment} className="space-y-6 sm:space-y-8 w-full">
                  <div>
                    <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-primary">
                      Secure Checkout · Valoire Haute Joaillerie
                    </p>
                    <h1 className="mt-1.5 font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight">
                      Payment & Delivery.
                    </h1>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      All creations are crafted with authentic 18K/22K solid gold and certified natural stones. Direct inquiries to <strong className="text-foreground">arehman2370@gmail.com</strong>.
                    </p>
                  </div>

                  {/* Payment Methods Selection */}
                  <div className="space-y-3">
                    <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      1. Select Payment Method
                    </label>
                    <div className="grid gap-2.5 sm:gap-3" role="radiogroup">
                      {methods.map(({ id, label, detail, icon: Icon }) => {
                        const selected = method === id
                        return (
                          <button
                            key={id}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => setMethod(id)}
                            className={`group flex w-full cursor-pointer items-start sm:items-center gap-3 sm:gap-4 rounded-lg border p-3.5 sm:p-4 text-left transition duration-200 ${
                              selected
                                ? 'border-primary bg-primary/[0.08] shadow-[0_4px_20px_-10px_rgba(255,255,255,0.1)]'
                                : 'border-border bg-card/50 hover:border-primary/50'
                            }`}
                          >
                            <span
                              className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-md border transition ${
                                selected
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : 'border-border text-muted-foreground group-hover:text-foreground'
                              }`}
                            >
                              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-xs sm:text-sm font-medium text-foreground">{label}</span>
                              <span className="mt-0.5 block text-[11px] sm:text-xs text-muted-foreground leading-relaxed break-words">{detail}</span>
                            </span>
                            <span
                              className={`flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full border mt-0.5 sm:mt-0 ${
                                selected ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                              }`}
                            >
                              {selected && <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Bank Transfer / Raast details preview */}
                  {method === 'bank' && (
                    <div className="rounded-lg border border-primary/40 bg-primary/5 p-4 sm:p-5 space-y-2.5 text-xs font-mono">
                      <p className="font-semibold text-primary uppercase tracking-wider text-[11px] sm:text-xs">
                        Atelier Official Bank Details (Pakistan):
                      </p>
                      <div className="space-y-1 text-muted-foreground text-[11px] sm:text-xs">
                        <p><strong className="text-foreground">Bank:</strong> Meezan Bank Ltd. (Islamic Banking)</p>
                        <p><strong className="text-foreground">Account Title:</strong> VALOIRE HAUTE JOAILLERIE</p>
                        <p className="break-all"><strong className="text-foreground">IBAN / Raast ID:</strong> PK42MEZN0001928374650192</p>
                        <p className="break-all"><strong className="text-foreground">Email for Receipt:</strong> arehman2370@gmail.com</p>
                      </div>
                    </div>
                  )}

                  {/* Card Details Form */}
                  {method === 'card' && (
                    <div className="rounded-lg border border-border/80 bg-card/60 p-4 sm:p-6 space-y-4 animate-in fade-in-50 duration-300">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3">
                        <h2 className="font-serif text-lg sm:text-xl">Card Payment Details</h2>
                        <span className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-primary">
                          <ShieldCheck className="h-3.5 w-3.5" /> Encrypted
                        </span>
                      </div>

                      <div className="grid gap-3.5">
                        <label className="grid gap-1.5 text-xs">
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            Cardholder Full Name
                          </span>
                          <input
                            required
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="e.g. Sarah Khan"
                            className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none transition focus:border-primary"
                          />
                        </label>

                        <label className="grid gap-1.5 text-xs">
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            Debit / Credit Card Number
                          </span>
                          <div className="flex h-10 sm:h-11 items-center gap-2.5 rounded border border-border bg-background px-3 transition focus-within:border-primary">
                            <CreditCard className="h-4 w-4 text-muted-foreground shrink-0" />
                            <input
                              required
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              placeholder="4242 •••• •••• 1928"
                              maxLength={19}
                              inputMode="numeric"
                              className="min-w-0 flex-1 bg-transparent text-xs sm:text-sm text-foreground outline-none font-mono"
                            />
                          </div>
                        </label>

                        <div className="grid grid-cols-2 gap-3">
                          <label className="grid gap-1.5 text-xs">
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                              Expiry (MM/YY)
                            </span>
                            <input
                              required
                              value={expiry}
                              onChange={handleExpiryChange}
                              placeholder="MM / YY"
                              maxLength={5}
                              className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none transition focus:border-primary font-mono"
                            />
                          </label>
                          <label className="grid gap-1.5 text-xs">
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                              Security CVV
                            </span>
                            <input
                              required
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value.slice(0, 4))}
                              placeholder="CVV"
                              maxLength={4}
                              inputMode="numeric"
                              className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none transition focus:border-primary font-mono"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Shipping & Delivery Info */}
                  <div className="rounded-lg border border-border/80 bg-card/60 p-4 sm:p-6 space-y-4">
                    <div className="border-b border-border/60 pb-3">
                      <h2 className="font-serif text-lg sm:text-xl">2. Shipping & Delivery Address</h2>
                      <p className="text-[11px] sm:text-xs text-muted-foreground">Complimentary insured armored courier delivery across Pakistan</p>
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <label className="grid gap-1.5 text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          Email for Invoice & Cards
                        </span>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                        />
                      </label>
                      <label className="grid gap-1.5 text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          Mobile / WhatsApp (for Dispatch)
                        </span>
                        <input
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                        />
                      </label>
                      <label className="grid gap-1.5 text-xs sm:col-span-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          Complete Street Address / House / Flat
                        </span>
                        <input
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                        />
                      </label>
                      <label className="grid gap-1.5 text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">City</span>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                        >
                          <option>Karachi</option>
                          <option>Lahore</option>
                          <option>Islamabad</option>
                          <option>Rawalpindi</option>
                          <option>Faisalabad</option>
                          <option>Multan</option>
                          <option>Peshawar</option>
                          <option>Quetta</option>
                          <option>Sialkot</option>
                          <option>Gujranwala</option>
                          <option>Hyderabad</option>
                          <option>International Delivery</option>
                        </select>
                      </label>
                      <label className="grid gap-1.5 text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Province / Region</span>
                        <input
                          required
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                          className="h-10 sm:h-11 rounded border border-border bg-background px-3 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="h-12 sm:h-14 w-full cursor-pointer rounded bg-primary font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-[0.99] disabled:opacity-60 px-4 text-center"
                  >
                    {isProcessing
                      ? 'Confirming Reservation with Atelier...'
                      : `Confirm Order · PKR ${total.toLocaleString('en-US')}`}
                  </button>
                </form>
              )}
            </section>

            {/* Right Column: Order Summary & Pakistani Badges */}
            <aside className="h-fit rounded-xl border border-border/80 bg-card p-4 sm:p-6 md:p-8 lg:sticky lg:top-24 space-y-5 sm:space-y-6 w-full min-w-0">
              <div className="flex items-center justify-between border-b border-border/60 pb-3 sm:pb-4 gap-2">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground truncate">
                  Order Summary ({orderItems.length} items)
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.15em] flex items-center gap-1 shrink-0">
                  <Sparkles className="h-3 w-3" /> Pakistan Certified
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-border/60">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 py-3 sm:py-4 first:pt-0 last:pb-0 items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-md object-cover border border-border/60 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm sm:text-base leading-tight text-foreground truncate">{item.name}</h3>
                      <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-2">{item.spec}</p>
                      <p className="mt-1.5 font-mono text-xs sm:text-sm font-semibold text-primary">
                        PKR {item.price.toLocaleString('en-US')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Breakdown */}
              <dl className="grid gap-2.5 sm:gap-3 border-y border-border/60 py-4 sm:py-5 text-xs font-mono">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground uppercase text-[11px] sm:text-xs">Subtotal</dt>
                  <dd className="text-foreground">PKR {subtotal.toLocaleString('en-US')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground uppercase text-[11px] sm:text-xs">Insured Courier (Pakistan)</dt>
                  <dd className="text-emerald-400 font-medium">Free / Included</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground uppercase text-[11px] sm:text-xs">Luxury Velvet Box & Certificate</dt>
                  <dd className="text-emerald-400 font-medium">Included</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground uppercase text-[11px] sm:text-xs">Sales Tax (3%)</dt>
                  <dd className="text-foreground">PKR {tax.toLocaleString('en-US')}</dd>
                </div>
              </dl>

              {/* Total */}
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em]">Total Amount</span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
                  PKR {total.toLocaleString('en-US')}
                </span>
              </div>

              {/* Trust & Guarantee Badges */}
              <div className="space-y-3 pt-4 border-t border-border/60">
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-[11px] sm:text-xs leading-relaxed"><strong>Official Certification:</strong> GIA, IGI & Pakistan Gemological reports included.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <PackageCheck className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-[11px] sm:text-xs leading-relaxed"><strong>Discrete Insured Delivery:</strong> Hand-delivered in Karachi, Lahore & Islamabad.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <Sparkles className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-[11px] sm:text-xs leading-relaxed"><strong>Valoire Hallmark:</strong> Master craftsmanship with lifetime guarantee.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

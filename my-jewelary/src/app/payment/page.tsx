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

type MethodId = 'bank' | 'card' | 'easypaisa' | 'cod'

const methods: Array<{ id: MethodId; label: string; detail: string; icon: typeof CreditCard }> = [
  { id: 'bank', label: 'Direct Bank Wire / Raast (Pakistan)', detail: 'Meezan Bank, HBL, Bank Alfalah (Instant Transfer)', icon: Building2 },
  { id: 'card', label: 'Credit or Debit Card', detail: 'Visa, Mastercard, UnionPay, PayFast', icon: CreditCard },
  { id: 'easypaisa', label: 'JazzCash / EasyPaisa / Nayapay', detail: 'Mobile wallet instant transfer', icon: Smartphone },
  { id: 'cod', label: 'Cash on Insured Delivery (Pakistan)', detail: 'Pay cash upon discrete signed delivery', icon: WalletCards },
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
      const code = `PK-AR-${Math.floor(100000 + Math.random() * 900000)}`
      setOrderCode(code)
      setCompleted(true)
    }, 1200)
  }

  return (
    <main className="min-h-dvh bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top Header */}
      <header className="border-b border-border/70 px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Atelier
          </Link>
          <div className="text-center">
            <span className="font-serif text-xl tracking-[0.25em] font-medium">VALOIRE</span>
            <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-primary">Pakistan · Haute Joaillerie</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
            <LockKeyhole className="h-3.5 w-3.5" /> 256-Bit Secure Checkout
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-10 md:px-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Form / Steps */}
        <section>
          {completed ? (
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-8 md:p-12 text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Order Confirmed · Reference {orderCode}
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Shukriya / Thank You.</h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Your order has been reserved with Valoire Haute Joaillerie. Our senior concierge will contact you at <strong>{email}</strong> or <strong>{phone}</strong> to confirm your ring sizing and insured courier dispatch.
              </p>

              <div className="mt-8 rounded-lg border border-border/80 bg-card p-5 text-left text-xs space-y-3 font-mono">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground uppercase">Order Reference:</span>
                  <span className="font-semibold text-foreground">{orderCode}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground uppercase">Client Name:</span>
                  <span className="text-foreground">{cardName || 'Valued Client'}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground uppercase">Contact Email:</span>
                  <span className="text-primary">arehman2370@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground uppercase">Payment Option:</span>
                  <span className="text-foreground capitalize">{methods.find(m => m.id === method)?.label}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground uppercase">Delivery Area:</span>
                  <span className="text-foreground">{city}, Pakistan (Insured Express)</span>
                </div>
                <div className="flex justify-between pt-1 font-semibold text-sm">
                  <span className="uppercase">Total Amount:</span>
                  <span className="text-primary font-serif text-base">PKR {total.toLocaleString('en-US')}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center bg-primary px-8 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
                >
                  Return to Collection
                </Link>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex h-12 items-center gap-2 border border-border px-6 font-mono text-xs uppercase tracking-[0.18em] transition hover:border-primary"
                >
                  <Download className="h-4 w-4" /> Print Order Invoice
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCompletePayment} className="space-y-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  Secure Checkout · Valoire Haute Joaillerie (Pakistan)
                </p>
                <h1 className="mt-2 font-serif text-4xl tracking-[-0.03em] md:text-6xl">
                  Choose Payment Method.
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  All pieces are guaranteed 100% authentic 18K/22K gold & certified natural stones. Contact concierge at <strong className="text-foreground">arehman2370@gmail.com</strong>.
                </p>
              </div>

              {/* Payment Methods Selection */}
              <div>
                <label className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Available Payment Options in Pakistan & Worldwide
                </label>
                <div className="grid gap-3" role="radiogroup">
                  {methods.map(({ id, label, detail, icon: Icon }) => {
                    const selected = method === id
                    return (
                      <button
                        key={id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => setMethod(id)}
                        className={`group flex cursor-pointer items-center gap-4 rounded-lg border p-4 text-left transition duration-200 md:p-5 ${
                          selected
                            ? 'border-primary bg-primary/10 shadow-[0_10px_30px_-15px_rgba(255,255,255,0.07)]'
                            : 'border-border bg-card/40 hover:border-primary/50'
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition ${
                            selected
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border text-muted-foreground group-hover:text-foreground'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-foreground">{label}</span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">{detail}</span>
                        </span>
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            selected ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                          }`}
                        >
                          {selected && <Check className="h-3 w-3" />}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Bank Transfer / Raast details preview */}
              {method === 'bank' && (
                <div className="rounded-lg border border-primary/40 bg-primary/5 p-5 space-y-3 text-xs font-mono">
                  <p className="font-semibold text-primary uppercase tracking-wider">Atelier Official Bank Details (Pakistan):</p>
                  <div className="space-y-1.5 text-muted-foreground">
                    <p><strong className="text-foreground">Bank:</strong> Meezan Bank Ltd. (Islamic Banking)</p>
                    <p><strong className="text-foreground">Account Title:</strong> VALOIRE HAUTE JOAILLERIE</p>
                    <p><strong className="text-foreground">IBAN / Raast ID:</strong> PK42MEZN0001928374650192</p>
                    <p><strong className="text-foreground">Email for Receipt:</strong> arehman2370@gmail.com</p>
                  </div>
                </div>
              )}

              {/* Card Details Form */}
              {method === 'card' && (
                <div className="rounded-lg border border-border/80 bg-card/60 p-6 space-y-5 animate-in fade-in-50 duration-300">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <h2 className="font-serif text-xl">Card Payment Details</h2>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                      <ShieldCheck className="h-4 w-4" /> 256-Bit Encrypted
                    </span>
                  </div>

                  <div className="grid gap-4">
                    <label className="grid gap-1.5 text-xs">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Cardholder Full Name
                      </span>
                      <input
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="e.g. Sarah Khan"
                        className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Debit / Credit Card Number
                      </span>
                      <div className="flex h-11 items-center gap-3 rounded border border-border bg-background px-3 transition focus-within:border-primary">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="4242 •••• •••• 1928"
                          maxLength={19}
                          inputMode="numeric"
                          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none font-mono"
                        />
                      </div>
                    </label>

                    <div className="grid grid-cols-2 gap-4">
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
                          className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary font-mono"
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
                          className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary font-mono"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Shipping & Delivery Info (Pakistan & Global) */}
              <div className="rounded-lg border border-border/80 bg-card/60 p-6 space-y-5">
                <div className="border-b border-border/60 pb-3">
                  <h2 className="font-serif text-xl">Shipping & Courier Details</h2>
                  <p className="text-xs text-muted-foreground">Free discrete armored courier delivery across Pakistan</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Email for Certificate & Invoicing
                    </span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <label className="grid gap-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Mobile / WhatsApp (for Delivery)
                    </span>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <label className="grid gap-1.5 text-xs sm:col-span-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Complete Street Address / House / Apartment
                    </span>
                    <input
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <label className="grid gap-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">City</span>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
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
                      className="h-11 rounded border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="h-14 w-full cursor-pointer rounded bg-primary font-mono text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-[0.99] disabled:opacity-60"
              >
                {isProcessing
                  ? 'Confirming Reservation with Atelier...'
                  : `Confirm Order · PKR ${total.toLocaleString('en-US')}`}
              </button>
            </form>
          )}
        </section>

        {/* Right Column: Order Summary & Pakistani Badges */}
        <aside className="h-fit rounded-xl border border-border/80 bg-card p-6 md:p-8 lg:sticky lg:top-8 space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Order Summary ({orderItems.length} items)
            </span>
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.15em] flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Pakistan Certified
            </span>
          </div>

          {/* Items List */}
          <div className="divide-y divide-border/60">
            {orderItems.map((item, index) => (
              <div key={index} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-20 w-20 rounded-md object-cover border border-border/60 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg leading-tight text-foreground truncate">{item.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground truncate">{item.spec}</p>
                  <p className="mt-2 font-mono text-sm font-semibold text-primary">
                    PKR {item.price.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cost Breakdown */}
          <dl className="grid gap-3 border-y border-border/60 py-5 text-xs font-mono">
            <div className="flex justify-between">
              <dt className="text-muted-foreground uppercase">Subtotal</dt>
              <dd className="text-foreground">PKR {subtotal.toLocaleString('en-US')}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground uppercase">Insured Courier (Pakistan)</dt>
              <dd className="text-primary font-medium">Free / Complimentary</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground uppercase">Luxury Velvet Box & Certificate</dt>
              <dd className="text-primary font-medium">Included</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground uppercase">Sales Tax (3%)</dt>
              <dd className="text-foreground">PKR {tax.toLocaleString('en-US')}</dd>
            </div>
          </dl>

          {/* Total */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Total Amount</span>
            <span className="font-serif text-3xl font-medium text-foreground">
              PKR {total.toLocaleString('en-US')}
            </span>
          </div>

          {/* Trust & Guarantee Badges */}
          <div className="space-y-3 pt-4 border-t border-border/60">
            <div className="flex items-start gap-3 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary mt-0.5" />
              <span><strong>Official Certification:</strong> GIA, IGI & Pakistan Gemological Lab reports included.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-muted-foreground">
              <PackageCheck className="h-4 w-4 shrink-0 text-primary mt-0.5" />
              <span><strong>Discrete Insured Delivery:</strong> Direct hand-delivery across Karachi, Lahore & Islamabad.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 shrink-0 text-primary mt-0.5" />
              <span><strong>Valoire Hallmark:</strong> Master craftsmanship with lifetime authenticity guarantee.</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

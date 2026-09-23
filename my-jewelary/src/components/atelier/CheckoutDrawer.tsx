'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building2, CheckCircle2, CreditCard, ShoppingBag, Trash2, WalletCards, X } from 'lucide-react'
import type { Product } from './collection'

export function CheckoutDrawer({
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
      <aside className="flex h-[92vh] w-full max-w-xl flex-col border border-border bg-card p-5 shadow-2xl md:h-full md:p-8 rounded-t-2xl md:rounded-2xl">
        <div className="flex items-start justify-between border-b border-border pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              {reviewing ? 'Order Review' : 'Shopping Bag'}
            </p>
            <h2 className="mt-1 font-serif text-2xl md:text-3xl">
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
            <h3 className="font-serif text-3xl md:text-4xl">Shukriya / Thank you.</h3>
            <p className="max-w-sm text-xs md:text-sm leading-relaxed text-muted-foreground">
              Your order has been recorded. Abdul Rahman Atelier concierge will contact you at <strong>{clientEmail}</strong> with dispatch tracking and gold certification cards.
            </p>
            <div className="pt-4 flex gap-4">
              <button
                type="button"
                onClick={() => { onClear(); onClose(); }}
                className="cursor-pointer bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            {reviewing ? (
              <div className="flex flex-1 flex-col overflow-y-auto py-5 space-y-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Please verify your reservation details below. Insured courier shipping across Pakistan and handcrafted velvet box are included free of charge.
                </p>

                <div className="rounded-lg border border-border/80 bg-background/50 p-4 space-y-4">
                  <div className="border-b border-border/60 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Items in Order</span>
                    {cart.map((item, index) => (
                      <div key={`${item.name}-${index}`} className="mt-3 flex items-center justify-between gap-4 text-xs md:text-sm">
                        <div className="min-w-0 flex-1">
                          <span className="font-serif text-sm md:text-base block truncate">{item.name}</span>
                          <span className="block text-[11px] text-muted-foreground truncate">{item.material}</span>
                        </div>
                        <span className="font-mono text-xs md:text-sm font-medium text-primary shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <dl className="grid gap-2 text-xs font-mono">
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
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      PKR {total.toLocaleString('en-US')}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-4 space-y-3">
                  {cart.length === 0 ? (
                    <div className="py-16 text-center space-y-3">
                      <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground">Your shopping bag is currently empty.</p>
                      <p className="text-xs text-muted-foreground/70">Explore our signature Pakistani jewelry collection and add pieces to your bag.</p>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {cart.map((item, index) => (
                        <div key={`${item.name}-${index}`} className="flex gap-3 rounded-lg border border-border/60 bg-background/40 p-2.5 items-center">
                          <img src={item.img} alt={item.name} className="h-14 w-14 rounded object-cover border border-border/60 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif text-sm truncate">{item.name}</h3>
                            <p className="text-[11px] text-muted-foreground truncate">{item.material}</p>
                            <p className="mt-0.5 font-mono text-xs font-semibold text-primary">{item.price}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="cursor-pointer p-2 text-muted-foreground hover:text-destructive transition-colors shrink-0"
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
                  <div className="border-t border-border pt-4 space-y-4">
                    <div className="flex justify-between font-mono text-xs uppercase tracking-[0.15em] items-center">
                      <span>Total (PKR)</span>
                      <span className="font-serif text-xl md:text-2xl font-medium text-primary">
                        PKR {total.toLocaleString('en-US')}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <label className="block text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Your Full Name</span>
                        <input
                          required
                          value={clientName}
                          onChange={e => setClientName(e.target.value)}
                          className="mt-1 h-9 w-full rounded border border-border bg-background px-3 text-xs outline-none focus:border-primary"
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
                          className="mt-1 h-9 w-full rounded border border-border bg-background px-3 text-xs outline-none focus:border-primary"
                          placeholder="arehman2370@gmail.com"
                        />
                      </label>
                      <label className="block text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">City (Pakistan & International)</span>
                        <select
                          value={deliveryCity}
                          onChange={e => setDeliveryCity(e.target.value)}
                          className="mt-1 h-9 w-full rounded border border-border bg-background px-3 text-xs outline-none focus:border-primary"
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

                    <div className="flex gap-2.5">
                      <button
                        type="button"
                        disabled={!cart.length || !clientName || !clientEmail}
                        onClick={() => setReviewing(true)}
                        className="h-11 flex-1 cursor-pointer bg-primary font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
                      >
                        Reserve Pieces
                      </button>
                      <Link
                        href="/payment"
                        className="inline-flex h-11 items-center justify-center border border-border px-3 font-mono text-xs uppercase tracking-[0.16em] transition hover:border-primary shrink-0"
                      >
                        Payment Page
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}

            {reviewing && (
              <div className="border-t border-border pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setReviewing(false)}
                  className="h-11 flex-1 cursor-pointer border border-border font-mono text-xs uppercase tracking-[0.16em] transition hover:border-primary"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setPaid(true)}
                  className="h-11 flex-1 cursor-pointer bg-primary font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition hover:opacity-90"
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

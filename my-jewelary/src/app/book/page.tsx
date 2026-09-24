'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Send, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { blink } from '@/blink/client'
import type { ViewingEnquiriesRow } from '@/lib/db-types'
import { Footer } from '@/components/atelier/footer'
import { Navbar } from '@/components/atelier/navbar'

export default function BookPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const requests = blink.db.table<ViewingEnquiriesRow>('viewing_enquiries')
      await requests.create({
        id: `vr_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
        name: String(data.get('name')),
        email: String(data.get('email')),
        city: String(data.get('city')),
        preferredDate: String(data.get('date')),
        message: String(data.get('message') ?? ''),
      })
      setStatus('sent')
      form.reset()
      toast.success('Appointment request sent!', {
        description: 'VALOIRE Atelier concierge will contact you within 24 hours.',
      })
    } catch (err) {
      setStatus('idle')
      toast.error('Could not send your request', { description: err instanceof Error ? err.message : String(err) })
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-[#08080a] text-foreground selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation */}
      <Navbar />

      {/* Main Content Area - Dark Noir Shading #0e0f15 */}
      <main className="flex-1 bg-[#0e0f15] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
              <Sparkles className="h-3 w-3 text-white" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                VIP Salon Consultation
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl tracking-[-0.03em] text-white">
              Book a Private Visit
            </h1>
            <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
              Reserve a private viewing suite in Karachi or Lahore. Discuss bespoke bridal sets, GIA certified diamonds, and custom gold creations with VALOIRE senior jewelers.
            </p>
          </div>

          {/* Clean Form Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#14151e] p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
            {status === 'sent' ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground">Appointment Requested</h3>
                <p className="max-w-md mx-auto text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Thank you. VALOIRE concierge team has received your consultation request and will reach out shortly with boutique salon confirmation.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <Link
                    href="/"
                    className="rounded-xl bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition"
                  >
                    Return to Home
                  </Link>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-white/10 transition"
                  >
                    Book Another Visit
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bk-name" className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="bk-name"
                      name="name"
                      required
                      autoComplete="name"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-white/40 transition-colors"
                      placeholder="e.g. Zara Ahmed"
                    />
                  </div>

                  <div>
                    <label htmlFor="bk-email" className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="bk-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-white/40 transition-colors"
                      placeholder="e.g. zara@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bk-city" className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                      Salon Location
                    </label>
                    <select
                      id="bk-city"
                      name="city"
                      required
                      defaultValue="Karachi Flagship (Clifton)"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-sm text-foreground outline-none focus:border-white/40 transition-colors"
                    >
                      <option value="Karachi Flagship (Clifton)">Karachi Flagship (Clifton Block 4)</option>
                      <option value="Lahore Salon (MM Alam Road)">Lahore Salon (MM Alam Road)</option>
                      <option value="Online VIP Video Consultation">Online VIP Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bk-date" className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      id="bk-date"
                      name="date"
                      type="date"
                      required
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-sm text-foreground outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bk-message" className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    Jewelry Piece of Interest / Custom Bridal Notes (Optional)
                  </label>
                  <textarea
                    id="bk-message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Tell us what you would like to view (e.g. Solitaire Diamond Ring, Swat Emerald, 22K Gold Bridal Set)..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full h-12 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-8 font-mono text-xs uppercase tracking-widest text-black font-semibold hover:bg-white/90 active:scale-[0.99] transition disabled:opacity-50 shadow-lg"
                >
                  {status === 'sending' ? (
                    'Submitting Request…'
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Request Private Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer - Phone only at bottom */}
      <Footer />
    </div>
  )
}

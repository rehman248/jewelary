'use client'

import { useState, type FormEvent } from 'react'
import { toast } from 'sonner'
import { blink } from '@/blink/client'
import type { ViewingEnquiriesRow } from '@/lib/db-types'
import { Eyebrow } from './motion'
import { CheckCircle2, MessageCircle, Phone, Send } from 'lucide-react'

export function Booking() {
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
        description: 'Valoire Atelier concierge will contact you within 24 hours to confirm your appointment.',
      })
    } catch (err) {
      setStatus('idle')
      toast.error('Could not send your request', { description: err instanceof Error ? err.message : String(err) })
    }
  }

  return (
    <section id="book" className="relative bg-[#0e0f15] border-t border-white/[0.06] px-4 py-16 sm:py-24 sm:px-6 md:px-10" aria-labelledby="book-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow index="V">VIP Consultation</Eyebrow>
            <h2 id="book-title" className="mt-2 font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-foreground">
              Private Viewing
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-muted-foreground">
              Reserve an exclusive salon consultation in Karachi, Lahore, or Islamabad. Discuss custom bridal jewelry, gemstone selection, and bespoke diamond settings with master artisans at Valoire.
            </p>
            <div className="pt-2 text-xs font-mono text-muted-foreground">
              <span>Direct inquiries handled with private discretion.</span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#14151e] p-5 sm:p-8 md:p-10 shadow-2xl">
              {status === 'sent' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground">Appointment Requested</h3>
                  <p className="max-w-md mx-auto text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Thank you. Valoire Haute Joaillerie concierge will review your booking and reach out shortly to confirm your private appointment.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-white/10 transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground">Schedule Your Visit</h3>
                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-name" className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="bk-name"
                        name="name"
                        required
                        autoComplete="name"
                        className="h-11 sm:h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-white/40 transition-colors"
                        placeholder="e.g. Zara Ahmed"
                      />
                    </div>

                    <div>
                      <label htmlFor="bk-email" className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="bk-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="h-11 sm:h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-white/40 transition-colors"
                        placeholder="e.g. zara@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-city" className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                        Salon Location
                      </label>
                      <select
                        id="bk-city"
                        name="city"
                        required
                        defaultValue="Karachi Flagship (Clifton)"
                        className="h-11 sm:h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-xs sm:text-sm text-foreground outline-none focus:border-white/40 transition-colors"
                      >
                        <option value="Karachi Flagship (Clifton)">Karachi Flagship (Clifton)</option>
                        <option value="Lahore Salon (MM Alam Road)">Lahore Salon (MM Alam Road)</option>
                        <option value="Online Video Consultation">Online VIP Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bk-date" className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="bk-date"
                        name="date"
                        type="date"
                        required
                        className="h-11 sm:h-12 w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] px-4 font-sans text-xs sm:text-sm text-foreground outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bk-message" className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                      Jewelry Piece of Interest / Custom Notes (Optional)
                    </label>
                    <textarea
                      id="bk-message"
                      name="message"
                      rows={3}
                      className="w-full rounded-xl border border-white/[0.08] bg-[#1a1b26] p-3.5 sm:p-4 font-sans text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-white/40 transition-colors resize-none"
                      placeholder="e.g. Interested in viewing the Swat Emerald Pendant or custom 18K bridal set..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full h-11 sm:h-12 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 sm:px-8 font-mono text-xs uppercase tracking-widest text-black font-semibold hover:bg-white/90 active:scale-[0.99] transition disabled:opacity-50 shadow-lg"
                  >
                    {status === 'sending' ? (
                      'Sending Request…'
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
        </div>
      </div>
    </section>
  )
}



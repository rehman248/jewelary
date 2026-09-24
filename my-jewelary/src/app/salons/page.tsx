'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react'
import { Eyebrow } from '@/components/atelier/motion'
import { Footer } from '@/components/atelier/footer'
import { Navbar } from '@/components/atelier/navbar'

const SALONS = [
  {
    name: 'Karachi Flagship Salon',
    city: 'Karachi, Sindh',
    tag: 'Main Atelier & Custom Studio',
    address: 'Clifton Block 4, Ocean Towers District, Karachi',
    hours: 'Monday – Saturday: 11:30 AM – 9:00 PM (Sunday by Appointment)',
    amenities: ['Private VIP Viewing Suite', 'Gemological Microscope Inspection Bench', 'Custom Bridal Sizing Room', 'Secure Valet Parking'],
  },
  {
    name: 'Lahore Haute Boutique',
    city: 'Lahore, Punjab',
    tag: 'Private Viewing Suite',
    address: 'MM Alam Road, Gulberg III, Lahore',
    hours: 'Monday – Saturday: 12:00 PM – 9:30 PM (Sunday Closed)',
    amenities: ['Bespoke Design Studio', 'High-Jewelry Showcase Gallery', 'Private Consultation Lounge', 'Secure Armored Dispatch'],
  },
]

export default function SalonsPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#08080a] text-foreground selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation */}
      <Navbar />

      {/* Main Content Area - Shaded in #0a0a0e & #13141c */}
      <main className="flex-1 bg-[#0a0a0e] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <Eyebrow index="IV">Flagship Salons</Eyebrow>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-white">
                Karachi & Lahore
              </h1>
              <p className="text-xs sm:text-base leading-relaxed text-muted-foreground">
                Visit our private boutique salons in Pakistan. Each location offers a dedicated viewing suite, gemological inspection benches, and bespoke bridal consultation.
              </p>
            </div>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition shadow-lg self-start md:self-auto"
            >
              Book Salon Appointment <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Boutique Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {SALONS.map((salon) => (
              <div
                key={salon.name}
                className="group rounded-2xl border border-white/[0.08] bg-[#13141c] p-6 sm:p-10 space-y-6 transition-all duration-300 hover:border-white/20 hover:bg-[#161722] hover:shadow-2xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {salon.tag}
                    </span>
                    <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-white font-medium">
                      {salon.name}
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white shrink-0">
                    {salon.city.split(',')[0]}
                  </span>
                </div>

                <div className="space-y-4 border-t border-white/[0.06] pt-5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-foreground/90">{salon.address}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-foreground/90">{salon.hours}</span>
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block mb-2">
                      Salon Features:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {salon.amenities.map((a) => (
                        <li key={a} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition"
                  >
                    Request Viewing in {salon.city.split(',')[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer - Phone only at bottom */}
      <Footer />
    </div>
  )
}

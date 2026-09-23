import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Download,
  ExternalLink,
  Gem,
  Package,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Client Dashboard — Abdul Rahman Fine Jewelry',
  description: 'Private client dashboard, active jewelry reservations, and appointments.',
}

export default function DashboardHome() {
  const activeReservations = [
    {
      id: 'PK-AR-892104',
      name: 'Aurelia Solitaire Diamond Ring',
      spec: '18K Rose Gold · 2.10 ct Round Brilliant (GIA Certified)',
      price: 'PKR 850,000',
      status: 'Atelier Quality Verification',
      statusColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
      date: 'September 22, 2026',
      advisor: 'Elena Vance (Karachi Salon)',
      img: '/media/stone-1.jpg',
    },
    {
      id: 'PK-AR-749210',
      name: 'The Sovereign Chronograph',
      spec: 'Platinum Case · Diamond Bezel · Automatic Movement',
      price: 'PKR 2,850,000',
      status: 'Armored Courier Scheduled',
      statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
      date: 'September 19, 2026',
      advisor: 'Henri Dubois (Lahore Atelier)',
      img: '/media/mens-watch.jpg',
    },
  ]

  const upcomingAppointments = [
    {
      location: 'Karachi Flagship Salon — Clifton Block 4',
      date: 'Saturday, October 3, 2026 · 3:30 PM',
      purpose: 'Bespoke Diamond Solitaire & Bridal Gold Fitting',
      status: 'Confirmed',
    },
  ]

  return (
    <div className="space-y-8 p-6 md:p-10 max-w-7xl mx-auto w-full">
      {/* Top Header & Back Link */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/70 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-3 w-3" /> Back to Storefront
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Abdul Rahman Jewelry (Pakistan)
            </span>
          </div>
          <h1 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            Welcome, Abdul Rahman
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            Account: <strong>arehman2370@gmail.com</strong> · Manage fine jewelry reservations and salon appointments.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/products"
            className="inline-flex h-10 items-center gap-2 rounded border border-border bg-card px-4 font-mono text-xs uppercase tracking-wider text-foreground hover:border-primary transition-colors"
          >
            <Gem className="h-3.5 w-3.5 text-primary" /> Browse Catalog
          </Link>
          <Link
            href="/payment"
            className="inline-flex h-10 items-center gap-2 rounded bg-primary px-4 font-mono text-xs uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <CreditCard className="h-3.5 w-3.5" /> Payment & Checkout
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'Active Reservations',
            value: '2 Orders',
            desc: '1 in review, 1 ready for courier dispatch',
            icon: Package,
          },
          {
            title: 'Private Salon Visit',
            value: '1 Appointment',
            desc: 'Karachi Flagship Salon on October 3',
            icon: Calendar,
          },
          {
            title: 'Authenticity Cards',
            value: '2 Certificates',
            desc: 'GIA & Pakistan Gemological Lab reports',
            icon: ShieldCheck,
          },
          {
            title: 'VIP Client Tier',
            value: 'Haute Joaillerie',
            desc: 'Dedicated concierge & nationwide insured shipping',
            icon: Sparkles,
          },
        ].map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} className="bg-card/70 border-border/80">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {item.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="font-serif text-2xl font-semibold text-foreground">{item.value}</div>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Active Reservations Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl tracking-tight">Active Jewelry Reservations</h2>
          <span className="font-mono text-xs text-muted-foreground">Real-time status</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {activeReservations.map((order) => (
            <div
              key={order.id}
              className="rounded-xl border border-border/80 bg-card p-5 space-y-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-4">
                <img
                  src={order.img}
                  alt={order.name}
                  className="h-24 w-24 rounded-lg object-cover border border-border/80 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Ref: {order.id}
                    </span>
                    <span className="font-mono text-sm font-semibold text-primary">{order.price}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-medium text-foreground truncate">{order.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{order.spec}</p>
                  <p className="mt-1 text-[11px] text-foreground/80">
                    <span className="text-muted-foreground">Advisor:</span> {order.advisor}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-mono ${order.statusColor}`}>
                  <Clock className="h-3 w-3" /> {order.status}
                </span>
                <Link
                  href="/payment"
                  className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointments & Concierge Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Appointments */}
        <div className="rounded-xl border border-border/80 bg-card p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <h3 className="font-serif text-xl">Upcoming Viewing Appointments</h3>
            <Link
              href="/#book"
              className="font-mono text-[10px] uppercase tracking-wider text-primary hover:underline"
            >
              + Book New
            </Link>
          </div>
          {upcomingAppointments.map((apt, idx) => (
            <div key={idx} className="rounded-lg border border-border/60 bg-background/50 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-primary">{apt.location}</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" /> {apt.status}
                </span>
              </div>
              <p className="font-serif text-base text-foreground">{apt.purpose}</p>
              <p className="text-xs text-muted-foreground">{apt.date}</p>
            </div>
          ))}
        </div>

        {/* Private Concierge */}
        <div className="rounded-xl border border-border/80 bg-card p-6 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="font-serif text-xl">Private Concierge & Support</h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">Pakistan Priority</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              For bespoke bridal commissions, gold exchange valuations, or VIP appointments, your dedicated concierge is at your service.
            </p>
            <div className="mt-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-border/40 pb-2">
                <span className="text-muted-foreground uppercase">Official Email:</span>
                <a href="mailto:arehman2370@gmail.com" className="text-primary hover:underline">
                  arehman2370@gmail.com
                </a>
              </div>
              <div className="flex justify-between border-b border-border/40 pb-2">
                <span className="text-muted-foreground uppercase">Pakistan Phone:</span>
                <a href="tel:+922135879000" className="text-foreground hover:underline">
                  +92 21 3587 9000
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <Link
              href="/"
              className="flex-1 text-center py-2.5 rounded border border-border font-mono text-xs uppercase tracking-wider text-foreground hover:border-primary transition-colors"
            >
              Main Store
            </Link>
            <Link
              href="/payment"
              className="flex-1 text-center py-2.5 rounded bg-primary font-mono text-xs uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Pay Invoice
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

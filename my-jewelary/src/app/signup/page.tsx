'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Lock, Mail, User, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { blink } from '@/blink/client'
import { Navbar } from '@/components/atelier/navbar'
import { Footer } from '@/components/atelier/footer'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      await blink.auth.signUp({ email, password, metadata: { displayName: name } })
      router.push('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'We could not create your account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-[#08080a] text-foreground selection:bg-white selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Signup View */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0e0f17] to-[#08080a]">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-white" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                Maison Membership
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Create Your Account
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Save bespoke preferences, track creations, and book priority salon viewings.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#12131d] p-6 sm:p-8 shadow-2xl space-y-6">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="e.g. Zara Ahmed"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#181926] pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="client@example.com"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#181926] pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    required
                    minLength={8}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#181926] pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 active:scale-[0.99] transition disabled:opacity-50 shadow-lg"
              >
                {loading ? 'Creating Account…' : 'Create Account'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="pt-4 border-t border-white/[0.06] text-center space-y-2 font-mono text-xs">
              <p className="text-zinc-400">
                Already have an account?{' '}
                <Link href="/login" className="text-white hover:underline underline-offset-4 font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Shield */}
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>256-Bit Encrypted Client Security</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

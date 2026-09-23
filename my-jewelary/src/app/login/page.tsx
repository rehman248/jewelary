'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { blink } from '@/blink/client'

export function AuthLayout({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="grid min-h-dvh bg-background text-foreground lg:grid-cols-2">
      <div className="hidden bg-[linear-gradient(135deg,oklch(0.18_0.025_70),oklch(0.34_0.06_65))] p-10 lg:flex lg:flex-col lg:justify-between">
        <Link href="/" className="font-serif text-2xl tracking-[0.25em]">ABDUL RAHMAN</Link>
        <div>
          <p className="max-w-md font-serif text-4xl leading-[1.1] tracking-[-0.03em]">
            Handcrafted fine jewelry for men and women.
          </p>
          <p className="mt-4 text-sm text-foreground/70">
            Designed & created by Abdul Rahman.
          </p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">Paris · Antwerp · Online Store</span>
      </div>
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <Link href="/" className="font-serif text-xl tracking-[0.25em] lg:hidden">ABDUL RAHMAN</Link>
          <div className="mt-16 lg:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Customer Account</p>
            <h1 className="mt-4 font-serif text-4xl tracking-[-0.04em]">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Field({ label, type, value, onChange, autoComplete }: { label: string; type: string; value: string; onChange: (value: string) => void; autoComplete: string }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{label}</span>
      <input
        required
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="h-12 border border-border bg-background px-4 text-foreground outline-none transition focus:border-primary"
      />
    </label>
  )
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      await blink.auth.signInWithEmail(email, password)
      router.push('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'We could not sign you in. Please check your email and password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to view your orders and bookings.">
      <form onSubmit={submit} className="grid gap-5">
        <Field label="Email Address" type="email" value={email} onChange={setEmail} autoComplete="email" />
        <Field label="Password" type="password" value={password} onChange={setPassword} autoComplete="current-password" />
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <button
          disabled={loading}
          className="h-12 cursor-pointer bg-primary font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        New here? <Link href="/signup" className="text-primary underline underline-offset-4">Create an account</Link>
      </p>
    </AuthLayout>
  )
}


'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { blink } from '@/blink/client'
import { AuthLayout } from '../login/page'

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
    <AuthLayout title="Create an Account" subtitle="Save your favorite pieces, track orders, and book appointments.">
      <form onSubmit={submit} className="grid gap-5">
        <label className="grid gap-2 text-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Full Name</span>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            className="h-12 border border-border bg-background px-4 text-foreground outline-none focus:border-primary"
            placeholder="Abdul Rahman"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Email Address</span>
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            className="h-12 border border-border bg-background px-4 text-foreground outline-none focus:border-primary"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Password</span>
          <input
            required
            minLength={8}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
            className="h-12 border border-border bg-background px-4 text-foreground outline-none focus:border-primary"
            placeholder="At least 8 characters"
          />
        </label>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <button
          disabled={loading}
          className="h-12 cursor-pointer bg-primary font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? 'Creating account…' : 'Create Account'}
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account? <Link href="/login" className="text-primary underline underline-offset-4">Sign in</Link>
      </p>
    </AuthLayout>
  )
}


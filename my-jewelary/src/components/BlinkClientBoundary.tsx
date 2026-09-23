'use client'

import { useEffect, useState, type ReactNode } from 'react'

/**
 * SSR-safe client boundary for Next.js App Router.
 * Prevents hydration mismatches for components reading browser APIs (window, localStorage, etc.).
 */
export function BlinkClientBoundary({
  children,
  fallback = null,
}: {
  children: ReactNode
  fallback?: ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

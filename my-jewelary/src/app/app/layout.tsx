'use client'

import { SharedAppLayout } from '@/layouts/shared-app-layout'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SharedAppLayout appName="Valoire Haute Joaillerie">
      {children}
    </SharedAppLayout>
  )
}


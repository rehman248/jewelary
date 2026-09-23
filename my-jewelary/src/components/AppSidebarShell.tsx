'use client'

import { useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  Gem,
  LayoutDashboard,
  LogOut,
  PanelLeft,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SIDEBAR_KEY = 'sidebar_collapsed'

interface NavItemDef {
  href: string
  icon: ReactNode
  label: string
  active?: boolean
}

const NAV_ITEMS: NavItemDef[] = [
  { href: '/app', icon: <LayoutDashboard className="h-4 w-4" />, label: 'Dashboard Overview', active: true },
  { href: '/#collection', icon: <Gem className="h-4 w-4" />, label: 'Jewelry Collection' },
  { href: '/payment', icon: <CreditCard className="h-4 w-4" />, label: 'Checkout & Payment' },
  { href: '/#book', icon: <Calendar className="h-4 w-4" />, label: 'Private Appointment' },
]

function NavItem({ item, collapsed }: { item: NavItemDef; collapsed: boolean }) {
  const link = (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-2.5 rounded-md text-sm transition-colors cursor-pointer',
        collapsed ? 'justify-center w-9 h-9 mx-auto' : 'px-3 py-2.5 w-full',
        item.active
          ? 'bg-primary/15 text-primary font-medium border border-primary/30'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground'
      )}
    >
      <span className="shrink-0">{item.icon}</span>
      {!collapsed && <span className="truncate">{item.label}</span>}
    </Link>
  )
  if (!collapsed) return link
  return (
    <Tooltip>
      <TooltipTrigger asChild>{link}</TooltipTrigger>
      <TooltipContent side="right">{item.label}</TooltipContent>
    </Tooltip>
  )
}

export function AppSidebarShell() {
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    if (localStorage.getItem(SIDEBAR_KEY) === 'true') setCollapsed(true)
  }, [])

  const toggle = useCallback(() => {
    setCollapsed(v => {
      const next = !v
      localStorage.setItem(SIDEBAR_KEY, String(next))
      return next
    })
  }, [])

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          'flex flex-col h-full bg-card border-r border-border overflow-hidden',
          'transition-[width] duration-200 ease-linear shrink-0',
          collapsed ? 'w-[4rem]' : 'w-[16rem]'
        )}
      >
        {/* Header */}
        <div
          className={cn(
            'flex items-center gap-2 shrink-0 border-b border-border h-[60px] px-3',
            collapsed && 'justify-center px-2'
          )}
        >
          {!collapsed && (
            <Link href="/" className="flex items-center gap-2.5 flex-1 min-w-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground text-xs font-serif font-bold shrink-0">
                AR
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-sm font-semibold tracking-wider truncate">ABDUL RAHMAN</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-primary truncate">Private Salon</span>
              </div>
            </Link>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 shrink-0 text-muted-foreground hover:text-foreground"
                onClick={toggle}
              >
                <PanelLeft
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    collapsed && 'rotate-180'
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Return to Store button */}
        <div className="p-2 border-b border-border/60">
          <Link
            href="/"
            className={cn(
              'flex items-center gap-2 rounded-md font-mono text-xs uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors',
              collapsed ? 'justify-center p-2' : 'px-3 py-2'
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Return to Store</span>}
          </Link>
        </div>

        {/* Navigation items */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-1.5">
          {!collapsed && (
            <p className="px-3 pt-1 pb-1 text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-widest">
              Client Portal
            </p>
          )}
          {NAV_ITEMS.map(item => (
            <NavItem key={item.href} item={item} collapsed={collapsed} />
          ))}
        </div>

        {/* Footer / User Profile */}
        <div
          className={cn(
            'shrink-0 border-t border-border',
            collapsed ? 'flex flex-col items-center gap-1 p-2' : 'p-3 space-y-2'
          )}
        >
          {/* User row */}
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent transition-colors cursor-pointer">
                  <Avatar className="h-7 w-7 shrink-0">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary font-serif">AR</AvatarFallback>
                  </Avatar>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Abdul Rahman · Client Account</TooltipContent>
            </Tooltip>
          ) : (
            <div className="flex items-center gap-2.5 rounded-md bg-accent/40 px-3 py-2">
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className="text-xs bg-primary/20 text-primary font-serif font-semibold">AR</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-semibold leading-tight truncate">Abdul Rahman</p>
                <p className="text-[10px] font-mono text-muted-foreground leading-tight truncate">
                  arehman2370@gmail.com
                </p>
              </div>
            </div>
          )}

          {/* Return Home / Sign Out */}
          <Link
            href="/"
            className={cn(
              'flex items-center gap-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
              collapsed ? 'justify-center h-8 w-8 mx-auto' : 'px-3 py-1.5 w-full text-xs font-mono uppercase tracking-wider'
            )}
          >
            <LogOut className="h-3.5 w-3.5 shrink-0" />
            {!collapsed && <span>Exit Dashboard</span>}
          </Link>
        </div>
      </div>
    </TooltipProvider>
  )
}

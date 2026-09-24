import type { Metadata, Viewport } from "next"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#09090b",
}

export const metadata: Metadata = {
  title: "VALOIRE Haute Joaillerie — Fine Jewelry Atelier (Pakistan)",
  description: "Exclusive handcrafted 18K/22K solid gold, certified natural diamonds, and fine silver creations by VALOIRE Atelier. Salons in Karachi and Lahore.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <TooltipProvider delayDuration={0}>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}


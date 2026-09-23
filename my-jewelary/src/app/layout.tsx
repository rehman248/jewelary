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
  title: "Abdul Rahman Jewelry — Pakistan's Premier Fine Jeweler",
  description: "Exclusive handcrafted 18K/22K gold and certified diamond jewelry in Pakistan. Created and designed by Abdul Rahman (arehman2370@gmail.com).",
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


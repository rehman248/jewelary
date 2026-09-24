'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  ShoppingBag,
  Check,
  ArrowRight,
  ShieldCheck,
  Gem,
  Award,
  Hammer,
  Layers,
  Flame,
  CheckCircle2,
} from 'lucide-react'
import { BlinkClientBoundary } from '@/components/BlinkClientBoundary'
import { Navbar } from '@/components/atelier/navbar'
import { Footer } from '@/components/atelier/footer'
import { CheckoutDrawer } from '@/components/atelier/CheckoutDrawer'
import type { Product } from '@/components/atelier/collection'

export interface CreationItem extends Product {
  materialGroup: 'diamond' | 'gold' | 'silver' | 'emerald'
  craftTechnique: string
  karatOrPurity: string
}

export const CREATIONS: CreationItem[] = [
  // --- 1. DIAMOND CREATIONS ---
  {
    id: 'cr-dia-1',
    name: 'Aurelia Solitaire Diamond Ring',
    category: 'women',
    type: 'Solitaire Ring',
    materialGroup: 'diamond',
    material: '18K White Gold · 2.10 ct Natural Diamond',
    price: 'PKR 850,000',
    priceNumber: 850000,
    img: '/media/stone-1.jpg',
    karatOrPurity: '18K Gold · D/VVS1',
    craftTechnique: 'Six-Prong Platinum Crown Setting',
    description: 'A brilliant 2.10 ct round diamond mounted with microscopic precision on 18K white gold for maximum light scintillation.',
    specs: {
      stone: '2.10 ct Natural Diamond (D / VVS1)',
      metal: '18K White Gold (750)',
      clarity: 'Triple Excellent (3EX)',
      certificate: 'GIA Laser Inscribed (USA)',
    },
  },
  {
    id: 'cr-dia-2',
    name: 'Eternity Diamond Rivière Necklace',
    category: 'women',
    type: 'Diamond Necklace',
    materialGroup: 'diamond',
    material: '18K White Gold · 14.50 ct Graduated Diamonds',
    price: 'PKR 2,450,000',
    priceNumber: 2450000,
    img: '/media/womens-necklace.jpg',
    karatOrPurity: '18K Gold · 14.50 ct',
    craftTechnique: 'Hand-linked Graduated Articulation',
    description: 'Seamless diamond rivière necklace featuring 84 matched colorless diamonds that rest gracefully on the collarbone.',
    specs: {
      stone: '14.50 ct Matched Natural Diamonds',
      metal: '18K Solid White Gold',
      clarity: 'Color D–E, Clarity VVS',
      certificate: 'IGI International Certificate',
    },
  },
  {
    id: 'cr-dia-3',
    name: 'Pavé Diamond Chandelier Earrings',
    category: 'women',
    type: 'Earrings',
    materialGroup: 'diamond',
    material: '18K Rose Gold · 3.80 ct Brilliant Cut',
    price: 'PKR 980,000',
    priceNumber: 980000,
    img: '/media/stone-4.jpg',
    karatOrPurity: '18K Rose Gold · 3.80 ct',
    craftTechnique: 'Micro-Pavé Drop Sculpting',
    description: 'Cascading floral drop earrings encrusted with micro-pavé diamonds catching light from every angle.',
    specs: {
      stone: '3.80 ct Natural Brilliant Diamonds',
      metal: '18K Solid Rose Gold',
      clarity: 'VVS2 Clarity',
      certificate: 'VALOIRE Master Certificate',
    },
  },

  // --- 2. SOLID GOLD CREATIONS (18K & 22K) ---
  {
    id: 'cr-gld-1',
    name: 'Royal Heritage 22K Gold Bangle',
    category: 'women',
    type: 'Gold Bangle',
    materialGroup: 'gold',
    material: '22K Solid Gold · Hand-Carved Filigree',
    price: 'PKR 620,000',
    priceNumber: 620000,
    img: '/media/womens-bracelet.jpg',
    karatOrPurity: '22K Pure Gold (916)',
    craftTechnique: 'Hand-Hammered Chasing & Filigree',
    description: 'Forged from 22K pure solid gold using ancient royal goldsmithing techniques with intricate relief scrollwork.',
    specs: {
      metal: '22K Solid Gold (916 Purity)',
      stone: 'Solid Gold Without Inclusions',
      clarity: 'Mirror-Polished Assay Stamped',
      certificate: 'Official Gold Hallmarking Certificate',
    },
  },
  {
    id: 'cr-gld-2',
    name: 'Imperial Sovereign 18K Gold Signet',
    category: 'men',
    type: 'Gold Signet Ring',
    materialGroup: 'gold',
    material: '18K Yellow Gold · Brushed Satin & Polished Bevel',
    price: 'PKR 340,000',
    priceNumber: 340000,
    img: '/media/mens-ring.jpg',
    karatOrPurity: '18K Solid Gold (750)',
    craftTechnique: 'Monolithic Heavy Cast & Hand-Engraved',
    description: 'A substantial, weighted gold signet ring engineered for gentlemen with a brushed satin top face and mirror bevels.',
    specs: {
      metal: '18K Solid Yellow Gold (750)',
      stone: 'Available for Custom Family Crest Engraving',
      clarity: 'Solid Heavy Weight (16.8 grams)',
      certificate: 'VALOIRE Assay Stamp',
    },
  },
  {
    id: 'cr-gld-3',
    name: 'Nocturne Chronograph in 18K Gold',
    category: 'men',
    type: 'Timepiece',
    materialGroup: 'gold',
    material: '18K Gold Bezel · Automatic Movement',
    price: 'PKR 1,200,000',
    priceNumber: 1200000,
    img: '/media/mens-watch.jpg',
    karatOrPurity: '18K Solid Gold & Sapphire Glass',
    craftTechnique: 'Swiss-grade Hand Assembly',
    description: 'Luxury mechanical chronograph featuring an 18K solid gold case, sapphire crystal exhibition back, and alligator strap.',
    specs: {
      metal: '18K Yellow Gold Case',
      stone: 'Sapphire Crystal Glass (Anti-Reflective)',
      clarity: 'Calibre Automatic Chronometer',
      certificate: 'VALOIRE Chronometer Certificate',
    },
  },

  // --- 3. STERLING SILVER & NOBLE PLATINUM CREATIONS ---
  {
    id: 'cr-slv-1',
    name: 'Celeste 925 Sterling Silver Sculptural Cuff',
    category: 'women',
    type: 'Silver Cuff',
    materialGroup: 'silver',
    material: '925 Sterling Silver · Heavy Rhodium Finish',
    price: 'PKR 145,000',
    priceNumber: 1450000,
    img: '/media/stone-3.jpg',
    karatOrPurity: '925 Fine Silver',
    craftTechnique: 'Hand-Hammered Architectural Silhouette',
    description: 'Solid 925 sterling silver cuff plated in anti-tarnish noble rhodium, featuring undulating organic contours.',
    specs: {
      metal: '925 Sterling Silver (Anti-Tarnish Rhodium)',
      stone: 'Accent Brilliant Gemstones',
      clarity: 'Flawless Mirror Finish',
      certificate: 'VALOIRE Silver Hallmark Assay',
    },
  },
  {
    id: 'cr-slv-2',
    name: 'Platinum 950 Imperial Signet Band',
    category: 'men',
    type: 'Platinum Ring',
    materialGroup: 'silver',
    material: '950 Noble Platinum · High Density',
    price: 'PKR 490,000',
    priceNumber: 490000,
    img: '/media/stone-2.jpg',
    karatOrPurity: '950 Pure Platinum',
    craftTechnique: 'Forged Platinum Cold-Working',
    description: 'Crafted from hypoallergenic 95% pure noble platinum. Enduring heft, naturally white luster that never fades with time.',
    specs: {
      metal: '950 Pure Platinum (95% Pure Pt)',
      stone: 'Hidden Inner Sapphire Marker',
      clarity: 'Dense Heavyweight Comfort Fit',
      certificate: 'Platinum Guild Hallmark Stamped',
    },
  },

  // --- 4. RARE SWAT EMERALDS & GEMSTONES ---
  {
    id: 'cr-emr-1',
    name: 'Kashmir Imperial Swat Emerald Pendant',
    category: 'women',
    type: 'Emerald Necklace',
    materialGroup: 'emerald',
    material: '18K Yellow Gold · 4.20 ct Swat Emerald · Diamonds',
    price: 'PKR 1,650,000',
    priceNumber: 1650000,
    img: '/media/stone-2.jpg',
    karatOrPurity: '18K Gold · 4.20 ct Emerald',
    craftTechnique: 'Octagonal Bezel & Halo Micro-Setting',
    description: 'An exceptional vivid green natural emerald sourced from the Swat Valley in Pakistan, encircled by a halo of brilliant diamonds.',
    specs: {
      stone: '4.20 ct Natural Swat Valley Emerald (Vivid Green)',
      metal: '18K Solid Yellow Gold',
      clarity: 'Minor Cedarwood Oil Only (Standard High Grade)',
      certificate: 'SSEF / GUBELIN Gemstone Report',
    },
  },
]

export default function CreationsPage() {
  return (
    <BlinkClientBoundary fallback={<div className="min-h-screen bg-[#090a10]" />}>
      <CreationsContent />
    </BlinkClientBoundary>
  )
}

function CreationsContent() {
  const [cart, setCart] = useState<Product[]>([])
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [materialFilter, setMaterialFilter] = useState<'all' | 'diamond' | 'gold' | 'silver' | 'emerald'>('all')
  const [addedId, setAddedId] = useState<string | null>(null)
  const [activeMakingTab, setActiveMakingTab] = useState<'gold' | 'diamond' | 'silver'>('gold')

  const materialTabs = [
    { id: 'all', label: 'All Masterpieces', count: CREATIONS.length, icon: Sparkles },
    { id: 'diamond', label: 'Natural Diamonds', count: CREATIONS.filter(c => c.materialGroup === 'diamond').length, icon: Gem },
    { id: 'gold', label: '18K & 22K Solid Gold', count: CREATIONS.filter(c => c.materialGroup === 'gold').length, icon: Award },
    { id: 'silver', label: 'Silver & Platinum', count: CREATIONS.filter(c => c.materialGroup === 'silver').length, icon: Layers },
    { id: 'emerald', label: 'Rare Swat Emeralds', count: CREATIONS.filter(c => c.materialGroup === 'emerald').length, icon: Flame },
  ]

  const filteredCreations = materialFilter === 'all'
    ? CREATIONS
    : CREATIONS.filter((item) => item.materialGroup === materialFilter)

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1800)
  }

  return (
    <main className="min-h-screen bg-[#08080a] text-foreground selection:bg-white selection:text-black">
      {/* Universal Top Section Navigation */}
      <Navbar cartCount={cart.length} onOpenBag={() => setCheckoutOpen(true)} />

      {/* Hero Banner for Masterpiece Creations (Shade: #0a0b12) */}
      <section className="relative border-b border-white/[0.08] px-4 py-16 sm:px-6 md:px-12 bg-gradient-to-b from-[#10111c] via-[#0b0c14] to-[#08080a]">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 text-xs text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-mono uppercase tracking-widest text-[10px]">VALOIRE Masterpiece Atelier</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal">
            Master Creations & Materials
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-base text-zinc-400 leading-relaxed">
            Every creation is individually forged using certified natural diamonds, pure 18K/22K solid gold, 925 sterling silver, and rare Swat emeralds in our Karachi & Lahore workshops.
          </p>

          {/* Material Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {materialTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = materialFilter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMaterialFilter(tab.id as any)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-lg shadow-white/10 scale-105'
                      : 'bg-white/[0.05] text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-black' : 'text-zinc-400'}`} />
                  <span>{tab.label}</span>
                  <span className={`rounded-full px-1.5 py-0.2 text-[9px] font-bold ${isActive ? 'bg-black/15 text-black' : 'bg-white/10 text-zinc-400'}`}>
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Creations Showcase Grid (Shade: #0b0c14) */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#0b0c14] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
            <span>Displaying {filteredCreations.length} Haute Joaillerie Pieces</span>
            <span>Hallmarked & Certified</span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCreations.map((creation) => (
              <article
                key={creation.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12131d] hover:border-white/25 transition-all duration-300 shadow-2xl"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <Image
                    src={creation.img}
                    alt={creation.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131d] via-transparent to-black/20" />
                  
                  {/* Category & Purity Badges */}
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-300 backdrop-blur-md border border-white/10">
                    {creation.type}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-amber-500/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-amber-300 backdrop-blur-md border border-amber-500/30">
                    {creation.karatOrPurity}
                  </span>
                </div>

                {/* Content info */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-amber-300/80">
                      <Sparkles className="h-3 w-3" />
                      <span>{creation.craftTechnique}</span>
                    </div>
                    <h3 className="font-serif text-xl text-white font-normal group-hover:text-amber-200 transition">
                      {creation.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {creation.description}
                    </p>
                  </div>

                  {/* Metallurgy & Specs Bar */}
                  <div className="rounded-xl border border-white/[0.06] bg-black/30 p-3 space-y-1.5 text-[11px] font-mono">
                    <div className="flex justify-between text-zinc-400">
                      <span>Metal:</span>
                      <span className="text-white font-medium">{creation.specs.metal}</span>
                    </div>
                    {creation.specs.stone && (
                      <div className="flex justify-between text-zinc-400">
                        <span>Gem:</span>
                        <span className="text-amber-200 font-medium">{creation.specs.stone}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-zinc-400">
                      <span>Assay:</span>
                      <span className="text-zinc-300">{creation.specs.certificate}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">Atelier Value</span>
                      <span className="font-mono text-base font-semibold text-white">{creation.price}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(creation)}
                        className={`flex items-center justify-center gap-2 rounded-xl py-2.5 font-mono text-xs uppercase tracking-wider transition cursor-pointer ${
                          addedId === creation.id
                            ? 'bg-emerald-500 text-white font-medium'
                            : 'bg-white text-black font-semibold hover:bg-white/90 active:scale-95'
                        }`}
                      >
                        {addedId === creation.id ? (
                          <>
                            <Check className="h-3.5 w-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-3.5 w-3.5" /> Add to Bag
                          </>
                        )}
                      </button>

                      <Link
                        href="/book"
                        className="flex items-center justify-center gap-1 rounded-xl border border-white/15 bg-white/[0.04] py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition text-center"
                      >
                        VIP View <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Material Craft & Making Breakdown (Shade: #08080c) */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#08080c] border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300/80">The Art of Metallurgy</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal">
              How We Create with Gold, Diamonds & Silver
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Discover the dedicated crafting discipline behind each precious material at VALOIRE Atelier.
            </p>
          </div>

          {/* Material Making Selector */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveMakingTab('gold')}
              className={`rounded-xl px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition ${
                activeMakingTab === 'gold'
                  ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40 font-semibold'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              👑 18K & 22K Solid Gold
            </button>
            <button
              type="button"
              onClick={() => setActiveMakingTab('diamond')}
              className={`rounded-xl px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition ${
                activeMakingTab === 'diamond'
                  ? 'bg-cyan-400/20 text-cyan-200 border border-cyan-400/40 font-semibold'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              💎 Natural Diamonds
            </button>
            <button
              type="button"
              onClick={() => setActiveMakingTab('silver')}
              className={`rounded-xl px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition ${
                activeMakingTab === 'silver'
                  ? 'bg-zinc-200/20 text-zinc-100 border border-zinc-200/40 font-semibold'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              ✨ Silver & Platinum
            </button>
          </div>

          {/* Active Making Tab Details */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#12131d] p-8 sm:p-12">
            {activeMakingTab === 'gold' && (
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300">Gold Metallurgy</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">18K (750) & 22K (916) Pure Gold Metallurgy</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    We melt pure 24K gold bullion with precious copper and silver alloy ratios in precision induction furnaces. This guarantees the signature rich yellow, warm rose, or brilliant white gold tone with exact karat density.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-300" /> Never hollow cast; every piece is heavy solid gold
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-300" /> Official government assay laboratory hallmark stamp
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-300" /> Hand-chased relief filigree and mirror rouge burnish
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Purity Standard:</span>
                    <span className="text-white font-semibold">18K (75.0%) / 22K (91.6%)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Furnace Temp:</span>
                    <span className="text-white font-semibold">1,064°C Induction Melt</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Assay Mark:</span>
                    <span className="text-amber-300 font-semibold">VALOIRE 750 / 916 Stamped</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Lifetime Warranty:</span>
                    <span className="text-emerald-400 font-semibold">Included on Metal Purity</span>
                  </div>
                </div>
              </div>
            )}

            {activeMakingTab === 'diamond' && (
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">Gemological Setting</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">Stereomicroscope Diamond Micro-Setting</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Under 20x stereomicroscopic magnification, our master gem-setters carve individual seats for every brilliant stone. Prongs are rounded into microscopic beads, ensuring maximum light entry and complete stone security.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" /> 100% natural, conflict-free certified diamonds
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" /> GIA & IGI laser inscription on girdle verified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" /> Color D–F (Colorless) & VVS Clarity tiers exclusively
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Grading Standard:</span>
                    <span className="text-white font-semibold">GIA & IGI 4Cs Certified</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Magnification:</span>
                    <span className="text-white font-semibold">20x Binocular Inspection</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Setting Style:</span>
                    <span className="text-cyan-300 font-semibold">Micro-Pavé & 6-Prong Crown</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Diamond Sourcing:</span>
                    <span className="text-emerald-400 font-semibold">Kimberley Process Compliant</span>
                  </div>
                </div>
              </div>
            )}

            {activeMakingTab === 'silver' && (
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-300">Noble Metallurgy</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">925 Sterling Silver & 950 Pure Platinum</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Our silver pieces are crafted with 92.5% pure sterling silver fortified with noble anti-tarnish rhodium plating. For our highest tier white metals, 950 pure platinum is cold-forged for lifetime weight and enduring luster.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-zinc-300" /> Multi-stage noble rhodium plating prevents oxidation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-zinc-300" /> Platinum 950 provides hypoallergenic luxury
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-zinc-300" /> Architectural hand-burnished mirror finish
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Silver Alloy:</span>
                    <span className="text-white font-semibold">925 Sterling (Rhodium Dipped)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Platinum Grade:</span>
                    <span className="text-white font-semibold">950 Pure Platinum (Hypoallergenic)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">Luster Finish:</span>
                    <span className="text-zinc-200 font-semibold">Diamond Rouge Mirror Polish</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Authenticity:</span>
                    <span className="text-emerald-400 font-semibold">925 / Pt950 Stamped</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Atelier Guarantee Section (Shade: #0a0b12) */}
      <section className="px-4 py-16 sm:px-6 md:px-12 bg-[#0a0b12]">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/[0.1] bg-[#141522] p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white">100% Certified Diamonds</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Every natural diamond is certified by GIA or IGI with laser inscribed serial numbers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white">18K / 22K Hallmarking</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Stamped solid gold with exact carat purity assay marks and lifetime metal guarantee.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-white">
                  <Gem className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white">Bespoke Custom Orders</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Collaborate directly with our master jewellers in Karachi & Lahore to commission custom heirlooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strictly containing phone number */}
      <Footer />

      {/* Shopping Bag Drawer */}
      {checkoutOpen && (
        <CheckoutDrawer
          cart={cart}
          onClose={() => setCheckoutOpen(false)}
          onRemove={(index) => setCart((items) => items.filter((_, i) => i !== index))}
          onClear={() => setCart([])}
        />
      )}
    </main>
  )
}

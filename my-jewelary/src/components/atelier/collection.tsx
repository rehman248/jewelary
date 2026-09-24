'use client'

import { motion } from 'framer-motion'
import { Eye, Plus, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Eyebrow } from './motion'

export type Product = {
  id: string
  name: string
  category: 'women' | 'men'
  type: string
  material: string
  price: string
  priceNumber: number
  img: string
  description: string
  specs: {
    stone?: string
    metal: string
    clarity?: string
    certificate: string
  }
}

export const PRODUCTS: Product[] = [
  // Women's Collection
  {
    id: 'w-1',
    name: 'Aurelia Solitaire Diamond Ring',
    category: 'women',
    type: 'Diamond Ring',
    material: '18K Rose Gold · 2.10 ct Natural Diamond',
    price: 'PKR 850,000',
    priceNumber: 850000,
    img: '/media/stone-1.jpg',
    description: 'An exquisite round brilliant diamond mounted on a hand-carved 18K rose gold band, crafted in Pakistan by Valoire Atelier.',
    specs: {
      stone: '2.10 Carat Round Brilliant Cut Diamond',
      metal: '18K Solid Rose Gold (750 Hallmark)',
      clarity: 'VVS1 · Color D (Pure Colorless)',
      certificate: 'GIA & Pakistan Gemological Certified',
    },
  },
  {
    id: 'w-2',
    name: 'Royal Swat Emerald Pendant',
    category: 'women',
    type: 'Pendant Necklace',
    material: '18K White Gold · 3.40 ct Emerald',
    price: 'PKR 1,150,000',
    priceNumber: 1150000,
    img: '/media/womens-necklace.jpg',
    description: 'Vibrant natural emerald from northern Pakistan haloed by sparkling pavé-set round diamonds on a solid white gold chain.',
    specs: {
      stone: '3.40 ct Natural Emerald & 0.85 ct Diamond Halo',
      metal: '18K Solid White Gold',
      clarity: 'AAA Grade Natural Gemstone',
      certificate: 'IGI Certified Report',
    },
  },
  {
    id: 'w-3',
    name: 'Eternity Diamond Tennis Bracelet',
    category: 'women',
    type: 'Diamond Bracelet',
    material: '950 Platinum · 5.50 ct Diamonds',
    price: 'PKR 1,450,000',
    priceNumber: 1450000,
    img: '/media/womens-bracelet.jpg',
    description: 'A seamless stream of bezel-set round brilliant diamonds handcrafted with four-prong platinum settings.',
    specs: {
      stone: '5.50 Total Carat Weight (52 Natural Diamonds)',
      metal: '950 Pure Platinum',
      clarity: 'F Color · VS1 Clarity',
      certificate: 'GIA Authenticity Certificate',
    },
  },
  {
    id: 'w-4',
    name: 'South Sea Pearl & Diamond Drops',
    category: 'women',
    type: 'Drop Earrings',
    material: '18K Yellow Gold · Natural Pearls',
    price: 'PKR 550,000',
    priceNumber: 550000,
    img: '/media/stone-2.jpg',
    description: 'Lustrous golden South Sea pearls suspended from delicate brilliant diamond-encrusted studs.',
    specs: {
      stone: '12mm Golden South Sea Pearls & 0.40 ct Diamonds',
      metal: '18K Solid Yellow Gold',
      clarity: 'Grade AAA Luster & Mirror Surface',
      certificate: 'Atelier Gemological Certificate',
    },
  },
  // Men's Collection
  {
    id: 'm-1',
    name: 'The Sovereign Chronograph',
    category: 'men',
    type: 'Luxury Timepiece',
    material: 'Platinum Case · Diamond Bezel',
    price: 'PKR 2,850,000',
    priceNumber: 2850000,
    img: '/media/mens-watch.jpg',
    description: 'Precision mechanical movement encased in brushed platinum with an iced baguette & round diamond bezel.',
    specs: {
      stone: '4.20 ct Hand-set Baguette & Round Diamonds',
      metal: 'Solid Platinum & Titanium Core',
      clarity: 'Automatic Swiss Movement · 72h Reserve',
      certificate: 'COSC & Master Atelier Certified',
    },
  },
  {
    id: 'm-2',
    name: 'Onyx Crest 22K Signet Ring',
    category: 'men',
    type: 'Signet Ring',
    material: '22K Solid Gold · Natural Onyx',
    price: 'PKR 650,000',
    priceNumber: 650000,
    img: '/media/mens-ring.jpg',
    description: 'Bold cushion-cut natural black onyx center stone surrounded by micro-pavé diamonds in heavy 22K Pakistani gold.',
    specs: {
      stone: 'Natural Black Onyx & 0.65 ct Round Diamonds',
      metal: '22K Heavy Solid Gold (18.4g)',
      clarity: 'Mirror-polished Onyx · VS Diamonds',
      certificate: 'Valoire Master Hallmark',
    },
  },
  {
    id: 'm-3',
    name: 'Lahore Royal Cuban Chain',
    category: 'men',
    type: 'Solid Gold Chain',
    material: '18K Solid White Gold · Heavy Link',
    price: 'PKR 920,000',
    priceNumber: 920000,
    img: '/media/stone-3.jpg',
    description: 'A substantial handcrafted curb chain with hand-beveled edges and secure custom double-safety clasp.',
    specs: {
      stone: 'High Polish Solid Metal (Optional Diamond Clasp)',
      metal: '18K Solid White Gold (6.5mm Width, 22")',
      clarity: 'Solid Link Construction (42g)',
      certificate: 'Official Gold Purity Assay Stamp',
    },
  },
  {
    id: 'm-4',
    name: 'Titanium & Diamond Cufflinks',
    category: 'men',
    type: 'Luxury Cufflinks',
    material: 'Brushed Titanium · Princess Diamonds',
    price: 'PKR 380,000',
    priceNumber: 380000,
    img: '/media/stone-4.jpg',
    description: 'Modern architectural cufflinks combining lightweight aerospace titanium with sparkling dual princess-cut diamonds.',
    specs: {
      stone: '0.80 ct Dual Princess-cut Diamonds',
      metal: 'Grade 5 Aerospace Titanium & 18K White Gold',
      clarity: 'E Color · VVS2 Clarity',
      certificate: 'GIA Laser Inscribed Diamond Report',
    },
  },
]

export function Collection({ onAdd }: { onAdd: (product: Product) => void }) {
  const [filter, setFilter] = useState<'all' | 'women' | 'men'>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter)

  const handleAddToCart = (product: Product) => {
    onAdd(product)
    toast.success(`${product.name} added to bag`, {
      description: `${product.price} · ${product.material}`,
    })
  }

  return (
    <section id="collection" className="relative bg-[#0e0f15] border-t border-white/[0.06] px-5 py-20 sm:py-28 md:px-10" aria-labelledby="collection-title">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <Eyebrow index="I">Signature Highlights</Eyebrow>
            <h2 id="collection-title" className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-foreground">
              Master Creations
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Handcrafted in Pakistan by Valoire Atelier. Featuring certified natural gemstones, 18K/22K solid gold, and official assay hallmarking.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:bg-white/90 transition shadow-lg self-start md:self-auto"
          >
            Full Catalog ({PRODUCTS.length}) →
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5 font-mono text-xs uppercase tracking-wider">
          {[
            { id: 'all', label: 'All Curated Pieces' },
            { id: 'women', label: "Women's Masterpieces" },
            { id: 'men', label: "Men's Masterpieces" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as 'all' | 'women' | 'men')}
              className={`cursor-pointer rounded-xl px-4 py-2.5 transition ${
                filter === tab.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'border border-white/10 bg-[#161722] text-muted-foreground hover:border-white/20 hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#14151e] transition-all duration-300 hover:border-white/25 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Category Pill */}
                <span className="absolute top-3 left-3 rounded-lg bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/90 backdrop-blur-md border border-white/10">
                  {product.category}'s {product.type}
                </span>

                {/* Quick View Button on Image */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/80 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-white hover:text-black backdrop-blur-md shadow cursor-pointer"
                  aria-label="Quick view full piece"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                <div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-lg font-medium tracking-tight text-foreground group-hover:text-white transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-mono text-sm font-semibold text-white">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {product.material}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-3 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 font-mono text-[10px] uppercase tracking-wider text-black font-semibold transition hover:bg-white/90 active:scale-[0.98] cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add to Bag
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition hover:border-white/30 hover:text-foreground cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All creations banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between rounded-2xl border border-white/[0.08] bg-[#14151e] p-6 sm:p-8 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-foreground">Explore the Complete Catalog</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Discover all {PRODUCTS.length} bridal sets, solitary rings, Swat emeralds, and timepieces.</p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-white/10 transition shrink-0"
          >
            Open Catalog ({PRODUCTS.length} items) →
          </Link>
        </div>
      </div>

      {/* Quick View & Full Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-border transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Full Uncropped Image View */}
              <div className="relative aspect-square w-full bg-black/40 flex items-center justify-center p-2">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>

              {/* Specs & Actions */}
              <div className="flex flex-col justify-between p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> {selectedProduct.category}'s Pakistani Haute Joaillerie
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-3xl text-foreground">{selectedProduct.name}</h3>
                  <p className="mt-1 font-mono text-xl font-semibold text-primary">{selectedProduct.price}</p>
                  
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {selectedProduct.description}
                  </p>

                  {/* Specifications list */}
                  <dl className="mt-5 space-y-2 border-y border-border/60 py-4 text-xs font-mono">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">Metal Purity:</dt>
                      <dd className="text-foreground text-right">{selectedProduct.specs.metal}</dd>
                    </div>
                    {selectedProduct.specs.stone && (
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground uppercase">Gemstone:</dt>
                        <dd className="text-foreground text-right">{selectedProduct.specs.stone}</dd>
                      </div>
                    )}
                    {selectedProduct.specs.clarity && (
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground uppercase">Quality Grade:</dt>
                        <dd className="text-foreground text-right">{selectedProduct.specs.clarity}</dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground uppercase">Certificate:</dt>
                      <dd className="text-primary text-right">{selectedProduct.specs.certificate}</dd>
                    </div>
                  </dl>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedProduct)
                      setSelectedProduct(null)
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded bg-primary py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground shadow hover:opacity-95 transition-opacity"
                  >
                    <Plus className="h-4 w-4" /> Add to Shopping Bag
                  </button>
                  <Link
                    href="/payment"
                    onClick={() => setSelectedProduct(null)}
                    className="block w-full text-center rounded border border-border py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors"
                  >
                    Proceed to Payment (PKR)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

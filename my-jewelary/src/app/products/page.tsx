'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  Eye, 
  Filter, 
  Plus, 
  Search, 
  ShoppingBag, 
  SlidersHorizontal, 
  Sparkles, 
  X,
  Check
} from 'lucide-react'
import { toast } from 'sonner'
import { PRODUCTS, type Product } from '@/components/atelier/collection'
import { CheckoutDrawer } from '@/components/atelier/CheckoutDrawer'
import { Footer } from '@/components/atelier/footer'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<Product[]>([])
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'women', label: "Women's Collection" },
    { id: 'men', label: "Men's Collection" },
    { id: 'ring', label: 'Rings & Signets' },
    { id: 'diamond', label: 'Natural Diamonds' },
    { id: 'emerald', label: 'Swat Emeralds' },
    { id: 'watch', label: 'Timepieces' },
  ]

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory === 'women' && item.category !== 'women') return false
      if (selectedCategory === 'men' && item.category !== 'men') return false
      if (selectedCategory === 'ring' && !item.type.toLowerCase().includes('ring')) return false
      if (selectedCategory === 'diamond' && !item.material.toLowerCase().includes('diamond') && !item.specs.stone?.toLowerCase().includes('diamond')) return false
      if (selectedCategory === 'emerald' && !item.name.toLowerCase().includes('emerald') && !item.material.toLowerCase().includes('emerald')) return false
      if (selectedCategory === 'watch' && !item.type.toLowerCase().includes('timepiece') && !item.type.toLowerCase().includes('watch')) return false

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const matchName = item.name.toLowerCase().includes(query)
        const matchMaterial = item.material.toLowerCase().includes(query)
        const matchType = item.type.toLowerCase().includes(query)
        const matchDesc = item.description.toLowerCase().includes(query)
        if (!matchName && !matchMaterial && !matchType && !matchDesc) return false
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNumber - b.priceNumber
      if (sortBy === 'price-desc') return b.priceNumber - a.priceNumber
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })
  }, [selectedCategory, searchQuery, sortBy])

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
    toast.success(`${product.name} added to your bag`, {
      description: `${product.price} · ${product.material}`,
    })
  }

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top Luxury Navigation */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center text-center">
            <span className="font-serif text-lg sm:text-xl tracking-[0.25em] font-medium text-foreground">
              ABDUL RAHMAN
            </span>
            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-muted-foreground">
              Haute Joaillerie · Pakistan
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/app"
              className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground sm:inline transition-colors"
            >
              Client Area
            </Link>
            <button
              type="button"
              onClick={() => setCheckoutOpen(true)}
              className="relative flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:border-primary transition-colors"
              aria-label={`Open shopping bag, ${cart.length} items`}
            >
              <ShoppingBag className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline">Bag</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/50 bg-gradient-to-b from-card/30 to-background px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  Catalog
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl tracking-[-0.03em] text-foreground">
                Jewelry & Timepieces
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Certified natural diamonds and hallmarked 18K/22K solid gold.
              </p>
            </div>

            {/* Search and Sort Controls */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search rings, emeralds, diamonds, watches..."
                  className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-primary transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Sort Filter Dropdown */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="h-11 rounded-xl border border-border bg-card px-3 font-mono text-xs text-foreground outline-none focus:border-primary"
                >
                  <option value="featured">Featured Masterpieces</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Alphabetical (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills (Horizontal scrolling on mobile) */}
            <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                      isActive
                        ? 'bg-primary text-primary-foreground font-semibold shadow-md'
                        : 'border border-border bg-card/60 text-muted-foreground hover:border-primary/60 hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-border/80 bg-card p-12 text-center space-y-4">
              <Sparkles className="mx-auto h-10 w-10 text-muted-foreground/40" />
              <h3 className="font-serif text-2xl">No creations match your query</h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                We couldn't find any jewelry piece matching "{searchQuery}". Try searching for diamonds, emeralds, 18K gold, or reset your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-primary-foreground"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>Showing {filteredProducts.length} Exclusive Creations</span>
                <span>Karachi · Lahore · Worldwide</span>
              </div>

              {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on wide screen */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-xl"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
                      <img
                        src={product.img}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      
                      {/* Category Tag */}
                      <span className="absolute top-3 left-3 rounded bg-background/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-foreground/90 backdrop-blur-md border border-border/50">
                        {product.category}'s {product.type}
                      </span>

                      {/* Quick View Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/85 text-foreground/80 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground backdrop-blur-md shadow"
                        aria-label={`Quick view ${product.name}`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                      <div>
                        <div className="flex flex-col gap-1">
                          <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <span className="font-mono text-sm font-semibold text-primary">
                            {product.price}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {product.material}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2 border-t border-border/50">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 font-mono text-[10px] uppercase tracking-wider text-primary-foreground font-medium transition hover:opacity-90 active:scale-[0.98]"
                        >
                          <Plus className="h-3.5 w-3.5" /> Add to Bag
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(product)}
                          className="rounded-lg border border-border px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition hover:border-primary hover:text-foreground"
                        >
                          Specs
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      {/* Floating Mobile Cart Bar when cart has items */}
      {cart.length > 0 && !checkoutOpen && (
        <div className="fixed bottom-4 inset-x-4 z-30 sm:hidden">
          <button
            type="button"
            onClick={() => setCheckoutOpen(true)}
            className="w-full flex items-center justify-between rounded-xl bg-primary px-5 py-3.5 font-mono text-xs uppercase tracking-wider text-primary-foreground shadow-2xl active:scale-[0.99]"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" /> View Bag ({cart.length} items)
            </span>
            <span className="font-bold">
              PKR {cart.reduce((sum, item) => sum + (item.priceNumber || 0), 0).toLocaleString('en-US')} →
            </span>
          </button>
        </div>
      )}

      {/* Quick View & Specifications Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-border transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Product Image View */}
              <div className="relative aspect-square w-full bg-black/40 flex items-center justify-center p-3">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>

              {/* Specs & Actions */}
              <div className="flex flex-col justify-between p-6 md:p-8 space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> {selectedProduct.category}'s Pakistani Haute Joaillerie
                  </span>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl text-foreground">{selectedProduct.name}</h3>
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
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground font-medium shadow hover:opacity-95 transition-opacity"
                  >
                    <Plus className="h-4 w-4" /> Add to Shopping Bag
                  </button>
                  <Link
                    href="/payment"
                    onClick={() => setSelectedProduct(null)}
                    className="block w-full text-center rounded-lg border border-border py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors"
                  >
                    Proceed to Payment (PKR)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer Modal */}
      {checkoutOpen && (
        <CheckoutDrawer
          cart={cart}
          onClose={() => setCheckoutOpen(false)}
          onRemove={(index) => setCart((items) => items.filter((_, i) => i !== index))}
          onClear={() => setCart([])}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

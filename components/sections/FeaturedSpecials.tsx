'use client'
import type React from 'react'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks'
import { featuredSpecials } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const BADGE_COLOR: Record<string, string> = {
  "Chef's Signature": 'bg-gold text-espresso',
  'Chef Recommended': 'bg-cream text-espresso',
  'Seasonal':         'bg-mocha text-cream border border-gold/30',
  'Award Winning':    'bg-[#2a1a0a] text-gold border border-gold/50',
}

export default function FeaturedSpecials() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id="specials"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-mocha section-padding overflow-hidden"
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="container-main relative">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className={cn(
          'flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 transition-all duration-800',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <div>
            <div className="section-label mb-5">Today's Showcase</div>
            <h2 className="font-display text-cream leading-tight"
              style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}>
              Featured <em className="text-gold">Specials</em>
            </h2>
          </div>
          <p className="text-sm text-tan max-w-md lg:text-right pb-1">
            Dishes our kitchen team is most proud of this season —
            thoughtfully composed, meticulously sourced.
          </p>
        </div>

        {/* ── Specials Grid ────────────────────────────────────────────────── */}
        {/* Layout: 2 large + 2 tall side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gold/10">

          {/* Card 1 — Large landscape */}
          <div className={cn(
            'lg:col-span-8 group relative overflow-hidden bg-espresso cursor-default',
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative h-[340px] lg:h-[420px]">
              <Image
                src={featuredSpecials[0].image.src}
                alt={featuredSpecials[0].image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className={cn('badge-gold text-[8px]', BADGE_COLOR[featuredSpecials[0].badge])}>
                  {featuredSpecials[0].badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-2">
                  {featuredSpecials[0].subtitle}
                </p>
                <h3 className="font-display text-3xl text-cream mb-3">{featuredSpecials[0].name}</h3>
                <p className="text-[13px] text-cream/70 leading-relaxed max-w-md line-clamp-2">
                  {featuredSpecials[0].description}
                </p>
                <div className="flex items-center gap-6 mt-5">
                  <span className="font-display text-2xl text-gold">{featuredSpecials[0].price}</span>
                  <button className="btn-outline-cream py-2.5 px-6 text-[9px] group/btn flex items-center gap-2">
                    Order Now
                    <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Right column stacked */}
          <div className="lg:col-span-4 flex flex-col gap-px">
            {featuredSpecials.slice(1, 3).map((special, i) => (
              <div
                key={special.name}
                className={cn(
                  'group relative flex-1 overflow-hidden bg-espresso cursor-default min-h-[200px] lg:min-h-0',
                  'transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                )}
                style={{ transitionDelay: `${(i + 1) * 150 + 100}ms` }}
              >
                <Image
                  src={special.image.src}
                  alt={special.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-108"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-card-overlay" />

                {/* Badge */}
                <span className={cn(
                  'absolute top-4 right-4 text-[7px] font-semibold tracking-widest uppercase px-2.5 py-1',
                  BADGE_COLOR[special.badge] ?? 'bg-gold text-espresso'
                )}>
                  {special.badge}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[8px] tracking-[0.3em] uppercase text-gold mb-1">{special.subtitle}</p>
                  <h3 className="font-display text-xl text-cream mb-1">{special.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-display text-lg text-gold">{special.price}</span>
                    <button className="text-[9px] text-cream/60 hover:text-gold transition-colors tracking-widest uppercase">
                      Order →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Card 4 — Full-width bottom */}
        <div
          className={cn(
            'relative group overflow-hidden bg-espresso cursor-default mt-px',
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="relative h-[260px]">
            <Image
              src={featuredSpecials[3].image.src}
              alt={featuredSpecials[3].image.alt}
              fill
              className="object-cover object-top transition-transform duration-700 ease-luxury group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/40 to-espresso/20" />

            <div className="absolute inset-0 flex items-center">
              <div className="px-10 lg:px-16 max-w-2xl">
                <span className={cn(
                  'inline-block mb-3 text-[8px] font-semibold tracking-widest uppercase px-3 py-1.5',
                  BADGE_COLOR[featuredSpecials[3].badge] ?? 'bg-gold text-espresso'
                )}>
                  {featuredSpecials[3].badge}
                </span>
                <h3 className="font-display text-3xl lg:text-4xl text-cream mb-2">{featuredSpecials[3].name}</h3>
                <p className="text-[13px] text-cream/65 leading-relaxed max-w-md mb-5">
                  {featuredSpecials[3].description}
                </p>
                <div className="flex items-center gap-6">
                  <span className="font-display text-2xl text-gold">{featuredSpecials[3].price}</span>
                  <button className="btn-gold text-[9px] py-3">
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

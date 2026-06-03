'use client'
import type React from 'react'

import Image from 'next/image'
import { useParallax, useScrollReveal } from '@/hooks'
import { chefSpecialImages } from '@/lib/images'
import { cn } from '@/lib/utils'
import { ArrowRight, Star } from 'lucide-react'

const EXPERIENCE_ITEMS = [
  {
    number: '01',
    title:  'Seasonal Sourcing',
    text:   'Chef Arjun personally visits partner farms each quarter, selecting produce at peak flavour. Our menu changes with the harvest.',
  },
  {
    number: '02',
    title:  'Tableside Theatre',
    text:   'Signature dishes finished at your table — pasta shaved with fresh truffle, bisque presented under a puff pastry dome.',
  },
  {
    number: '03',
    title:  'The Pairing Programme',
    text:   'Our sommelier curates natural wine, craft spirits, and single-origin coffee pairings for every dish on the tasting menu.',
  },
]

export default function ChefSpecial() {
  const { ref: parallaxRef, offset } = useParallax(0.25)
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id="chef-special"
      className="relative overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      {/* ── Parallax Background ────────────────────────────────────────── */}
      <div ref={parallaxRef as React.RefObject<HTMLDivElement>} className="absolute inset-0 z-0">
        <div
          style={{ transform: `translateY(${-offset * 0.4}px)`, willChange: 'transform', height: '130%', top: '-15%' }}
          className="absolute inset-x-0"
        >
          <Image
            src={chefSpecialImages[0].src}
            alt={chefSpecialImages[0].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/70 to-espresso/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30" />
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 container-main section-padding"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[600px]">

          {/* Left: Text */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className={cn(
              'transition-all duration-900',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            )}>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
                <span className="text-[10px] text-tan ml-2 tracking-widest uppercase">
                  Michelin Recommended
                </span>
              </div>

              <div className="section-label justify-start mb-5">
                The Chef's Experience
              </div>

              <h2 className="font-display text-cream leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}>
                A Dining Journey
                <em className="block text-gold mt-1">Unlike Any Other</em>
              </h2>

              <p className="text-sm text-cream/70 leading-relaxed mb-8 max-w-md">
                Our six-course tasting menu is a conversation between Chef Arjun's
                Indian roots and his classical French training. Each plate is a
                chapter; each pairing, a turn of the page. Presented only at our
                chef's table — eight seats, Wednesday through Saturday evenings.
              </p>

              {/* Price block */}
              <div className="glass inline-flex items-center gap-6 px-6 py-4 mb-8">
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1">Per Person</p>
                  <p className="font-display text-3xl text-cream">₹4,800</p>
                </div>
                <div className="w-px h-10 bg-gold/20" />
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1">With Pairings</p>
                  <p className="font-display text-3xl text-cream">₹7,200</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  className="btn-gold"
                  onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Reserve the Experience</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Feature list + inset image */}
          <div className="lg:col-span-6 xl:col-span-7 lg:pl-8">
            <div className="space-y-0">
              {EXPERIENCE_ITEMS.map((item, i) => (
                <div
                  key={item.number}
                  className={cn(
                    'group flex gap-6 py-7 border-b border-cream/8',
                    'transition-all duration-700',
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  )}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="shrink-0">
                    <span className="font-display text-4xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500 leading-none">
                      {item.number}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-semibold text-cream mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-[13px] text-tan/80 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inset second image */}
            <div
              className={cn(
                'relative mt-8 h-56 overflow-hidden transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: '650ms' }}
            >
              <Image
                src={chefSpecialImages[1].src}
                alt={chefSpecialImages[1].alt}
                fill
                className="object-cover img-zoom-container"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 to-transparent" />

              {/* Label overlay */}
              <div className="absolute bottom-4 left-4 glass px-4 py-3">
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold">Seasonal Menu</p>
                <p className="font-display text-lg text-cream mt-0.5">Winter 2024 · Now Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

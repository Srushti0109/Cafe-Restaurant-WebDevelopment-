'use client'
import type React from 'react'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks'
import { menuCategories } from '@/lib/data'
import { type MenuCategory, type MenuItem } from '@/types'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

// ─── Badge colors ─────────────────────────────────────────────────────────────
const BADGE_STYLE: Record<string, string> = {
  'Bestseller':      'bg-gold text-espresso',
  "Chef's Pick":     'bg-cream text-espresso',
  'New':             'bg-mocha text-gold border border-gold/50',
  'Seasonal':        'bg-roast text-cream-dark',
  'Vegan':           'bg-[#1a2e10] text-[#7ab870] border border-[#7ab870]/40',
}

function MenuCard({ item, index, visible }: { item: MenuItem; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={cn(
        'group relative overflow-hidden cursor-default',
        'border border-gold/12 hover:border-gold/35',
        'transition-all duration-500 ease-luxury bg-coffee',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          className={cn(
            'object-cover transition-transform duration-700 ease-luxury',
            hovered ? 'scale-110' : 'scale-100'
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Card overlay on hover */}
        <div className={cn(
          'absolute inset-0 transition-opacity duration-500',
          hovered ? 'opacity-100' : 'opacity-0'
        )}
          style={{ background: 'linear-gradient(to top, rgba(13,10,8,0.9) 0%, rgba(13,10,8,0.3) 100%)' }}
        />

        {/* Badge */}
        {item.badge && (
          <span className={cn(
            'absolute top-3 left-3 text-[8px] font-semibold tracking-widest uppercase px-3 py-1.5',
            BADGE_STYLE[item.badge] ?? 'bg-gold text-espresso'
          )}>
            {item.badge}
          </span>
        )}

        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex gap-1 flex-wrap">
          {item.tags.slice(0, 2).map(tag => (
            <span key={tag} className="badge-outline text-[7px] py-0.5 px-2">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-[17px] text-cream leading-tight">{item.name}</h3>
          <span className="font-display text-lg text-gold shrink-0 font-semibold">{item.price}</span>
        </div>

        <p className="text-[12px] text-tan leading-relaxed line-clamp-2">{item.description}</p>

        {/* Add to order — slides in on hover */}
        <div className={cn(
          'mt-4 flex items-center gap-2 transition-all duration-400',
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}>
          <button className="btn-outline-gold py-2 px-4 text-[9px] flex items-center gap-1.5 group/btn">
            <Plus size={11} className="group-hover/btn:rotate-90 transition-transform duration-300" />
            Add to Order
          </button>
          <button className="text-[10px] text-tan hover:text-cream transition-colors tracking-widest uppercase">
            Details
          </button>
        </div>
      </div>

      {/* Bottom gold accent on hover */}
      <div className={cn(
        'absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent',
        'transition-opacity duration-500',
        hovered ? 'opacity-100' : 'opacity-0'
      )} />
    </div>
  )
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const { ref, isVisible } = useScrollReveal(0.1)

  const activeCategory = menuCategories.find(c => c.id === activeId)!

  return (
    <section
      id="menu"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-espresso section-padding"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: `radial-gradient(rgba(196,152,58,0.15) 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
      />

      <div className="container-main relative">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className={cn(
          'text-center mb-14 transition-all duration-800',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <div className="section-label justify-center mb-5">
            Curated Selection
          </div>
          <h2 className="font-display text-cream leading-tight mb-4"
            style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}>
            Our Signature <em className="text-gold">Menu</em>
          </h2>
          <p className="text-sm text-tan max-w-lg mx-auto">
            Every dish and cup sourced with intention, prepared with precision,
            and served with genuine warmth.
          </p>
        </div>

        {/* ── Category Filter ──────────────────────────────────────────────── */}
        <div className={cn(
          'flex flex-wrap justify-center gap-px mb-12 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
          style={{ transitionDelay: '200ms' }}
        >
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={cn(
                'relative px-7 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase',
                'font-sans transition-all duration-300 border',
                activeId === cat.id
                  ? 'bg-gold text-espresso border-gold'
                  : 'bg-transparent text-tan border-gold/20 hover:text-cream hover:border-gold/50'
              )}
            >
              <span className="mr-2 opacity-60">{cat.icon}</span>
              {cat.label}

              {/* Active indicator */}
              {activeId === cat.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-2 h-2 border-l border-b border-gold rotate-[-45deg] bg-espresso" />
              )}
            </button>
          ))}
        </div>

        {/* ── Category heading ────────────────────────────────────────────── */}
        <div className="flex items-center gap-6 mb-8">
          <div>
            <h3 className="font-display text-2xl text-cream">{activeCategory.label}</h3>
            <p className="text-[10px] text-tan tracking-widest uppercase mt-0.5">
              {activeCategory.items.length} items available
            </p>
          </div>
          <div className="flex-1 gold-divider" />
        </div>

        {/* ── Menu Grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/8">
          {activeCategory.items.map((item, i) => (
            <div key={item.id} className="bg-espresso">
              <MenuCard item={item} index={i} visible={isVisible} />
            </div>
          ))}
        </div>

        {/* ── Footer CTA ──────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-12 pt-10 border-t border-gold/12">
          <p className="text-sm text-tan">
            Dietary requirements? Our team is happy to assist. Ask your server or call ahead.
          </p>
          <div className="flex gap-4">
            <button className="btn-outline-gold">Download Full Menu PDF</button>
            <button
              className="btn-gold"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Reserve Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

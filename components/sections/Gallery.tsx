'use client'
import type React from 'react'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks'
import { galleryImages } from '@/lib/images'
import { cn } from '@/lib/utils'

// Aspect ratio to height mapping for masonry effect
const HEIGHT_MAP = { tall: 'row-span-2', wide: 'row-span-1', square: 'row-span-1' }

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal(0.08)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightbox(index), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox(i => i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  const next = useCallback(() => {
    setLightbox(i => i === null ? null : (i + 1) % galleryImages.length)
  }, [])

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-espresso section-padding"
    >
      <div className="container-main">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className={cn(
          'text-center mb-14 transition-all duration-800',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <div className="section-label justify-center mb-5">Visual Journey</div>
          <h2 className="font-display text-cream leading-tight"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}>
            The <em className="text-gold">Gallery</em>
          </h2>
          <p className="text-sm text-tan mt-4 max-w-md mx-auto">
            A glimpse into our world — captured by photographers who
            love food as much as we do.
          </p>
        </div>

        {/* ── Masonry Grid ────────────────────────────────────────────────── */}
        {/*
          CSS Grid with auto-rows for masonry effect.
          Tall images span 2 rows, wide and square span 1.
        */}
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gridAutoRows: '220px',
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className={cn(
                'group relative overflow-hidden cursor-pointer',
                'border border-transparent hover:border-gold/30 transition-all duration-500',
                img.aspectRatio === 'tall' ? 'row-span-2' : 'row-span-1',
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
              role="button"
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className={cn(
                'absolute inset-0 bg-espresso/60',
                'flex items-center justify-center',
                'opacity-0 group-hover:opacity-100 transition-opacity duration-400'
              )}>
                <div className="text-center">
                  <ZoomIn size={24} className="text-gold mx-auto mb-2" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-cream">View</p>
                </div>
              </div>

              {/* Caption */}
              <div className={cn(
                'absolute bottom-0 left-0 right-0 p-4',
                'bg-gradient-to-t from-espresso/80 to-transparent',
                'translate-y-full group-hover:translate-y-0 transition-transform duration-400'
              )}>
                <p className="text-[11px] text-cream/80 tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── View More ───────────────────────────────────────────────────── */}
        <div className="text-center mt-10">
          <button className="btn-outline-gold">
            View Full Gallery on Instagram
          </button>
        </div>
      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-espresso/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative" style={{ height: 'min(85vh, 700px)' }}>
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5 glass">
              <p className="text-sm text-cream/80">{galleryImages[lightbox].alt}</p>
              <p className="text-[10px] text-tan mt-1 tracking-widest uppercase">
                {lightbox + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 glass flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}

'use client'
import type React from 'react'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks'
import { testimonials } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const { ref, isVisible } = useScrollReveal(0.1)

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 400)
  }, [animating])

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length, 'left')
  const next = () => goTo((active + 1) % testimonials.length, 'right')

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => goTo((active + 1) % testimonials.length, 'right'), 7000)
    return () => clearInterval(timer)
  }, [active, goTo])

  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-coffee section-padding overflow-hidden"
    >
      {/* Decorative giant quote */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Quote
          size={320}
          className="text-gold/[0.04] rotate-180"
          strokeWidth={0.5}
        />
      </div>

      <div className="container-main relative">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className={cn(
          'text-center mb-16 transition-all duration-800',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <div className="section-label justify-center mb-5">Guest Experiences</div>
          <h2 className="font-display text-cream leading-tight"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}>
            What Our Guests <em className="text-gold">Say</em>
          </h2>
        </div>

        {/* ── Testimonial Carousel ─────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto">

          {/* Main testimonial card */}
          <div
            className={cn(
              'glass border border-gold/12 p-10 lg:p-14 relative transition-all duration-400',
              animating
                ? direction === 'right'
                  ? 'opacity-0 translate-x-8'
                  : 'opacity-0 -translate-x-8'
                : 'opacity-100 translate-x-0'
            )}
          >
            {/* Quote mark */}
            <Quote
              size={36}
              className="text-gold/30 mb-6"
              strokeWidth={1}
            />

            {/* Review text */}
            <blockquote
              className="font-display text-cream/90 italic leading-relaxed mb-10"
              style={{ fontSize: 'clamp(17px, 2vw, 22px)' }}
            >
              "{t.text}"
            </blockquote>

            {/* Author row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                  <Image
                    src={t.avatar.src}
                    alt={t.avatar.alt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-[11px] text-tan mt-0.5">{t.role}</p>
                  <div className="mt-1">
                    <StarRating count={t.stars} />
                  </div>
                </div>
              </div>

              {/* Source badge */}
              <div className="badge-outline text-[8px]">
                {t.source}
              </div>
            </div>

            {/* Gold accent line */}
            <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>

          {/* ── Controls ──────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-8">

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? 'right' : 'left')}
                  className={cn(
                    'rounded-full transition-all duration-400',
                    i === active
                      ? 'w-8 h-2 bg-gold'
                      : 'w-2 h-2 bg-gold/25 hover:bg-gold/50'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 border border-gold/25 flex items-center justify-center text-tan hover:text-gold hover:border-gold/60 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-gold/25 flex items-center justify-center text-tan hover:text-gold hover:border-gold/60 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mini testimonial previews ─────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12 pt-10 border-t border-gold/10">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? 'right' : 'left')}
              className={cn(
                'text-left p-4 border transition-all duration-300',
                i === active
                  ? 'border-gold/40 bg-gold/5'
                  : 'border-gold/10 hover:border-gold/25 hover:bg-gold/3'
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar.src}
                    alt={t.avatar.alt}
                    fill
                    className="object-cover"
                    sizes="28px"
                  />
                </div>
                <p className="text-[11px] font-medium text-cream truncate">{t.name.split(' ')[0]}</p>
              </div>
              <p className="text-[10px] text-tan leading-relaxed line-clamp-2">{t.text.slice(0, 80)}…</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

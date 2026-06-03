'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { heroImages } from '@/lib/images'
import { cn } from '@/lib/utils'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const STATS = [
  { value: 10,  suffix: '+',  label: 'Years of Excellence' },
  { value: 50,  suffix: 'K+', label: 'Happy Guests' },
  { value: 100, suffix: '+',  label: 'Menu Creations' },
  { value: 12,  suffix: '',   label: 'Industry Awards' },
]

export default function Hero() {
  const [activeSlide, setActiveSlide]   = useState(0)
  const [prevSlide, setPrevSlide]       = useState<number | null>(null)
  const [isTransitioning, setTransitioning] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [loaded, setLoaded]             = useState(false)

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Stats trigger after entrance
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setPrevSlide(activeSlide)
    setTransitioning(true)
    setActiveSlide(index)
    setTimeout(() => {
      setPrevSlide(null)
      setTransitioning(false)
    }, 1000)
  }, [activeSlide, isTransitioning])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((activeSlide + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeSlide, goToSlide])

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      aria-label="Welcome to Velvet Brew"
    >
      {/* ── Background Slides ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">

        {/* Previous slide (fading out) */}
        {prevSlide !== null && (
          <div className="absolute inset-0 z-10">
            <Image
              src={heroImages[prevSlide].src}
              alt={heroImages[prevSlide].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 1s ease' }}
            />
          </div>
        )}

        {/* Active slide */}
        <div className="absolute inset-0 z-20">
          <Image
            src={heroImages[activeSlide].src}
            alt={heroImages[activeSlide].alt}
            fill
            sizes="100vw"
            className={cn(
              'object-cover transition-all duration-[1200ms] ease-luxury',
              isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            )}
            priority
          />
        </div>

        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 z-30 bg-hero-overlay" />
        <div className="absolute inset-0 z-30"
          style={{ background: 'linear-gradient(to right, rgba(13,10,8,0.75) 0%, rgba(13,10,8,0.2) 55%, rgba(13,10,8,0.5) 100%)' }}
        />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-30"
          style={{ background: 'linear-gradient(to top, rgba(13,10,8,1) 0%, transparent 100%)' }}
        />
      </div>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <div className="relative z-40 container-main flex flex-col justify-center min-h-screen py-32 pt-40">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Label */}
          <div
            className={cn(
              'flex items-center gap-4 mb-8 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-8 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-medium">
              Est. 2014 · Bandra West, Mumbai
            </span>
          </div>

          {/* Headline */}
          <h1
            className={cn(
              'font-display transition-all duration-900',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: '400ms', transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)' }}
          >
            <span className="block text-cream leading-[1.05]"
              style={{ fontSize: 'clamp(52px, 8vw, 104px)' }}>
              Crafted With
            </span>
            <span className="block text-gradient-gold leading-[1.05]"
              style={{ fontSize: 'clamp(52px, 8vw, 104px)' }}>
              Passion,
            </span>
            <span className="block text-cream/85 italic font-light leading-[1.05]"
              style={{ fontSize: 'clamp(52px, 8vw, 104px)' }}>
              Brewed to Perfection
            </span>
          </h1>

          {/* Subline */}
          <p
            className={cn(
              'mt-8 text-[15px] text-tan leading-relaxed max-w-lg transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '700ms' }}
          >
            Where single-origin beans from Coorg meet Michelin-recognised
            cuisine. Award-winning. Unforgettable.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              'flex flex-wrap gap-4 mt-10 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '900ms' }}
          >
            <button
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold"
            >
              <span>Explore Menu</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={openReservation}
              className="btn-outline-cream"
            >
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Award badge */}
          <div
            className={cn(
              'mt-10 inline-flex items-center gap-3 glass px-5 py-3 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '1100ms' }}
          >
            <span className="text-gold text-lg">⭐</span>
            <span className="text-[10px] tracking-widest uppercase text-cream/70">
              Michelin Guide Recommended · Best Café Mumbai 2024
            </span>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <div className="relative z-40 mt-auto">
        <div className="container-main">
          <div
            className={cn(
              'grid grid-cols-2 lg:grid-cols-4 border-t border-gold/15 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '1300ms' }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  'py-8 px-4 lg:px-10 text-center lg:text-left',
                  i < 3 && 'lg:border-r border-gold/12',
                  i % 2 === 0 && 'border-r border-gold/12 lg:border-r-0',
                  i >= 2 && 'border-t border-gold/12 lg:border-t-0'
                )}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  animate={statsVisible}
                  className="font-display text-4xl lg:text-5xl text-gradient-gold"
                />
                <p className="text-[10px] tracking-[0.2em] uppercase text-tan mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide Controls ────────────────────────────────────────────────── */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'transition-all duration-500 rounded-full block',
              activeSlide === i
                ? 'w-1 h-8 bg-gold'
                : 'w-1 h-3 bg-cream/30 hover:bg-cream/60'
            )}
          />
        ))}
      </div>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 z-50 h-0.5 bg-gold/20 w-full">
        <div
          key={activeSlide}
          className="h-full bg-gold"
          style={{
            animation: 'lineGrow 6s linear forwards',
          }}
        />
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────────────── */}
      <button
        onClick={scrollDown}
        aria-label="Scroll to About section"
        className={cn(
          'absolute left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-all duration-700',
          'hover:text-gold text-cream/50 group',
          loaded ? 'opacity-100' : 'opacity-0',
          'bottom-24 lg:bottom-10'
        )}
        style={{ transitionDelay: '1500ms' }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">Discover</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      {/* ── Floating Reservation Button (mobile) ──────────────────────────── */}
      <button
        onClick={openReservation}
        className={cn(
          'fixed bottom-6 right-6 z-50 btn-gold shadow-gold-lg',
          'flex md:hidden items-center gap-2 text-[10px]'
        )}
      >
        <span>Book Table</span>
        <ArrowRight size={12} />
      </button>
    </section>
  )
}

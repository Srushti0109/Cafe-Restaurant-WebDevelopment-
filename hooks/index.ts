'use client'

/**
 * VELVET BREW — Custom React Hooks
 */

import { useEffect, useRef, useState, useCallback } from 'react'

// ─── useScrollReveal ──────────────────────────────────────────────────────────
/** Returns a ref and isVisible flag. Once element enters viewport, isVisible = true. */
export function useScrollReveal(threshold = 0.12) {
  const ref        = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// ─── useParallax ──────────────────────────────────────────────────────────────
/** Tracks scroll offset for parallax calculations. */
export function useParallax(speed = 0.3) {
  const ref            = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY      = window.scrollY
      const rect         = ref.current.getBoundingClientRect()
      const elementTop   = scrollY + rect.top
      const relativeScroll = scrollY - elementTop + window.innerHeight
      setOffset(relativeScroll * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

// ─── useNavScroll ─────────────────────────────────────────────────────────────
/** Tracks scroll distance (for nav blur) and active section. */
export function useNavScroll() {
  const [scrolled,       setScrolled]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  const SECTIONS = [
    'home', 'about', 'menu', 'specials', 'chef-special',
    'gallery', 'testimonials', 'reservation', 'contact',
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      const scrollPos = window.scrollY + 140
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { scrolled, activeSection }
}

// ─── useImageLoaded ───────────────────────────────────────────────────────────
/** Tracks whether a native <img> element has finished loading. */
export function useImageLoaded() {
  const imgRef            = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true)
  }, [])

  return {
    imgRef,
    loaded,
    onLoad: () => setLoaded(true),
  }
}

// ─── useMediaQuery ────────────────────────────────────────────────────────────
/** Returns true when the media query matches. Safe for SSR (defaults false). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql     = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

// ─── useLockBodyScroll ────────────────────────────────────────────────────────
/** Prevents body scroll when `locked` is true (e.g. mobile drawer open). */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (locked) {
      const scrollY = window.scrollY
      document.body.style.position  = 'fixed'
      document.body.style.top       = `-${scrollY}px`
      document.body.style.width     = '100%'
      document.body.style.overflowY = 'scroll'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position  = ''
      document.body.style.top       = ''
      document.body.style.width     = ''
      document.body.style.overflowY = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [locked])
}

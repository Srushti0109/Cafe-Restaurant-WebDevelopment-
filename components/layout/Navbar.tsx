'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useNavScroll } from '@/hooks'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'menu',         label: 'Menu' },
  { id: 'specials',     label: 'Specials' },
  { id: 'gallery',      label: 'Gallery' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact',      label: 'Contact' },
]

export default function Navbar() {
  const { scrolled, activeSection } = useNavScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMobileOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass border-b border-gold/10 py-4'
            : 'bg-transparent py-6'
        )}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="container-main h-full flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex flex-col gap-0.5 group"
            aria-label="Velvet Brew — go to top"
          >
            <span className="font-display text-[26px] tracking-widest text-cream leading-none group-hover:text-gold-light transition-colors duration-300">
              VELVET<span className="text-gold"> BREW</span>
            </span>
            <span className="text-[8px] tracking-[0.5em] text-tan uppercase font-sans">
              Café &amp; Restaurant · Est.&nbsp;2014
            </span>
          </button>

          {/* ── Desktop Navigation ───────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn('nav-link', activeSection === link.id && 'active')}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── CTA + Hamburger ──────────────────────────────────────────── */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('reservation')}
              className="btn-gold hidden md:inline-flex"
              aria-label="Reserve a table"
            >
              <span>Reserve a Table</span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-cream hover:text-gold transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X size={22} />
                : <Menu size={22} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────────────────────── */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-espresso/80 backdrop-blur-sm transition-opacity duration-500',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-[300px] bg-coffee border-l border-gold/15',
            'flex flex-col transition-transform duration-500 ease-expo-out',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between p-6 border-b border-gold/10">
            <span className="font-display text-xl text-cream tracking-widest">
              VELVET<span className="text-gold"> BREW</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-tan hover:text-cream transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col flex-1 p-6 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  'flex items-center justify-between py-4 px-2',
                  'border-b border-cream/5 text-left',
                  'text-sm font-sans font-medium tracking-widest uppercase',
                  'transition-all duration-300 group',
                  activeSection === link.id ? 'text-gold' : 'text-tan hover:text-cream'
                )}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span>{link.label}</span>
                <ChevronRight
                  size={14}
                  className={cn(
                    'transition-transform duration-300',
                    activeSection === link.id ? 'text-gold translate-x-1' : 'group-hover:translate-x-1 opacity-40'
                  )}
                />
              </button>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="p-6 border-t border-gold/10">
            <button
              onClick={() => scrollTo('reservation')}
              className="btn-gold w-full justify-center"
            >
              <span>Reserve a Table</span>
            </button>
            <p className="text-center text-[10px] text-tan tracking-widest mt-4 uppercase">
              +91 22 6745 8900
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

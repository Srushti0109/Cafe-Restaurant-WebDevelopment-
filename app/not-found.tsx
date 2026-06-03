/**
 * app/not-found.tsx
 * Next.js App Router 404 page.
 */

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-espresso flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/8 pointer-events-none" />

      <div className="relative text-center max-w-xl z-10">

        {/* Logo */}
        <div className="mb-14">
          <Link href="/" className="inline-block">
            <span
              className="font-display text-2xl tracking-widest text-cream"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              VELVET<span style={{ color: '#C4983A' }}> BREW</span>
            </span>
          </Link>
        </div>

        {/* 404 display */}
        <h1
          className="font-display leading-none mb-0 select-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(100px, 20vw, 180px)',
            background: 'linear-gradient(135deg, rgba(196,152,58,0.15), rgba(196,152,58,0.05))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          aria-label="404 - Page not found"
        >
          404
        </h1>

        {/* Gold rule */}
        <div
          className="mx-auto my-6"
          style={{
            width: 60,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #C4983A, transparent)',
          }}
        />

        <h2
          className="font-display text-2xl text-cream mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Table Not Found
        </h2>

        <p
          className="text-sm leading-relaxed mb-10 max-w-md mx-auto"
          style={{ color: '#A89070', fontFamily: "'DM Sans', sans-serif" }}
        >
          The page you're looking for seems to have left the menu.
          Let us guide you back to the dining room.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #C4983A, #8B6914)',
              color: '#0D0A08',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '17px 36px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Return Home
            <ArrowRight size={13} />
          </Link>

          <Link
            href="/#reservation"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              border: '1px solid rgba(196,152,58,0.35)',
              color: '#C4983A',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
          >
            Make a Reservation
          </Link>
        </div>

        {/* Nav suggestions */}
        <div
          className="mt-14 pt-8 flex flex-wrap gap-x-8 gap-y-3 justify-center"
          style={{ borderTop: '1px solid rgba(196,152,58,0.1)' }}
        >
          {[
            { label: 'Menu',        href: '/#menu'        },
            { label: 'About',       href: '/#about'       },
            { label: 'Gallery',     href: '/#gallery'     },
            { label: 'Contact',     href: '/#contact'     },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors duration-300 hover:text-[#C4983A]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#6B5040',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

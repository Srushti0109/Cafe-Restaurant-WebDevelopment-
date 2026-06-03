'use client'

/**
 * app/error.tsx
 * Next.js App Router error boundary.
 * Catches runtime errors in the root layout tree.
 */

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, ArrowLeft } from 'lucide-react'

interface ErrorProps {
  error:  Error & { digest?: string }
  reset:  () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to an error monitoring service in production
    console.error('[Velvet Brew Error]', error)
  }, [error])

  return (
    <div
      className="min-h-screen bg-espresso flex items-center justify-center px-6"
      role="alert"
      aria-live="assertive"
    >
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/6 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gold/10 pointer-events-none" />

      <div className="relative text-center max-w-lg">
        {/* Wordmark */}
        <p
          className="text-[9px] tracking-[0.5em] uppercase mb-10"
          style={{ color: '#6B5040', fontFamily: "'DM Sans', sans-serif" }}
        >
          Velvet Brew · Error
        </p>

        {/* Error code */}
        <h1
          className="font-display text-8xl text-gold/20 leading-none mb-4 select-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
          aria-hidden="true"
        >
          !
        </h1>

        <h2
          className="font-display text-3xl text-cream mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Something went wrong
        </h2>

        <p
          className="text-sm leading-relaxed mb-10"
          style={{ color: '#A89070', fontFamily: "'DM Sans', sans-serif" }}
        >
          We encountered an unexpected issue. Our team has been notified.
          Please try refreshing, or return to the homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-gold inline-flex items-center gap-2 justify-center"
            style={{
              background: 'linear-gradient(135deg, #C4983A, #8B6914)',
              color: '#0D0A08',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '17px 32px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={13} />
            Try Again
          </button>

          <Link
            href="/"
            className="btn-outline-cream inline-flex items-center gap-2 justify-center"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '16px 32px',
              border: '1px solid rgba(245,237,216,0.3)',
              color: '#F5EDD8',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowLeft size={13} />
            Return Home
          </Link>
        </div>

        {/* Digest for debugging */}
        {error.digest && (
          <p
            className="mt-8 text-[10px] tracking-wider"
            style={{ color: '#3D2810', fontFamily: 'monospace' }}
          >
            Error ref: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}

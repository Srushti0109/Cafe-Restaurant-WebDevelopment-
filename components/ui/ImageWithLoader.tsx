'use client'

/**
 * ImageWithLoader
 * ─────────────────────────────────────────────────────────────────────────────
 * Wraps next/image with:
 *  • A shimmer skeleton shown while the image loads
 *  • Smooth opacity fade-in once loaded
 *  • Optional dark overlay (for hero/card usage)
 *  • Optional zoom-on-hover (for gallery/menu cards)
 *
 * All props beyond our custom ones are forwarded to next/image.
 */

import { useState } from 'react'
import NextImage, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ImageWithLoaderProps extends Omit<ImageProps, 'onLoad'> {
  /** Show a subtle dark gradient overlay */
  overlay?:     boolean
  /** CSS gradient string for the overlay – defaults to card-overlay */
  overlayStyle?: string
  /** Scale image to 108% on hover */
  zoomOnHover?: boolean
  /** Extra class on the outer wrapper div */
  wrapperClass?: string
}

/** CSS shimmer animation injected once */
const SHIMMER_CSS = `
@keyframes imgShimmer {
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
}
.img-shimmer {
  background: linear-gradient(
    90deg,
    rgba(45,30,15,0.8) 25%,
    rgba(61,40,16,0.9) 50%,
    rgba(45,30,15,0.8) 75%
  );
  background-size: 1200px 100%;
  animation: imgShimmer 1.6s linear infinite;
}
`

let shimmerInjected = false
function ensureShimmerCSS() {
  if (typeof window === 'undefined' || shimmerInjected) return
  const style = document.createElement('style')
  style.textContent = SHIMMER_CSS
  document.head.appendChild(style)
  shimmerInjected = true
}

export default function ImageWithLoader({
  overlay      = false,
  overlayStyle,
  zoomOnHover  = false,
  wrapperClass,
  className,
  alt,
  ...props
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  // Inject shimmer CSS on first render (client-side only)
  if (typeof window !== 'undefined') ensureShimmerCSS()

  const defaultOverlay =
    'linear-gradient(to top, rgba(13,10,8,0.9) 0%, rgba(13,10,8,0.4) 50%, transparent 100%)'

  return (
    <div className={cn('relative overflow-hidden', wrapperClass)}>
      {/* Shimmer skeleton while image loads */}
      {!loaded && (
        <div
          className="img-shimmer absolute inset-0 z-10"
          aria-hidden="true"
        />
      )}

      {/* The actual image */}
      <NextImage
        alt={alt}
        className={cn(
          'transition-all duration-700',
          zoomOnHover && 'group-hover:scale-110',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: overlayStyle ?? defaultOverlay }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

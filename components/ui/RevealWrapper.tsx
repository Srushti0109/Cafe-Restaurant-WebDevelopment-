'use client'

/**
 * RevealWrapper
 * ─────────────────────────────────────────────────────────────────────────────
 * A polymorphic wrapper that triggers CSS-class-based reveal animations
 * when the element enters the viewport via IntersectionObserver.
 *
 * Usage:
 *   <RevealWrapper variant="fade-up" delay={200}>
 *     <p>I fade up when scrolled into view</p>
 *   </RevealWrapper>
 *
 * For staggered children, use the `stagger` prop with `index`:
 *   {items.map((item, i) => (
 *     <RevealWrapper key={i} variant="fade-up" stagger index={i}>
 *       <Card {...item} />
 *     </RevealWrapper>
 *   ))}
 */

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type HTMLAttributes,
} from 'react'
import { cn } from '@/lib/utils'

type Variant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'none'

interface RevealWrapperProps extends HTMLAttributes<HTMLElement> {
  children:   ReactNode
  variant?:   Variant
  /** Extra delay in ms (added on top of any stagger) */
  delay?:     number
  /** Threshold 0–1 for IntersectionObserver */
  threshold?: number
  /** Polymorphic — change the rendered element */
  as?:        ElementType
  /** When true, uses `index` to calculate a staggered delay */
  stagger?:   boolean
  index?:     number
  /** ms per stagger step */
  staggerStep?: number
  /** Keep element hidden after leaving viewport so it replays on next entry */
  replay?:    boolean
}

/** Maps variant → the CSS class pairs (hidden → visible) */
const VARIANT_CLASSES: Record<Variant, { hidden: string; visible: string }> = {
  'fade-up':    { hidden: 'opacity-0 translate-y-12', visible: 'opacity-100 translate-y-0' },
  'fade-in':    { hidden: 'opacity-0',                visible: 'opacity-100'               },
  'slide-left': { hidden: 'opacity-0 -translate-x-14',visible: 'opacity-100 translate-x-0' },
  'slide-right':{ hidden: 'opacity-0 translate-x-14', visible: 'opacity-100 translate-x-0' },
  'scale-in':   { hidden: 'opacity-0 scale-90',       visible: 'opacity-100 scale-100'     },
  'none':       { hidden: '',                          visible: ''                          },
}

export default function RevealWrapper({
  children,
  variant     = 'fade-up',
  delay       = 0,
  threshold   = 0.12,
  as: Tag     = 'div',
  stagger     = false,
  index       = 0,
  staggerStep = 90,
  replay      = false,
  className,
  style,
  ...rest
}: RevealWrapperProps) {
  const ref        = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  const totalDelay = delay + (stagger ? index * staggerStep : 0)
  const { hidden, visible } = VARIANT_CLASSES[variant]

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true)
          if (!replay) observer.disconnect()
        } else if (replay) {
          setVis(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, replay])

  return (
    // polymorphic ref typing
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700',
        /* Use expo-like easing via inline style below */
        vis ? visible : hidden,
        className
      )}
      style={{
        transitionDelay: `${totalDelay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

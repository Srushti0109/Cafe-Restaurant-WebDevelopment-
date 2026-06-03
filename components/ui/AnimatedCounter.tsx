'use client'

/**
 * AnimatedCounter
 * Counts from `start` to `end` using ease-out-quart when `animate` becomes true.
 * Supports a prefix (e.g. "₹") and suffix (e.g. "K+", "%").
 */

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  end:       number
  start?:    number
  duration?: number   // ms
  prefix?:   string
  suffix?:   string
  className?: string
  /** When true the counter starts counting. Pass `isVisible` from useScrollReveal. */
  animate:   boolean
}

/** Ease-out quart — snappy deceleration like a luxury animation */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export default function AnimatedCounter({
  end,
  start    = 0,
  duration = 2200,
  prefix   = '',
  suffix   = '',
  className,
  animate,
}: AnimatedCounterProps) {
  const [count,    setCount]   = useState(start)
  const rafRef                 = useRef<number>(0)
  const startedRef             = useRef(false)

  useEffect(() => {
    if (!animate || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = easeOutQuart(progress)
      setCount(Math.round(start + (end - start) * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animate, end, start, duration])

  return (
    <span className={cn('tabular-nums', className)} aria-label={`${prefix}${end}${suffix}`}>
      {prefix}{count}{suffix}
    </span>
  )
}

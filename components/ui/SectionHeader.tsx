/**
 * SectionHeader
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable premium section heading used across the site.
 *
 * Renders:
 *   ── label ──
 *   Headline with optional <em> italic golden accent
 *   Optional subtitle paragraph
 *
 * Usage:
 *   <SectionHeader
 *     label="Our Story"
 *     title="A Vision Born From"
 *     accent="Obsession"
 *     subtitle="Founded in 2014…"
 *     align="center"
 *   />
 */

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Small all-caps label above the heading */
  label:     string
  /** Main headline text (before accent) */
  title:     string
  /** Italic gold text appended after the title */
  accent?:   string
  /** Whether accent appears on the same line or a new line */
  accentNewLine?: boolean
  /** Optional paragraph below the heading */
  subtitle?: string
  /** Text alignment */
  align?:    'left' | 'center' | 'right'
  /** Extra classes on the wrapper */
  className?: string
  /** Heading level — defaults to h2 */
  level?:    2 | 3
  /** Extra bottom margin class — defaults to mb-14 */
  mb?:       string
}

export default function SectionHeader({
  label,
  title,
  accent,
  accentNewLine = true,
  subtitle,
  align      = 'center',
  className,
  level      = 2,
  mb         = 'mb-14',
}: SectionHeaderProps) {
  const Tag = `h${level}` as 'h2' | 'h3'

  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align]

  const labelAlign = {
    left:   'justify-start',
    center: 'justify-center',
    right:  'justify-end',
  }[align]

  return (
    <div className={cn('flex flex-col', alignClass, mb, className)}>

      {/* Label with flanking lines */}
      <div className={cn('section-label mb-5', labelAlign)}>
        {label}
      </div>

      {/* Headline */}
      <Tag
        className="font-display text-cream leading-[1.05]"
        style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
      >
        {accentNewLine ? (
          <>
            {title}
            {accent && (
              <em className="block text-gold">{accent}</em>
            )}
          </>
        ) : (
          <>
            {title}{' '}
            {accent && <em className="text-gold">{accent}</em>}
          </>
        )}
      </Tag>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={cn(
            'text-sm text-tan leading-relaxed mt-4 max-w-xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

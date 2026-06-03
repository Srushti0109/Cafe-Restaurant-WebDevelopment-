'use client'

import type React from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import { interiorImages } from '@/lib/images'
import { Award, Leaf, ChefHat } from 'lucide-react'

const VALUES = [
  {
    icon:  Award,
    title: 'Award-Winning',
    text:  'Consistently recognised by Michelin Guide, Time Out, and the India Coffee Awards for excellence in craft and hospitality.',
  },
  {
    icon:  Leaf,
    title: 'Sustainably Sourced',
    text:  'Direct trade with 12 micro-lot farms in Coorg, Chikmagalur, and Araku Valley. Every bean traceable from seed to cup.',
  },
  {
    icon:  ChefHat,
    title: 'Culinary Artistry',
    text:  'Our kitchen brigade trained under three-Michelin-starred mentors in Paris and Tokyo before bringing their craft to Mumbai.',
  },
]

export default function About() {
  const { ref: leftRef,  isVisible: leftVis  } = useScrollReveal(0.15)
  const { ref: rightRef, isVisible: rightVis } = useScrollReveal(0.15)

  return (
    <section
      id="about"
      className="relative bg-coffee section-padding overflow-hidden"
    >
      {/* Decorative ring */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] rounded-full border border-gold/8 pointer-events-none" />
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[300px] h-[300px] rounded-full border border-gold/12 pointer-events-none" />

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Image Column ──────────────────────────────────────────────── */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={cn(
              'relative transition-all duration-1000',
              leftVis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            )}
          >
            {/* Main image */}
            <div className="relative aspect-[3/4] img-zoom-container">
              <Image
                src={interiorImages[0].src}
                alt={interiorImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            </div>

            {/* Secondary image — inset */}
            <div
              className={cn(
                'absolute -bottom-8 -right-8 w-52 h-64 img-zoom-container',
                'border-4 border-coffee shadow-dark transition-all duration-1000 delay-300',
                leftVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <Image
                src={interiorImages[2].src}
                alt={interiorImages[2].alt}
                fill
                className="object-cover"
                sizes="208px"
              />
            </div>

            {/* Year badge */}
            <div
              className={cn(
                'absolute -top-5 -left-5 w-[90px] h-[90px] bg-gold',
                'flex flex-col items-center justify-center text-center',
                'transition-all duration-700 delay-500',
                leftVis ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              )}
            >
              <span className="font-display text-3xl font-bold text-espresso leading-none">10</span>
              <span className="text-[8px] tracking-widest uppercase text-espresso font-medium mt-0.5">Years</span>
            </div>

            {/* Float card */}
            <div
              className={cn(
                'absolute bottom-28 -left-6 glass px-5 py-4 max-w-[180px]',
                'transition-all duration-700 delay-700',
                leftVis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              )}
            >
              <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1">Our Promise</p>
              <p className="font-display text-lg text-cream leading-tight">Farm to Cup</p>
              <p className="text-[10px] text-tan mt-1">Every bean traceable</p>
            </div>
          </div>

          {/* ── Text Column ───────────────────────────────────────────────── */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={cn(
              'transition-all duration-1000',
              rightVis ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            )}
          >
            {/* Section label */}
            <div className="section-label justify-start mb-6">
              Our Story
            </div>

            <h2 className="font-display text-cream leading-[1.08] mb-8"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
              A Vision Born<br />
              From <em className="text-gold">Obsession</em>
            </h2>

            <div className="space-y-5 text-sm text-tan leading-relaxed mb-10">
              <p>
                Velvet Brew was founded in 2014 by Chef Arjun Mehta and master
                barista Priya Krishnamurthy, united by one conviction: that great
                coffee and great food deserve to share the same roof. What began as
                a twenty-seat café in Bandra has become Mumbai's most awarded
                dining destination.
              </p>
              <p>
                We source our Arabica beans directly from micro-lots in Coorg and
                Chikmagalur — farms whose names appear on our menu. Our kitchen
                philosophy is equally uncompromising: let exceptional ingredients
                speak, and let technique serve flavour, never overwhelm it.
              </p>
              <p>
                Today, Velvet Brew serves over 400 guests daily across two floors of
                a beautifully restored 1940s Portuguese villa, where every corner
                has been considered with the eye of an architect.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {VALUES.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className={cn(
                    'flex gap-5 pb-6 border-b border-gold/10 transition-all duration-700',
                    rightVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cream mb-1">{title}</h3>
                    <p className="text-[13px] text-tan leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <button
                className="btn-gold"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Our Menu</span>
              </button>
              <button
                className="btn-outline-cream"
                onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Book a Table</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

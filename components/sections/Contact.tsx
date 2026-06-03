'use client'
import type React from 'react'

/**
 * Contact Section
 * ─────────────────────────────────────────────────────────────────────────────
 * Design approach:
 *  • Dark espresso background keeps the luxury tone consistent
 *  • Left column: contact details, opening hours in a clean list
 *  • Right column: stylised map placeholder with a location pin
 *    (using a real Unsplash aerial/street image as the map tile background)
 *  • Bottom row: social media icons with hover reveals
 *  • Subtle animated gradient highlight on the map card
 */

import Image from 'next/image'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import {
  MapPin, Phone, Mail, Clock, Instagram,
  Twitter, Facebook, Linkedin, ArrowRight,
  ExternalLink,
} from 'lucide-react'

const CONTACT_ITEMS = [
  {
    icon:  MapPin,
    label: 'Address',
    lines: ['14 Pali Hill, Bandra West', 'Mumbai, Maharashtra — 400050'],
    action: { label: 'Get Directions', href: 'https://maps.google.com' },
  },
  {
    icon:  Phone,
    label: 'Reservations',
    lines: ['+91 22 6745 8900', '+91 98200 11223'],
    action: { label: 'Call Now', href: 'tel:+912267458900' },
  },
  {
    icon:  Mail,
    label: 'Email',
    lines: ['hello@velvetbrew.in', 'events@velvetbrew.in'],
    action: { label: 'Send Email', href: 'mailto:hello@velvetbrew.in' },
  },
]

const HOURS = [
  { day: 'Monday – Friday', hours: '07:00 – 23:00', note: 'Kitchen closes at 22:30' },
  { day: 'Saturday',        hours: '08:00 – 00:00', note: 'Kitchen closes at 23:30' },
  { day: 'Sunday',          hours: '09:00 – 22:00', note: 'Kitchen closes at 21:30' },
]

const SOCIALS = [
  { icon: Instagram, label: '@velvetbrew',  href: '#', handle: 'Instagram' },
  { icon: Twitter,   label: '@velvet_brew', href: '#', handle: 'Twitter' },
  { icon: Facebook,  label: 'Velvet Brew',  href: '#', handle: 'Facebook' },
  { icon: Linkedin,  label: 'Velvet Brew',  href: '#', handle: 'LinkedIn' },
]

export default function Contact() {
  const { ref: leftRef,  isVisible: leftVis  } = useScrollReveal(0.12)
  const { ref: rightRef, isVisible: rightVis } = useScrollReveal(0.12)

  return (
    <section
      id="contact"
      className="bg-coffee section-padding"
    >
      <div className="container-main">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-5">Find Us</div>
          <h2 className="font-display text-cream leading-tight"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}>
            Get in <em className="text-gold">Touch</em>
          </h2>
        </div>

        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-gold/8">

          {/* ── Left: Info ──────────────────────────────────────────────── */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={cn(
              'bg-espresso p-8 lg:p-12 flex flex-col gap-10',
              'transition-all duration-900',
              leftVis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            {/* Contact items */}
            <div className="space-y-8">
              {CONTACT_ITEMS.map(({ icon: Icon, label, lines, action }) => (
                <div key={label} className="flex gap-5 group">
                  <div className="w-11 h-11 border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] tracking-[0.35em] uppercase text-gold mb-2">{label}</p>
                    {lines.map(line => (
                      <p key={line} className="text-sm text-cream leading-relaxed">{line}</p>
                    ))}
                    <a
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-[10px] text-gold/60 hover:text-gold transition-colors mt-1.5 tracking-wide"
                    >
                      {action.label}
                      <ExternalLink size={9} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Gold divider */}
            <div className="gold-divider" />

            {/* Opening hours */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={14} className="text-gold" />
                <p className="text-[9px] tracking-[0.35em] uppercase text-gold">Opening Hours</p>
              </div>
              <div className="space-y-3">
                {HOURS.map(({ day, hours, note }) => (
                  <div key={day} className="flex items-start justify-between gap-4 pb-3 border-b border-gold/8">
                    <div>
                      <p className="text-sm text-cream">{day}</p>
                      <p className="text-[10px] text-tan/60 mt-0.5">{note}</p>
                    </div>
                    <p className="text-sm font-display text-gold shrink-0">{hours}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-tan/50 mt-4">
                Last orders 30 minutes before kitchen close.
                Bar remains open until venue closes.
              </p>
            </div>

            {/* Gold divider */}
            <div className="gold-divider" />

            {/* Social media */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-gold mb-5">Follow Our Journey</p>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={handle}
                    href={href}
                    aria-label={`Follow us on ${handle}`}
                    className="flex items-center gap-3 p-3 border border-gold/12 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group"
                  >
                    <Icon size={14} className="text-tan group-hover:text-gold transition-colors" />
                    <div>
                      <p className="text-[9px] tracking-wide uppercase text-tan/50">{handle}</p>
                      <p className="text-[11px] text-cream">{label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Map ──────────────────────────────────────────────── */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={cn(
              'relative overflow-hidden min-h-[500px] lg:min-h-0',
              'transition-all duration-900',
              rightVis ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
          >
            {/* Map imagery — aerial neighbourhood photo */}
            <Image
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85&fit=crop"
              alt="Bandra West, Mumbai aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-espresso/65" />

            {/* Subtle grid overlay to suggest map tiles */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(196,152,58,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(196,152,58,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />

            {/* Glowing pulse at pin location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Ripple rings */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/40 animate-ping" style={{ width: 80, height: 80, top: -40, left: -40, animationDuration: '2.5s' }} />
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" style={{ width: 120, height: 120, top: -60, left: -60, animationDuration: '2.5s', animationDelay: '0.5s' }} />

              {/* Pin card */}
              <div className="glass border border-gold/25 px-5 py-4 text-center shadow-dark">
                <MapPin size={18} className="text-gold mx-auto mb-2" />
                <p className="font-display text-lg text-cream">Velvet Brew</p>
                <p className="text-[10px] text-tan mt-1">14 Pali Hill, Bandra West</p>
                <p className="text-[10px] text-tan">Mumbai — 400050</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[9px] text-gold hover:text-gold-light transition-colors mt-3 tracking-[0.2em] uppercase"
                >
                  Open in Maps
                  <ArrowRight size={9} />
                </a>
              </div>
            </div>

            {/* Distance badges */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
              {[
                { place: 'Bandra Station', dist: '8 min walk' },
                { place: 'Linking Road',   dist: '5 min walk' },
                { place: 'Carter Road',    dist: '10 min walk' },
              ].map(({ place, dist }) => (
                <div key={place} className="glass-light px-3 py-2.5 text-center">
                  <p className="text-[9px] text-gold tracking-wide">{dist}</p>
                  <p className="text-[9px] text-cream/70 mt-0.5">{place}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom CTA strip ─────────────────────────────────────────────── */}
        <div className="mt-1 bg-espresso border border-gold/8 p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl text-cream mb-1">
              Ready for an unforgettable experience?
            </h3>
            <p className="text-sm text-tan">
              Reserve your table now — seats fill quickly on weekends.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              className="btn-gold"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Reserve Now</span>
              <ArrowRight size={14} />
            </button>
            <a href="tel:+912267458900" className="btn-outline-cream">
              <Phone size={13} />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

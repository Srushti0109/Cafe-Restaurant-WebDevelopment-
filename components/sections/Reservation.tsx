'use client'

/**
 * Reservation Section
 * ─────────────────────────────────────────────────────────────────────────────
 * Design approach:
 *  • Full-bleed background image (cafe interior) with heavy dark overlay
 *  • Centred glassmorphism card floats over the image — feels premium
 *  • Two-column form layout on desktop, single column on mobile
 *  • Inline validation with gold error accents
 *  • Success state replaces the form with an animated confirmation
 *  • Floating decorative elements (rings, grain) add depth
 */

import { useState, useId } from 'react'
import type React from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks'
import { heroImages } from '@/lib/images'
import { cn } from '@/lib/utils'
import {
  User, Mail, Phone, Calendar, Clock, Users,
  MessageSquare, CheckCircle, Loader2, ArrowRight,
} from 'lucide-react'
import type { ReservationForm } from '@/types'

// ─── Constants ────────────────────────────────────────────────────────────────
const TIME_SLOTS = [
  '07:30', '08:00', '08:30', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '18:00', '18:30', '19:00',
  '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
]

const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7 Guests', '8 Guests']

const EMPTY_FORM: ReservationForm = {
  name: '', email: '', phone: '', date: '', time: '', guests: '', request: '',
}

type FormErrors = Partial<Record<keyof ReservationForm, string>>

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(form: ReservationForm): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim())                       errors.name    = 'Full name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Valid email required'
  if (!form.date)                              errors.date    = 'Please select a date'
  if (!form.time)                              errors.time    = 'Please select a time'
  if (!form.guests)                            errors.guests  = 'Number of guests required'
  return errors
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  label, icon: Icon, error, children,
}: {
  label: string
  icon: React.ElementType
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-tan font-medium">
        <Icon size={11} className="text-gold" />
        {label}
      </label>
      {children}
      {error && (
        <p className="text-[11px] text-red-400/80 mt-0.5 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-400/80" />
          {error}
        </p>
      )}
    </div>
  )
}

// ─── Success Screen ───────────────────────────────────────────────────────────
function SuccessScreen({ email, onReset }: { email: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-6 gap-6 animate-[scaleIn_0.5s_ease_both]">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
          <CheckCircle size={36} className="text-gold" strokeWidth={1.5} />
        </div>
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: '2s' }} />
      </div>

      <div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Reservation Confirmed</p>
        <h3 className="font-display text-3xl text-cream mb-3">We'll See You Soon</h3>
        <p className="text-sm text-tan leading-relaxed max-w-sm">
          A confirmation has been sent to{' '}
          <span className="text-cream font-medium">{email}</span>.
          We look forward to welcoming you to Velvet Brew.
        </p>
      </div>

      <div className="gold-divider w-24" />

      <p className="text-[11px] text-tan/60 tracking-wide">
        For changes or special arrangements, call us at{' '}
        <span className="text-gold">+91 22 6745 8900</span>
      </p>

      <button
        onClick={onReset}
        className="btn-outline-gold mt-2"
      >
        Make Another Reservation
      </button>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Reservation() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const formId = useId()

  const [form, setForm]       = useState<ReservationForm>(EMPTY_FORM)
  const [errors, setErrors]   = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (key: keyof ReservationForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(er => ({ ...er, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSuccess(true)
  }

  const handleReset = () => {
    setForm(EMPTY_FORM)
    setErrors({})
    setSuccess(false)
  }

  const inputClass = (field: keyof ReservationForm) => cn(
    'input-luxury',
    errors[field] && 'error'
  )

  // Today's date as min value
  const today = new Date().toISOString().split('T')[0]

  return (
    <section
      id="reservation"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative section-padding overflow-hidden"
    >
      {/* ── Background image ────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[3].src}
          alt="Elegant cafe dining room"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/88" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(196,152,58,0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5 pointer-events-none z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/8 pointer-events-none z-[1]" />

      <div className="container-main relative z-10">

        {/* ── Section header ────────────────────────────────────────────── */}
        <div className={cn(
          'text-center mb-12 transition-all duration-800',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <div className="section-label justify-center mb-5">Secure Your Seat</div>
          <h2 className="font-display text-cream leading-tight"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}>
            Reserve a <em className="text-gold">Table</em>
          </h2>
          <p className="text-sm text-tan mt-3 max-w-md mx-auto">
            For parties of 8 or more, private dining, or same-day bookings,
            please call us directly at{' '}
            <span className="text-gold">+91 22 6745 8900</span>.
          </p>
        </div>

        {/* ── Glass card ────────────────────────────────────────────────── */}
        <div
          className={cn(
            'max-w-3xl mx-auto glass border border-gold/15 shadow-dark-lg',
            'transition-all duration-900',
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          {success ? (
            <SuccessScreen email={form.email} onReset={handleReset} />
          ) : (
            <form
              id={formId}
              onSubmit={handleSubmit}
              noValidate
              className="p-8 lg:p-12"
              aria-label="Table reservation form"
            >
              {/* Form header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gold/12">
                <div className="w-8 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-gold">
                  Complete Your Booking
                </span>
              </div>

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="Full Name" icon={User} error={errors.name}>
                  <input
                    type="text"
                    placeholder="Alexandra Sharma"
                    value={form.name}
                    onChange={set('name')}
                    className={inputClass('name')}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email Address" icon={Mail} error={errors.email}>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={set('email')}
                    className={inputClass('email')}
                    autoComplete="email"
                  />
                </Field>
              </div>

              {/* Row 2: Phone + Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="Phone Number" icon={Phone}>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set('phone')}
                    className={inputClass('phone')}
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Number of Guests" icon={Users} error={errors.guests}>
                  <select
                    value={form.guests}
                    onChange={set('guests')}
                    className={cn(inputClass('guests'), 'bg-espresso cursor-pointer')}
                  >
                    <option value="" disabled>Select guests</option>
                    {GUEST_OPTIONS.map(g => (
                      <option key={g} value={g} className="bg-espresso">{g}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Row 3: Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="Date" icon={Calendar} error={errors.date}>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={set('date')}
                    className={cn(inputClass('date'), 'bg-espresso cursor-pointer')}
                  />
                </Field>
                <Field label="Preferred Time" icon={Clock} error={errors.time}>
                  <select
                    value={form.time}
                    onChange={set('time')}
                    className={cn(inputClass('time'), 'bg-espresso cursor-pointer')}
                  >
                    <option value="" disabled>Select time</option>
                    {TIME_SLOTS.map(t => (
                      <option key={t} value={t} className="bg-espresso">{t}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Row 4: Special requests */}
              <Field label="Special Requests" icon={MessageSquare}>
                <textarea
                  placeholder="Dietary requirements, celebrations, seating preferences, allergies…"
                  value={form.request}
                  onChange={set('request')}
                  rows={3}
                  className={cn(inputClass('request'), 'resize-none')}
                />
              </Field>

              {/* Availability note */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-gold/5 border border-gold/12">
                <span className="text-gold text-lg leading-none mt-0.5">ⓘ</span>
                <p className="text-[11px] text-tan/80 leading-relaxed">
                  Reservations are held for 15 minutes past the booking time.
                  Cancellations must be made 24 hours in advance.
                  Chef's table experiences require 48-hour advance booking.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  'btn-gold w-full mt-6 justify-center gap-3',
                  'disabled:opacity-60 disabled:cursor-not-allowed'
                )}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Confirming your reservation…</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-tan/40 mt-4 tracking-wide">
                By submitting you agree to our cancellation policy and privacy terms.
              </p>
            </form>
          )}
        </div>

        {/* ── Opening hours strip ───────────────────────────────────────── */}
        <div
          className={cn(
            'max-w-3xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/10',
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          {[
            { days: 'Monday – Friday', hours: '07:00 – 23:00' },
            { days: 'Saturday',        hours: '08:00 – 00:00' },
            { days: 'Sunday',          hours: '09:00 – 22:00' },
          ].map(({ days, hours }) => (
            <div key={days} className="glass-light px-4 py-4 text-center">
              <p className="text-[9px] tracking-[0.25em] uppercase text-gold mb-1">{days}</p>
              <p className="font-display text-base text-cream">{hours}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

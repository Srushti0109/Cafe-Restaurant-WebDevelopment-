/**
 * VELVET BREW — TypeScript Types
 * Single source of truth for all shared interfaces.
 */

// ─── Image ────────────────────────────────────────────────────────────────────
export interface ImageAsset {
  src:     string
  alt:     string
  credit?: string
}

// ─── Menu ─────────────────────────────────────────────────────────────────────
export type MenuBadge =
  | 'Bestseller'
  | "Chef's Pick"
  | 'New'
  | 'Seasonal'
  | 'Vegan'

export interface MenuItem {
  id:          number
  name:        string
  description: string
  price:       string
  image:       { src: string; alt: string }
  badge?:      MenuBadge
  tags:        string[]
}

export interface MenuCategory {
  id:    string
  label: string
  icon:  string
  items: MenuItem[]
}

// ─── Specials ─────────────────────────────────────────────────────────────────
export interface FeaturedSpecial {
  name:        string
  subtitle:    string
  description: string
  price:       string
  badge:       string
  image:       { src: string; alt: string }
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  name:   string
  role:   string
  text:   string
  stars:  number
  avatar: { src: string; alt: string }
  source: string
}

// ─── Reservation ─────────────────────────────────────────────────────────────
export interface ReservationForm {
  name:    string
  email:   string
  phone:   string
  date:    string
  time:    string
  guests:  string
  request: string
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavLink {
  id:    string
  label: string
}

// ─── Gallery ─────────────────────────────────────────────────────────────────
export type AspectRatio = 'tall' | 'wide' | 'square'

export interface GalleryImage extends ImageAsset {
  aspectRatio?: AspectRatio
}

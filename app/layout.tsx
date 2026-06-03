import type { Metadata, Viewport } from 'next'
import type React from 'react'
import './globals.css'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://www.velvetbrew.in'),

  title: {
    default:  'Velvet Brew — Café & Restaurant | Bandra West, Mumbai',
    template: '%s | Velvet Brew Mumbai',
  },

  description:
    'Award-winning specialty café and fine-dining restaurant in Bandra West, Mumbai. Single-origin coffee from Coorg, Michelin-recognised cuisine, and an unforgettable atmosphere. Est. 2014.',

  keywords: [
    'luxury cafe mumbai',
    'fine dining bandra',
    'specialty coffee mumbai',
    'best restaurant bandra west',
    'velvet brew',
    'award winning cafe india',
    'michelin recommended mumbai',
    'single origin coffee',
    'chef tasting menu mumbai',
  ],

  authors: [{ name: 'Velvet Brew', url: 'https://www.velvetbrew.in' }],

  creator:   'Velvet Brew',
  publisher: 'Velvet Brew Café & Restaurant Pvt. Ltd.',

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://www.velvetbrew.in',
    siteName:    'Velvet Brew',
    title:       'Velvet Brew — Café & Restaurant | Bandra West, Mumbai',
    description: 'Award-winning specialty café and fine-dining restaurant in Bandra West, Mumbai. Single-origin coffee, Michelin-recognised cuisine.',
    images: [
      {
        url:    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=630&fit=crop&q=90',
        width:  1200,
        height: 630,
        alt:    'Velvet Brew — Luxury Café Interior',
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    site:        '@velvet_brew',
    creator:     '@velvet_brew',
    title:       'Velvet Brew — Café & Restaurant | Bandra, Mumbai',
    description: 'Award-winning specialty café and fine-dining restaurant in Bandra West, Mumbai.',
    images:      ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=630&fit=crop&q=90'],
  },

  // ── Robots ───────────────────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: 'https://www.velvetbrew.in',
  },

  // ── Icons ────────────────────────────────────────────────────────────────────
  icons: {
    icon:  '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // ── Verification (add your Search Console token here) ────────────────────────
  // verification: { google: 'YOUR_TOKEN' },
}

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:               'device-width',
  initialScale:        1,
  maximumScale:        5,
  themeColor:          '#0D0A08',
  colorScheme:         'dark',
}

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context':   'https://schema.org',
  '@type':      'Restaurant',
  name:         'Velvet Brew',
  description:  'Award-winning specialty café and fine-dining restaurant in Bandra West, Mumbai.',
  url:          'https://www.velvetbrew.in',
  telephone:    '+912267458900',
  email:        'hello@velvetbrew.in',
  foundingDate: '2014',
  priceRange:   '₹₹₹',
  servesCuisine: ['Indian', 'Continental', 'Specialty Coffee'],
  address: {
    '@type':           'PostalAddress',
    streetAddress:     '14 Pali Hill, Bandra West',
    addressLocality:   'Mumbai',
    addressRegion:     'Maharashtra',
    postalCode:        '400050',
    addressCountry:    'IN',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   19.0596,
    longitude:  72.8295,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '00:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'],   opens: '09:00', closes: '22:00' },
  ],
  aggregateRating: {
    '@type':       'AggregateRating',
    ratingValue:   '4.9',
    reviewCount:   '847',
    bestRating:    '5',
    worstRating:   '1',
  },
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=85',
  sameAs: [
    'https://www.instagram.com/velvetbrew',
    'https://www.facebook.com/velvetbrew',
    'https://twitter.com/velvet_brew',
  ],
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-espresso text-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

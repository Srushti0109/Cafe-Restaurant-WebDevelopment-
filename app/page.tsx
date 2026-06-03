import Navbar           from '@/components/layout/Navbar'
import Footer           from '@/components/layout/Footer'
import Hero             from '@/components/sections/Hero'
import About            from '@/components/sections/About'
import Menu             from '@/components/sections/Menu'
import FeaturedSpecials from '@/components/sections/FeaturedSpecials'
import ChefSpecial      from '@/components/sections/ChefSpecial'
import Gallery          from '@/components/sections/Gallery'
import Testimonials     from '@/components/sections/Testimonials'
import Reservation      from '@/components/sections/Reservation'
import Contact          from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Accessibility: skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-espresso focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Menu />
        <FeaturedSpecials />
        <ChefSpecial />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

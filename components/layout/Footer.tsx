import { Instagram, Twitter, Facebook, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react'

const FOOTER_LINKS = {
  Experience: ['Our Story', 'The Kitchen', 'Coffee Programme', 'Private Events', 'Awards & Press'],
  Menu:       ['Coffee Bar', 'All-Day Dining', 'Seasonal Specials', 'Wine & Spirits', 'Tasting Menu'],
  Visit:      ['Reservations', 'Opening Hours', 'Gift Vouchers', 'Loyalty Club', 'Careers'],
}

const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter,   label: 'Twitter',   href: '#' },
  { icon: Facebook,  label: 'Facebook',  href: '#' },
  { icon: Linkedin,  label: 'LinkedIn',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-gold/10">

      {/* ── Main Grid ────────────────────────────────────────────────────── */}
      <div className="container-main py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <div className="font-display text-3xl tracking-widest text-cream mb-1">
              VELVET<span className="text-gold"> BREW</span>
            </div>
            <p className="text-[8px] tracking-[0.5em] text-tan uppercase mb-6">
              Café &amp; Restaurant · Est. 2014
            </p>

            <p className="text-sm text-tan leading-relaxed mb-8 max-w-sm">
              Where single-origin coffee meets Michelin-recognised cuisine.
              Every visit is a sensory journey through flavour, craft, and warmth.
            </p>

            {/* Contact details */}
            <ul className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: '14 Pali Hill, Bandra West, Mumbai — 400050' },
                { icon: Phone,  text: '+91 22 6745 8900' },
                { icon: Mail,   text: 'hello@velvetbrew.in' },
                { icon: Clock,  text: 'Mon–Fri 07:00–23:00 · Sat–Sun 08:00–00:00' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-xs text-tan leading-relaxed">
                  <Icon size={13} className="text-gold mt-0.5 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-tan hover:text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links cols */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="lg:col-span-2">
              <h3 className="text-[9px] tracking-[0.35em] uppercase text-gold font-medium mb-6">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-tan hover:text-cream transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter col */}
          <div className="lg:col-span-2">
            <h3 className="text-[9px] tracking-[0.35em] uppercase text-gold font-medium mb-6">
              Newsletter
            </h3>
            <p className="text-xs text-tan leading-relaxed mb-4">
              Seasonal menus, exclusive events, and stories from our kitchen.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="input-luxury text-xs py-3"
                aria-label="Email for newsletter"
              />
              <button className="btn-outline-gold text-[9px] py-3 justify-center">
                Subscribe
              </button>
            </div>

            {/* Certifications */}
            <div className="mt-8 space-y-2">
              {['🌱 Rainforest Alliance Certified', '⭐ Michelin Guide Recommended', '🏆 Best Café Mumbai 2024'].map(cert => (
                <div key={cert} className="text-[9px] text-tan/60 tracking-wide">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────────── */}
      <div className="border-t border-gold/8">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-tan/50 tracking-wide">
            © 2024 Velvet Brew Café &amp; Restaurant Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map(l => (
              <a key={l} href="#" className="text-[10px] text-tan/50 hover:text-gold transition-colors duration-300 tracking-wide">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

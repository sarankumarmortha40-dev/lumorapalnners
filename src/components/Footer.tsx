import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Blog', path: '/blog' },
  ],
  Services: [
    { label: 'Luxury Weddings', path: '/services/luxury-weddings' },
    { label: 'Corporate Events', path: '/services/corporate-events' },
    { label: 'Destination Weddings', path: '/services/destination-weddings' },
    { label: 'Private Events', path: '/services/private-events' },
  ],
  Resources: [
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },
  ],
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-ink-900 text-cream-50">
      <div className="container-wide py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex flex-col leading-none group">
              <span className="font-serif text-3xl tracking-[0.12em] text-cream-50">LUMORA</span>
              <span className="text-[9px] font-sans uppercase tracking-[0.32em] mt-[4px] text-cream-50/50">
                Planners
              </span>
            </Link>
            <p className="mt-8 font-serif text-xl text-cream-50/70 leading-relaxed max-w-sm">
              Crafting extraordinary experiences for the world's most discerning clients, since 2007.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {[Instagram, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-cream-50/20 text-cream-50/70 transition-all duration-500 hover:border-gold hover:text-gold"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm font-sans text-cream-50/60 hover:text-cream-50 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold mb-5">
              Studio
            </h4>
            <ul className="space-y-4 text-sm font-sans text-cream-50/60">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-gold/70 shrink-0" />
                <span>Prestige Tower, MG Road, Bengaluru 560001, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 text-gold/70 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-gold/70 shrink-0" />
                <span>studio@lumoraplanners.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-cream-50/40 tracking-wide">
            © {new Date().getFullYear()} LUMORA PLANNERS. All rights reserved.
          </p>
          <p className="text-xs font-sans text-cream-50/40 tracking-wide">
            Crafting Extraordinary Experiences
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center bg-ink-900 text-cream-50 border border-cream-50/20 transition-all duration-500 hover:bg-gold hover:text-ink-900 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Industries', path: '/industries' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = location.pathname === '/';
  const dark = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-cream-50/90 backdrop-blur-xl border-b border-ink-900/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-wide grid grid-cols-3 items-center">

          {/* LEFT — Logo */}
          <Link to="/" className="flex flex-col leading-none group w-fit">
            <span
              className={`font-serif text-2xl tracking-[0.12em] transition-colors duration-500 ${
                dark ? 'text-cream-50' : 'text-ink-900'
              }`}
            >
              LUMORA
            </span>
            <span
              className={`text-[9px] font-sans uppercase tracking-[0.32em] mt-[3px] transition-colors duration-500 ${
                dark ? 'text-cream-50/55' : 'text-ink-900/45'
              }`}
            >
              Planners
            </span>
          </Link>

          {/* CENTER — Nav links */}
          <nav className="hidden lg:flex items-center justify-center gap-7">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-sans uppercase tracking-ultra-wide-sm transition-colors duration-300 link-underline whitespace-nowrap ${
                  dark
                    ? 'text-cream-50/75 hover:text-cream-50'
                    : 'text-ink-900/65 hover:text-ink-900'
                } ${
                  location.pathname === link.path
                    ? dark
                      ? '!text-cream-50'
                      : '!text-ink-900'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT — CTA + mobile hamburger */}
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center px-6 py-3 text-[11px] font-sans uppercase tracking-ultra-wide-sm border transition-all duration-500 ${
                dark
                  ? 'border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-ink-900'
                  : 'border-ink-900/20 text-ink-900 hover:bg-ink-900 hover:text-cream-50'
              }`}
            >
              Begin
            </Link>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden p-2 transition-colors ${dark ? 'text-cream-50' : 'text-ink-900'}`}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink-900 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl tracking-[0.12em] text-cream-50">LUMORA</span>
                <span className="text-[9px] font-sans uppercase tracking-[0.32em] mt-[3px] text-cream-50/50">
                  Planners
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-cream-50 p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-4 font-serif text-3xl border-b border-cream-50/10 transition-colors ${
                      location.pathname === link.path ? 'text-gold' : 'text-cream-50/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pt-10">
              <Link to="/contact" className="btn-gold w-full">
                Begin Your Event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

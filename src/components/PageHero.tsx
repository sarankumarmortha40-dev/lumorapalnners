import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  align = 'left',
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
      </div>

      <div className="relative container-wide pb-20 pt-40 w-full">
        <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
            >
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow-light">{eyebrow}</span>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 font-serif text-hero text-cream-50 text-shadow-luxury text-balance"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`mt-8 font-serif text-xl md:text-2xl text-cream-50/80 leading-relaxed max-w-2xl ${
                align === 'center' ? 'mx-auto' : ''
              }`}
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTAButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 px-8 py-4 bg-cream-50 text-ink-900 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-gold group"
    >
      {label}
      <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 30, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={`mt-6 font-serif text-display text-balance ${
            light ? 'text-cream-50' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 max-w-2xl font-sans text-base leading-relaxed ${
              align === 'center' ? 'mx-auto' : ''
            } ${light ? 'text-cream-50/60' : 'text-ink-900/60'}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

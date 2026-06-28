import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 8000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="In Their Words"
        title="Testimonials"
        subtitle="The measure of our work is not what we say about it, but what our clients carry with them after the last guest has gone."
        image="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      {/* CAROUSEL */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="relative max-w-4xl mx-auto">
            <Quote size={64} className="text-gold/20 absolute -top-4 left-0" />

            <div className="relative min-h-[320px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 mb-8">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-serif text-2xl lg:text-3xl text-ink-900 leading-relaxed text-balance">
                    "{TESTIMONIALS[active].quote}"
                  </p>
                  <div className="mt-10">
                    <div className="font-sans text-sm font-medium text-ink-900">
                      {TESTIMONIALS[active].author}
                    </div>
                    <div className="mt-1 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                      {TESTIMONIALS[active].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={goPrev}
                className="w-12 h-12 border border-ink-900/20 flex items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-all duration-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > active ? 1 : -1);
                      setActive(i);
                    }}
                    className={`h-1 transition-all duration-500 ${
                      i === active ? 'w-10 bg-gold' : 'w-4 bg-ink-900/20'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                className="w-12 h-12 border border-ink-900/20 flex items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-all duration-500"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ALL TESTIMONIALS GRID */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="The Collection"
            title="All Testimonials"
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-900/10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <div className="bg-cream-50 p-10 lg:p-12 h-full flex flex-col">
                  <Quote size={28} className="text-gold/40" />
                  <p className="mt-6 font-serif text-lg text-ink-900/80 leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <div className="mt-8 pt-6 border-t border-ink-900/10">
                    <div className="font-sans text-sm font-medium text-ink-900">{t.author}</div>
                    <div className="mt-1 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                      {t.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

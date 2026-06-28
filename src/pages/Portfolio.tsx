import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X, MapPin, Calendar } from 'lucide-react';
import PageHero, { CTAButton } from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';
import { PORTFOLIO_ITEMS } from '../data/content';

const CATEGORIES = ['All', ...Array.from(new Set(PORTFOLIO_ITEMS.map((p) => p.category)))];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<(typeof PORTFOLIO_ITEMS)[number] | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Selected Work"
        title="Portfolio"
        subtitle="Eight hundred and fifty events. Each one a first. Here is a selection of recent celebrations that define the LUMORA standard."
        image="images\college.jpg"
      >
        <CTAButton to="/contact" label="Begin Your Project" />
      </PageHero>

      {/* MASONRY GALLERY WITH FILTERS */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-16">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 text-[11px] font-sans uppercase tracking-ultra-wide-sm border transition-all duration-500 ${
                    filter === cat
                      ? 'bg-ink-900 text-cream-50 border-ink-900'
                      : 'border-ink-900/20 text-ink-900/70 hover:border-ink-900 hover:text-ink-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                  className="mb-6 lg:mb-8 break-inside-avoid"
                >
                  <button
                    onClick={() => setSelected(item)}
                    className="group block w-full text-left"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 ${
                          i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-square'
                        }`}
                      />
                      <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                          {item.category}
                        </span>
                        <h3 className="mt-2 font-serif text-2xl text-cream-50">{item.title}</h3>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-lg text-ink-900">{item.title}</h3>
                        <div className="mt-1 flex items-center gap-3 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-ink-900/50">
                          <span>{item.category}</span>
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CASE STUDY LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] bg-ink-900/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-[16/9]">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-cream-50/90 flex items-center justify-center text-ink-900 hover:bg-gold transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                  {selected.category}
                </span>
                <h2 className="mt-4 font-serif text-4xl text-ink-900">{selected.title}</h2>
                <div className="mt-4 flex flex-wrap gap-6 text-sm font-sans text-ink-900/60">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    {selected.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold" />
                    {selected.year}
                  </span>
                </div>
                <p className="mt-8 font-serif text-xl text-ink-900/80 leading-relaxed">
                  {selected.description}
                </p>
                <Link to="/contact" className="mt-10 btn-primary">
                  Request a Similar Event
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AWARDS STRIP */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Recognition"
            title="Award-Winning Work"
            light
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2024', title: 'Event Planner of the Year' },
              { year: '2024', title: 'Best Destination Wedding' },
              { year: '2023', title: 'Excellence in Corporate Events' },
              { year: '2022', title: 'Best Luxury Brand Launch' },
            ].map((award, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center border border-cream-50/10 p-8">
                  <div className="font-serif text-3xl text-gold">{award.year}</div>
                  <div className="mt-4 text-xs font-sans uppercase tracking-ultra-wide-sm text-cream-50/70">
                    {award.title}
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

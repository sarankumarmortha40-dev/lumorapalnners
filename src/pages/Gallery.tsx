import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { GALLERY_IMAGES } from '../data/content';

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter)),
    [filter]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="The Archive"
        title="Gallery"
        subtitle="A living collection of moments — the florals, the light, the rooms, the faces. The details that made each celebration singular."
        image="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      {/* FILTERS */}
      <section className="pt-20 lg:pt-28">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 lg:gap-4 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  layout
                  key={`${img.src}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  onClick={() => setLightboxIndex(i)}
                  className="mb-3 lg:mb-4 break-inside-avoid group relative block w-full overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition-all duration-500 flex items-end p-5">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                        {img.category}
                      </span>
                      <p className="mt-1 font-serif text-lg text-cream-50">{img.alt}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink-900/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-cream-50 hover:text-gold transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 lg:left-8 w-12 h-12 flex items-center justify-center text-cream-50/70 hover:text-gold transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 lg:right-8 w-12 h-12 flex items-center justify-center text-cream-50/70 hover:text-gold transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
              <div className="mt-6 text-center">
                <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                  {filtered[lightboxIndex].category}
                </span>
                <p className="mt-2 font-serif text-xl text-cream-50">{filtered[lightboxIndex].alt}</p>
                <p className="mt-2 text-xs font-sans text-cream-50/40">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

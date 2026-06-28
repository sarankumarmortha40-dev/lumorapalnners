import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Questions"
        title="FAQ"
        subtitle="The most common questions we receive, answered with the same directness we bring to every conversation."
        image="https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      {/* ACCORDION */}
      <section className="py-24 lg:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Answers"
                title="Common Questions"
                subtitle="If your question is not here, we welcome you to reach out directly."
              />
              <Reveal delay={0.2}>
                <Link to="/contact" className="mt-8 btn-outline inline-flex">
                  Contact Us
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-ink-900/10">
                {FAQS.map((faq, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="border-b border-ink-900/10">
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left group"
                      >
                        <span
                          className={`font-serif text-xl transition-colors duration-500 ${
                            open === i ? 'text-gold' : 'text-ink-900 group-hover:text-gold'
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span className="shrink-0 ml-4">
                          {open === i ? (
                            <Minus size={20} className="text-gold" />
                          ) : (
                            <Plus size={20} className="text-ink-900/60" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 font-sans text-base text-ink-900/60 leading-relaxed max-w-2xl">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

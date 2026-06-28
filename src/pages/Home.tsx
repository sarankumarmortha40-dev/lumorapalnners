import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/Reveal';
import Counter from '../components/Counter';
import {
  SERVICES,
  STATS,
  TESTIMONIALS,
  BLOG_POSTS,
  GALLERY_IMAGES,
  PROCESS_STEPS,
} from '../data/content';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-cream-50">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Luxury event setting"
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/40 to-ink-900/70" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full container-wide flex flex-col justify-end pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow-light">Luxury Event Planning & Experience Design</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-6 font-serif text-hero text-cream-50 text-shadow-luxury max-w-5xl text-balance"
          >
            Crafting Extraordinary Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 font-serif text-xl md:text-2xl text-cream-50/80 max-w-2xl leading-relaxed"
          >
            For the world's most discerning clients, we design celebrations that are felt long after
            the last guest departs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream-50 text-ink-900 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-gold group"
            >
              Begin Your Event
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-cream-50/30 text-cream-50 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-cream-50 hover:text-ink-900"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-cream-50/50">
            Scroll
          </span>
          <span className="w-px h-12 bg-cream-50/30 animate-pulse" />
        </motion.div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="eyebrow">The Studio</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 font-serif text-3xl text-ink-900 leading-tight">
                  A house devoted to the art of celebration.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.2}>
                <p className="font-serif text-2xl text-ink-900/80 leading-relaxed">
                  LUMORA is not an event planning company. It is a studio of composers, designers,
                  and producers who believe that a great celebration is not assembled — it is
                  authored.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-8 font-sans text-base text-ink-900/60 leading-relaxed max-w-xl">
                  For eighteen years, we have designed weddings, galas, launches, and private
                  gatherings for clients who expect more than execution. They expect intention. They
                  expect discretion. They expect a moment that could not have belonged to anyone
                  else.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link
                  to="/about"
                  className="mt-10 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline"
                >
                  Our Story
                  <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink-900 py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center lg:text-left">
                  <div className="font-serif text-5xl lg:text-6xl text-cream-50">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-3 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured Events"
              subtitle="A glimpse into recent celebrations that define the LUMORA standard."
            />
            <Reveal delay={0.2}>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline"
              >
                View All Projects
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'The Santorini Vows',
                category: 'Destination Wedding',
                image:
                  'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: 'Maison Lumière Launch',
                category: 'Brand Launch',
                image:
                  'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: 'The Golden Jubilee',
                category: 'Private Event',
                image:
                  'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
            ].map((event, i) => (
              <Reveal key={event.title} delay={i * 0.15}>
                <Link to="/portfolio" className="group block">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                        {event.category}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-cream-50">{event.title}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 lg:py-40 bg-cream-100">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="What We Do"
            title="A Studio of Many Disciplines"
            subtitle="From intimate weddings to stadium-scale productions, every engagement is approached with the same standard of craft."
            align="center"
            className="max-w-3xl"
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10">
            {SERVICES.slice(0, 6).map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block bg-cream-50 p-10 h-full transition-all duration-500 hover:bg-ink-900"
                  >
                    <Icon
                      size={28}
                      className="text-gold transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.2}
                    />
                    <h3 className="mt-8 font-serif text-2xl text-ink-900 group-hover:text-cream-50 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-sans text-sm text-ink-900/60 group-hover:text-cream-50/60 transition-colors duration-500 leading-relaxed">
                      {service.tagline}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-ink-900 group-hover:text-gold transition-colors duration-500">
                      Explore
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <Link to="/services" className="btn-outline">
                All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="How We Work"
            title="The LUMORA Process"
            subtitle="Six chapters, from first conversation to lasting memory."
            align="center"
            className="max-w-3xl"
          />

          <div className="mt-24 relative">
            <div className="absolute left-0 right-0 top-0 h-px bg-ink-900/10 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.1}>
                  <div className="relative">
                    <div className="hidden lg:block w-3 h-3 bg-gold rounded-full -mt-1.5 relative z-10" />
                    <div className="font-serif text-5xl text-gold/30 mt-4 lg:mt-8">{step.number}</div>
                    <h3 className="mt-4 font-serif text-xl text-ink-900">{step.title}</h3>
                    <p className="mt-3 font-sans text-sm text-ink-900/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-40 bg-ink-900">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="In Their Words"
            title="What Our Clients Say"
            light
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-50/10">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <div className="bg-ink-900 p-10 lg:p-12 h-full flex flex-col">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="mt-8 font-serif text-xl lg:text-2xl text-cream-50/90 leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-cream-50/10">
                    <div className="font-sans text-sm text-cream-50">{t.author}</div>
                    <div className="mt-1 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold/70">
                      {t.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <Link to="/testimonials" className="btn-gold">
                Read All Testimonials
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="The Feed"
            title="Moments, Captured"
            subtitle="A living archive of the celebrations we have been entrusted with."
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
            {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
              <Reveal key={i} delay={(i % 6) * 0.05}>
                <div className="group relative aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/30 transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST BLOGS */}
      <section className="py-24 lg:py-40 bg-cream-100">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="The Journal"
              title="Latest Writings"
              subtitle="Reflections on the craft of celebration, from the LUMORA studio."
            />
            <Reveal delay={0.2}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline"
              >
                All Articles
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-ink-900 group-hover:text-gold transition-colors duration-500">
                      {post.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm text-ink-900/60 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/80" />
        </div>
        <div className="relative container-luxury text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow-light">Begin</span>
              <span className="h-px w-8 bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-display text-cream-50 text-balance max-w-4xl mx-auto">
              Let us craft something extraordinary, together.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-serif text-xl text-cream-50/70 max-w-2xl mx-auto">
              Every great celebration begins with a conversation. We would be honored to have ours
              with you.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-cream-50 text-ink-900 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-gold group"
            >
              Request a Consultation
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/Reveal';
import { SERVICES } from '../data/content';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div className="bg-cream-50">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        </div>
        <div className="relative container-wide pb-20 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <Icon size={20} className="text-gold" strokeWidth={1.2} />
            <span className="eyebrow-light">{service.tagline}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 font-serif text-hero text-cream-50 text-shadow-luxury text-balance"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 font-serif text-xl md:text-2xl text-cream-50/80 max-w-2xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="eyebrow">The Approach</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-serif text-3xl text-ink-900 leading-tight">
                  A practice, not a package.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.2}>
                <p className="font-serif text-2xl text-ink-900/80 leading-relaxed">
                  We do not offer {service.title.toLowerCase()} as a product. We offer it as a
                  collaboration — one that begins with your story and ends with a moment that
                  belongs to no one else.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-8 font-sans text-base text-ink-900/60 leading-relaxed">
                  Every {service.title.toLowerCase().replace(/s$/, '')} we design is approached as a
                  first. We bring our experience, but never our assumptions. We bring our network,
                  but never our habits. The result is an event that feels, to you and to your
                  guests, like it could only have been made for you.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="What's Included"
            title="The Scope of Our Craft"
            light
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-50/10">
            {service.highlights.map((highlight, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="bg-ink-900 p-10 h-full flex items-start gap-4">
                  <Check size={18} className="text-gold shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="font-serif text-lg text-cream-50/90">{highlight}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-24 lg:py-40">
        <div className="container-wide">
          <SectionHeading
            eyebrow="In Practice"
            title="A Glimpse of the Work"
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
            {[
              service.image,
              'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="container-luxury text-center">
          <Reveal>
            <h2 className="font-serif text-display text-ink-900 text-balance max-w-3xl mx-auto">
              Imagine your {service.title.toLowerCase().replace(/s$/, '')}.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif text-xl text-ink-900/60 max-w-xl mx-auto">
              Then let us build it together.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-10 btn-primary">
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NEXT SERVICE */}
      <section className="border-t border-ink-900/10">
        <Link
          to={`/services/${nextService.slug}`}
          className="group block py-16 lg:py-20 container-luxury"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                Next Service
              </div>
              <h3 className="mt-3 font-serif text-3xl lg:text-4xl text-ink-900 group-hover:text-gold transition-colors duration-500">
                {nextService.title}
              </h3>
            </div>
            <ArrowRight
              size={32}
              className="text-ink-900 group-hover:text-gold group-hover:translate-x-2 transition-all duration-500"
            />
          </div>
        </Link>
      </section>

      {/* BACK LINK */}
      <div className="pb-16">
        <div className="container-luxury">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900/60 hover:text-ink-900 transition-colors"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>
        </div>
      </div>
    </div>
  );
}

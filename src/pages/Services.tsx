import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero, { CTAButton } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="What We Do"
        title="Services"
        subtitle="Twelve disciplines, one standard. Every engagement is approached as a unique composition — never repeated, never templated."
        image="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=2000"
      >
        <CTAButton to="/contact" label="Begin a Conversation" />
      </PageHero>

      {/* SERVICES LIST - editorial alternating layout */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="flex flex-col gap-24 lg:gap-40">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const reversed = i % 2 === 1;
              return (
                <Reveal key={service.slug}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                      reversed ? 'lg:[direction:rtl]' : ''
                    }`}
                  >
                    <div className={`lg:col-span-7 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                      <Link to={`/services/${service.slug}`} className="group block relative overflow-hidden aspect-[16/10]">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-ink-900/20 group-hover:bg-ink-900/10 transition-all duration-700" />
                        <div className="absolute top-6 right-6 w-12 h-12 bg-cream-50/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                          <ArrowUpRight size={18} className="text-ink-900" />
                        </div>
                      </Link>
                    </div>
                    <div className={`lg:col-span-5 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3">
                        <Icon size={20} className="text-gold" strokeWidth={1.2} />
                        <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                          {String(i + 1).padStart(2, '0')} — {service.tagline}
                        </span>
                      </div>
                      <h2 className="mt-6 font-serif text-display text-ink-900 text-balance">
                        {service.title}
                      </h2>
                      <p className="mt-6 font-sans text-base text-ink-900/60 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="mt-8 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline"
                      >
                        Explore {service.title}
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="container-luxury text-center">
          <Reveal>
            <h2 className="font-serif text-display text-cream-50 text-balance max-w-3xl mx-auto">
              Not sure which service fits your vision?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif text-xl text-cream-50/70 max-w-xl mx-auto">
              Every great event begins with a conversation. Tell us what you are imagining.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-10 btn-gold">
              Request a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

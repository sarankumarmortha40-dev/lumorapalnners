import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero, { CTAButton } from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';
import { INDUSTRIES } from '../data/content';

export default function Industries() {
  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Who We Serve"
        title="Industries"
        subtitle="From private individuals to heads of state, from heritage maisons to global universities — we design for those who expect more than execution."
        image="https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=2000"
      >
        <CTAButton to="/contact" label="Begin a Conversation" />
      </PageHero>

      {/* INDUSTRIES GRID - alternating editorial layout */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="flex flex-col gap-20 lg:gap-32">
            {INDUSTRIES.map((industry, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={industry.title}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                      reversed ? 'lg:[direction:rtl]' : ''
                    }`}
                  >
                    <div className={`lg:col-span-7 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="relative overflow-hidden aspect-[16/10] group">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 font-serif text-7xl text-cream-50/40">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    <div className={`lg:col-span-5 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-gold" />
                        <span className="eyebrow">Sector {String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h2 className="mt-6 font-serif text-4xl text-ink-900 text-balance">
                        {industry.title}
                      </h2>
                      <p className="mt-6 font-serif text-xl text-ink-900/70 leading-relaxed">
                        {industry.description}
                      </p>
                      <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline"
                      >
                        Discuss Your Event
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
          <SectionHeading
            eyebrow="Your Sector"
            title="Not listed here?"
            subtitle="If your event demands extraordinary execution, it is within our practice. Reach out and we will tell you how we would approach it."
            light
            align="center"
            className="max-w-2xl"
          />
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

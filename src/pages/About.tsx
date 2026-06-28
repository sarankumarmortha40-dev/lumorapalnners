import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Gem } from 'lucide-react';
import PageHero, { CTAButton } from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';
import Counter from '../components/Counter';
import { STATS, TEAM, AWARDS, TIMELINE, VALUES } from '../data/content';

export default function About() {
  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Our Story"
        title="A house devoted to celebration"
        subtitle="Since 2007, LUMORA has designed the world's most extraordinary events — not as a service, but as a practice."
        image="images\\brand.jpg"
      >
        <CTAButton to="/contact" label="Work With Us" />
      </PageHero>

      {/* STORY */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="eyebrow">The Beginning</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-serif text-display text-ink-900 text-balance">
                  From a single studio to a global practice.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.2}>
                <p className="font-serif text-xl text-ink-900/80 leading-relaxed">
                  LUMORA began in 2007, in a single studio in Paris, with one principle: that an
                  event should not be planned, but composed.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 font-sans text-base text-ink-900/60 leading-relaxed">
                  Our founder, Isabella Moreau, had spent a decade in hospitality in Lausanne and
                  Paris, watching celebrations be reduced to checklists. She believed something had
                  been lost — the belief that a great event is an act of authorship, not logistics.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-6 font-sans text-base text-ink-900/60 leading-relaxed">
                  Eighteen years later, that belief has carried us to forty-two countries and over
                  eight hundred and fifty events. But the principle has not changed. We still
                  compose. We still author. We still believe that a celebration, done with
                  intention, can become a memory that outlasts a lifetime.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-cream-50/10">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'To be the world\'s most trusted name in luxury event design — not by scale, but by the standard of craft we bring to every celebration, however intimate or grand.',
              },
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To author experiences that honor the significance of the moment. To hold every client\'s trust as sacred. To prove that discretion and spectacle are not opposites, but partners.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.15}>
                  <div className="bg-ink-900 p-12 lg:p-16 h-full">
                    <Icon size={32} className="text-gold" strokeWidth={1.2} />
                    <h3 className="mt-8 font-serif text-3xl text-cream-50">{item.title}</h3>
                    <p className="mt-6 font-serif text-xl text-cream-50/70 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="What We Believe"
            title="Core Values"
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.1}>
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 border border-gold/40 flex items-center justify-center">
                      <Gem size={20} className="text-gold" strokeWidth={1.2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink-900">{value.title}</h3>
                    <p className="mt-4 font-sans text-base text-ink-900/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-cream-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-serif text-5xl lg:text-6xl text-ink-900">
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

      {/* TEAM */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="The People"
            title="Our Team"
            subtitle="A small, dedicated studio of designers, producers, and strategists — each a master of their discipline."
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ink-900">{member.name}</h3>
                  <div className="mt-1 text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                    {member.role}
                  </div>
                  <p className="mt-4 font-sans text-sm text-ink-900/60 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & Achievements"
            light
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-20 max-w-4xl mx-auto">
            {AWARDS.map((award, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center justify-between py-6 border-b border-cream-50/10 group">
                  <div className="flex items-center gap-8">
                    <span className="font-serif text-2xl text-gold/50 group-hover:text-gold transition-colors duration-500">
                      {award.year}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-cream-50">{award.title}</h3>
                      <p className="mt-1 text-xs font-sans text-cream-50/50 uppercase tracking-ultra-wide-sm">
                        {award.organization}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Gem size={18} strokeWidth={1.2} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 lg:py-40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="The Journey"
            title="Eighteen Years, In Chapters"
            align="center"
            className="max-w-3xl"
          />
          <div className="mt-24 max-w-3xl mx-auto">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className="relative pl-12 pb-16 last:pb-0">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gold rounded-full" />
                  {i < TIMELINE.length - 1 && (
                    <div className="absolute left-[5px] top-5 bottom-0 w-px bg-ink-900/10" />
                  )}
                  <div className="font-serif text-4xl text-gold/40">{item.year}</div>
                  <h3 className="mt-3 font-serif text-2xl text-ink-900">{item.title}</h3>
                  <p className="mt-3 font-sans text-base text-ink-900/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Behind the scenes"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Behind The Scenes"
                title="The work no one sees"
                subtitle="Every effortless celebration is the product of months of invisible labor — the rehearsals, the measurements, the 3 a.m. adjustments that no guest will ever know about."
              />
              <Reveal delay={0.2}>
                <p className="mt-8 font-sans text-base text-ink-900/60 leading-relaxed">
                  Our studio operates like a theatre company in production. Designers, producers,
                  and technicians work in concert, each responsible for a discipline, all answerable
                  to a single creative vision. The result, on the day, is an event that feels less
                  like a production and more like a moment that was always meant to happen.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link to="/portfolio" className="mt-10 btn-outline">
                  See The Results
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

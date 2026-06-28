import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';

const EVENT_TYPES = [
  'Luxury Wedding',
  'Destination Wedding',
  'Corporate Event',
  'Product Launch',
  'Brand Launch',
  'Private Event',
  'Concert',
  'Fashion Show',
  'Exhibition',
  'Government Event',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Begin"
        title="Contact"
        subtitle="Every great celebration begins with a conversation. We would be honored to have ours with you."
        image="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      {/* CONTACT FORM + INFO */}
      <section className="py-24 lg:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* INFO */}
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="The Studio"
                title="Reach Us"
                subtitle="Our doors, our lines, and our attention are always open to you."
              />
              <div className="mt-12 space-y-8">
                {[
                  { icon: MapPin, label: 'Studio', value: 'Level 5, Prestige Tower, MG Road, Bengaluru 560001, India' },
                  { icon: Phone, label: 'Telephone', value: '+91 98765 43210' },
                  { icon: Mail, label: 'Email', value: 'studio@lumoraplanners.com' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-gold" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                            {item.label}
                          </div>
                          <p className="mt-1 font-serif text-lg text-ink-900">{item.value}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.4}>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-3 px-6 py-4 bg-ink-900 text-cream-50 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-gold hover:text-ink-900"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </Reveal>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7 lg:col-start-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-ink-900 p-12 lg:p-16 h-full flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <div className="w-16 h-16 border border-gold flex items-center justify-center">
                    <Check size={28} className="text-gold" />
                  </div>
                  <h3 className="mt-8 font-serif text-3xl text-cream-50">Thank you.</h3>
                  <p className="mt-4 font-serif text-xl text-cream-50/70 max-w-md">
                    Your message has reached our studio. A member of our team will respond within
                    two business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' });
                    }}
                    className="mt-10 text-xs font-sans uppercase tracking-ultra-wide-sm text-gold link-underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <Reveal delay={0.2}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Full Name" required>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={update('name')}
                          className="form-input"
                          placeholder="Your name"
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update('email')}
                          className="form-input"
                          placeholder="you@example.com"
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Phone">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={update('phone')}
                          className="form-input"
                          placeholder="+91..."
                        />
                      </Field>
                      <Field label="Event Type">
                        <select value={form.eventType} onChange={update('eventType')} className="form-input">
                          <option value="">Select type</option>
                          {EVENT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Event Date">
                        <input
                          type="date"
                          value={form.date}
                          onChange={update('date')}
                          className="form-input"
                        />
                      </Field>
                      <Field label="Estimated Guests">
                        <input
                          type="number"
                          min="1"
                          value={form.guests}
                          onChange={update('guests')}
                          className="form-input"
                          placeholder="100"
                        />
                      </Field>
                    </div>
                    <Field label="Tell Us About Your Vision" required>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        className="form-input resize-none"
                        placeholder="Share what you are imagining..."
                      />
                    </Field>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Send Message
                      <Send size={16} />
                    </button>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24 lg:pb-32">
        <div className="container-wide">
          <Reveal>
            <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-ink-900">
              <iframe
                title="LUMORA Studio Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.593%2C12.970%2C77.603%2C12.978&layer=mapnik&marker=12.974%2C77.598"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 bg-cream-50 p-6 max-w-xs">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gold" />
                  <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                    The Studio
                  </span>
                </div>
                <p className="mt-3 font-serif text-lg text-ink-900">
                  Prestige Tower, MG Road
                  <br />
                  Bengaluru 560001, India
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.875rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(17,17,17,0.2);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #111111;
          transition: border-color 0.4s;
        }
        .form-input:focus {
          outline: none;
          border-bottom-color: #D4AF37;
        }
        .form-input::placeholder {
          color: rgba(17,17,17,0.35);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-ink-900/60">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

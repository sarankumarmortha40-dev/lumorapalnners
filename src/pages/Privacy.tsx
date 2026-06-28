import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';

const SECTIONS = [
  {
    title: '1. Introduction',
    body: 'This Privacy Policy explains how LUMORA PLANNERS ("we," "us," or "our") collects, uses, and protects information obtained from users of our website and services. We are committed to safeguarding the privacy of our clients and visitors.',
  },
  {
    title: '2. Information We Collect',
    body: 'We collect information you provide directly to us, including name, email address, telephone number, event details, and any correspondence you share with our studio. We may also collect anonymous analytics data about how visitors use our website.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We use the information we collect to respond to inquiries, plan and execute events, provide our services, communicate with you about your event, and improve our website and offerings. We never sell your information to third parties.',
  },
  {
    title: '4. Information Sharing',
    body: 'We share information only with vendors and partners directly involved in executing your event, and only to the extent necessary. All such partners are bound by confidentiality agreements. We do not share your information for marketing purposes.',
  },
  {
    title: '5. Data Security',
    body: 'We implement industry-standard security measures to protect your information. Access is restricted to authorized personnel only. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Cookies',
    body: 'Our website may use cookies to enhance user experience and collect anonymous analytics. You may configure your browser to refuse cookies, though some features of the site may not function properly as a result.',
  },
  {
    title: '7. Your Rights',
    body: 'You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at studio@lumoraplanners.com.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.',
  },
  {
    title: '9. Contact Us',
    body: 'If you have questions about this Privacy Policy, please contact us at studio@lumoraplanners.com or at our studio address: Prestige Tower, MG Road, Bengaluru 560001, India.',
  },
];

export default function Privacy() {
  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your trust is the foundation of our practice. This policy explains how we protect it."
        image="https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <section className="py-24 lg:py-32">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="font-serif text-xl text-ink-900/60 mb-12">
                Last updated: June 2024
              </p>
            </Reveal>
            <div className="space-y-12">
              {SECTIONS.map((section, i) => (
                <Reveal key={i} delay={i * 0.03}>
                  <div>
                    <h2 className="font-serif text-2xl text-ink-900">{section.title}</h2>
                    <p className="mt-4 font-sans text-base text-ink-900/60 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

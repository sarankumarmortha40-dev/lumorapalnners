import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using the LUMORA PLANNERS website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.',
  },
  {
    title: '2. Services',
    body: 'LUMORA PLANNERS provides luxury event planning and experience design services. The specific scope of each engagement is defined in a separate agreement between LUMORA and the client. These Terms govern use of our website and general engagement.',
  },
  {
    title: '3. Intellectual Property',
    body: 'All content on this website, including text, graphics, logos, images, and design, is the property of LUMORA PLANNERS and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.',
  },
  {
    title: '4. Client Responsibilities',
    body: 'Clients agree to provide accurate information, timely responses, and agreed-upon payments. Clients are responsible for ensuring that all information provided for event planning is accurate and complete.',
  },
  {
    title: '5. Payment Terms',
    body: 'Payment schedules, deposits, and fees are outlined in individual service agreements. Deposits are non-refundable. Final payments are due according to the schedule specified in your agreement.',
  },
  {
    title: '6. Cancellation',
    body: 'Cancellation policies are specified in individual service agreements. In the event of cancellation, any costs already incurred on behalf of the client will be payable by the client.',
  },
  {
    title: '7. Confidentiality',
    body: 'We maintain strict confidentiality regarding all client information, event details, and personal data. Our confidentiality obligations are outlined in our Privacy Policy and individual service agreements.',
  },
  {
    title: '8. Limitation of Liability',
    body: 'LUMORA PLANNERS is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific engagement in question.',
  },
  {
    title: '9. Governing Law',
    body: 'These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of Bengaluru, India, unless otherwise specified in your service agreement.',
  },
  {
    title: '10. Contact',
    body: 'For questions about these Terms, please contact us at studio@lumoraplanners.com or at our studio address: Prestige Tower, MG Road, Bengaluru 560001, India.',
  },
];

export default function Terms() {
  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The terms that govern our work together, and the use of this website."
        image="https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=2000"
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

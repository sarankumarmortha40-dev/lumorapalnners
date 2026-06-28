import {
  Crown,
  Plane,
  Building2,
  Image as ImageIcon,
  Landmark,
  GraduationCap,
  Shirt,
  Music,
  Cake,
  Sparkles,
  Rocket,
  Megaphone,
} from 'lucide-react';

export const SERVICES = [
  {
    slug: 'luxury-weddings',
    title: 'Luxury Weddings',
    tagline: 'Where forever begins in splendor',
    description:
      'Bespoke wedding experiences crafted for couples who imagine a celebration beyond tradition — every petal, every note, every moment composed with intention.',
    icon: Crown,
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Full-service design and production',
      'Venue sourcing across 40+ countries',
      'Bespoke floral architecture',
      'Private chef and sommelier curation',
      'Guest experience management',
      'Live entertainment direction',
    ],
  },
  {
    slug: 'destination-weddings',
    title: 'Destination Weddings',
    tagline: 'Love, written across the map',
    description:
      'From cliffside villas in Santorini to private islands in the Maldives, we transform distant horizons into the stage for your most intimate celebration.',
    icon: Plane,
    image:
      'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Global venue acquisition',
      'Travel and accommodation logistics',
      'Local cultural integration',
      'Multi-day itinerary design',
      'On-site guest concierge',
      'Legal and documentation support',
    ],
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    tagline: 'Where business meets ceremony',
    description:
      'Galas, conferences, and leadership summits designed to reflect the stature of your brand — precise, polished, and unforgettable.',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Brand-aligned environment design',
      'Executive protocol management',
      'Stage and AV production',
      'Delegate hospitality',
      'Awards and recognition ceremonies',
      'Post-event engagement strategy',
    ],
  },
  {
    slug: 'exhibitions',
    title: 'Exhibitions',
    tagline: 'Stories told in space',
    description:
      'Immersive exhibition design that transforms pavilions and galleries into journeys — where every visitor leaves having witnessed something rare.',
    icon: ImageIcon,
     image: 
     "/images/horizon.jpg",
    highlights: [
      'Concept and narrative development',
      'Spatial design and wayfinding',
      'Interactive and digital installations',
      'Lighting and soundscapes',
      'Visitor flow optimization',
      'Press and media coordination',
    ],
  },
  {
    slug: 'government-events',
    title: 'Government Events',
    tagline: 'Occasions of state and significance',
    description:
      'Diplomatic summits, national ceremonies, and state functions managed with the discretion, protocol, and precision they demand.',
    icon: Landmark,
    image:
      'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Protocol and etiquette management',
      'Security and access coordination',
      'Dignitary hospitality',
      'Cultural performance curation',
      'International delegation logistics',
      'Confidential event handling',
    ],
  },
  {
    slug: 'college-festivals',
    title: 'College Festivals',
    tagline: 'Energy, engineered to scale',
    description:
      'Campus festivals and university celebrations that capture the spirit of a generation — produced with the standards of a world-class event.',
    icon: GraduationCap,
    image:
      "/images/college.jpg",
    highlights: [
      'Headliner artist booking',
      'Stage and crowd production',
      'Sponsorship and brand integration',
      'Multi-stage festival design',
      'Safety and crowd management',
      'Live broadcast and streaming',
    ],
  },
  {
    slug: 'fashion-shows',
    title: 'Fashion Shows',
    tagline: 'The runway, reimagined',
    description:
      'Runway productions for houses and designers who understand that a show is not a presentation — it is a statement.',
    icon: Shirt,
    image:
      "/images/fashion.jpg",
    highlights: [
      'Runway and set design',
      'Model casting and direction',
      'Lighting and sound choreography',
      'Front-of-house hospitality',
      'Press and influencer management',
      'Live stream and broadcast',
    ],
  },
  {
    slug: 'concerts',
    title: 'Concerts',
    tagline: 'Sound, sculpted into memory',
    description:
      'From intimate acoustic evenings to stadium-scale productions, we design concerts where the audience does not just listen — they live it.',
    icon: Music,
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Artist liaison and production',
      'Stage and rigging design',
      'Sound engineering and acoustics',
      'Ticketing and access control',
      'VIP and backstage hospitality',
      'Live broadcast coordination',
    ],
  },
  {
    slug: 'birthday-celebrations',
    title: 'Birthday Celebrations',
    tagline: 'A year, made eternal',
    description:
      'Milestone birthdays designed as personal narratives — intimate, grand, and entirely your own, from the first toast to the last dance.',
    icon: Cake,
    image:
      'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Thematic concept development',
      'Venue transformation',
      'Entertainment and surprise acts',
      'Cinematic documentation',
      'Guest experience curation',
      'Personalized gifting',
    ],
  },
  {
    slug: 'private-events',
    title: 'Private Events',
    tagline: 'Discretion, elevated to art',
    description:
      'Private gatherings for those who value privacy above all — managed with absolute confidentiality and uncompromising taste.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Confidential event management',
      'Private venue acquisition',
      'Discreet security and access',
      'Bespoke dining experiences',
      'Private entertainment',
      'NDA-bound vendor network',
    ],
  },
  {
    slug: 'product-launches',
    title: 'Product Launches',
    tagline: 'The moment a brand becomes an experience',
    description:
      'Launch events that turn a product reveal into a cultural moment — designed to be felt, shared, and remembered.',
    icon: Rocket,
    image:
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Reveal moment choreography',
      'Immersive brand environments',
      'Influencer and media strategy',
      'Live demonstration design',
      'Post-launch engagement',
      'Multi-city rollout production',
    ],
  },
  {
    slug: 'brand-launches',
    title: 'Brand Launches',
    tagline: 'When a name enters the world',
    description:
      'The debut of a brand is a once-in-a-lifetime event. We design it to be the moment the world takes notice.',
    icon: Megaphone,
    image:
      "/images/brand.jpg",
    highlights: [
      'Brand narrative staging',
      'Immersive identity experiences',
      'Curated guest lists',
      'Press and PR coordination',
      'Social and digital amplification',
      'Launch film production',
    ],
  },
];

export const INDUSTRIES = [
  {
    title: 'High-Net-Worth Individuals',
    description: 'Private celebrations crafted for those who have everything — and expect more.',
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Luxury Brands',
    description: 'Launches, activations, and experiences that match the stature of your maison.',
    image:
      'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Corporate Clients',
    description: 'Galas, summits, and ceremonies that reflect the precision of your enterprise.',
    image:
      "/images/corporate.jpg",
  },
  {
    title: 'Universities',
    description: 'Festivals and convocations produced to the standard of a world stage.',
    image:
      'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Celebrities',
    description: 'Discreet, spectacular events for those who live in the public eye.',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Government Organizations',
    description: 'State functions and national ceremonies managed with protocol and grace.',
    image:
      'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'International Clients',
    description: 'Cross-border celebrations with seamless global logistics.',
    image:
      'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Cultural Institutions',
    description: 'Exhibitions and galas that honor heritage while looking forward.',
    image:
      "images\\cultural.jpg",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'The Santorini Vows',
    category: 'Destination Wedding',
    year: '2024',
    location: 'Santorini, Greece',
    image:
      'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A four-day celebration across three private villas, uniting 180 guests from 14 countries above the Aegean Sea.',
  },
  {
    id: 2,
    title: 'Maison Lumière Launch',
    category: 'Brand Launch',
    year: '2024',
    location: 'Paris, France',
    image:
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'The debut of a heritage fragrance house, staged inside a transformed 18th-century hôtel particulier.',
  },
  {
    id: 3,
    title: 'The Apex Summit',
    category: 'Corporate Event',
    year: '2023',
    location: 'Dubai, UAE',
    image:
      "/images/corporate.jpg",
    description:
      'A leadership summit for 400 executives, featuring immersive brand environments and a private gala.',
  },
  {
    id: 4,
    title: 'Aurora Runway',
    category: 'Fashion Show',
    year: '2024',
    location: 'Milan, Italy',
    image:
      "/images/fashion.jpg",
    description:
      'A couture runway presentation during fashion week, with a sculpted set and 600 invited guests.',
  },
  {
    id: 5,
    title: 'The Golden Jubilee',
    category: 'Private Event',
    year: '2023',
    location: 'Lake Como, Italy',
    image:
      "/images/private.jpg",
    description:
      'A 50th birthday celebration across a private estate, featuring a surprise performance by a global artist.',
  },
  {
    id: 6,
    title: 'Horizon Exhibition',
    category: 'Exhibition',
    year: '2024',
    location: 'Singapore',
    image:
      "/images/horizon.jpg",
    description:
      'An immersive art exhibition spanning 2,000 square meters, with 12 interactive installations.',
  },
  {
    id: 7,
    title: 'The State Banquet',
    category: 'Government Event',
    year: '2023',
    location: 'New Delhi, India',
    image:
      'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A diplomatic banquet honoring a visiting head of state, managed with full protocol and security.',
  },
  {
    id: 8,
    title: 'Pulse Festival',
    category: 'College Festival',
    year: '2024',
    location: 'Mumbai, India',
    image:
      "/images/college.jpg",
    description:
      'A three-day campus festival with 15,000 attendees, four stages, and a headline international artist.',
  },
  {
    id: 9,
    title: 'The Velvet Concert',
    category: 'Concert',
    year: '2023',
    location: 'London, UK',
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'An intimate acoustic evening for 300 guests in a historic concert hall, with bespoke sound design.',
  },
];

export const GALLERY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Elegant wedding table setting',
    category: 'Weddings',
  },
  {
    src: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Destination wedding venue',
    category: 'Weddings',
  },
  {
    src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Corporate gala event',
    category: 'Corporate',
  },
  {
    src: 'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Formal banquet hall',
    category: 'Corporate',
  },
  {
    src: '/images/horizon.jpg',
    alt: 'Exhibition installation',
    category: 'Exhibitions',
  },
  {
    src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Concert stage lighting',
    category: 'Concerts',
  },
  {
    src: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Birthday celebration decor',
    category: 'Private',
  },
  {
    src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'University auditorium',
    category: 'Festivals',
  },
  {
    src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Luxury floral arrangement',
    category: 'Weddings',
  },
  {
    src: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Coastal celebration',
    category: 'Weddings',
  },
  {
    src: "/images/brand.jpg",
    alt: 'Brand launch event',
    category: 'Corporate',
  },
  {
    src: 'https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Gallery exhibition space',
    category: 'Exhibitions',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'LUMORA did not plan our wedding. They composed it. Every moment felt like it had been written for us, and only us. We have never felt more seen.',
    author: 'Aria & Daniel Mehrotra',
    role: 'Luxury Wedding, Lake Como',
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      'We have launched products on four continents. Nothing has come close to what LUMORA delivered in Paris. They did not host an event — they authored a moment.',
    author: 'Camille Rousseau',
    role: 'CMO, Maison Lumière',
    image:
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      'The discretion was absolute. The execution was flawless. As a family that values privacy above all, we trusted LUMORA completely, and they honored that trust.',
    author: 'Private Client',
    role: 'Private Estate Celebration',
    image:
      'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      'They managed a state banquet with the protocol of a foreign ministry and the taste of a fashion house. A rare combination. We will work with no one else.',
    author: 'Office of Protocol',
    role: 'Government Client',
    image:
      'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      'Our festival went from a campus tradition to a national headline. LUMORA brought production values we did not know were possible at this scale.',
    author: 'Dean of Student Affairs',
    role: 'University Festival',
    image:
      'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      'The runway they built for us in Milan was not a stage. It was a sculpture. The press is still writing about it six months later.',
    author: 'Alessandro Conti',
    role: 'Creative Director, Aurora',
    image:
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'art-of-the-luxury-wedding',
    title: 'The Art of the Luxury Wedding',
    excerpt:
      'What separates a wedding from a masterpiece is not the budget — it is the intention behind every decision.',
    category: 'Weddings',
    date: 'June 12, 2024',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'A luxury wedding is not defined by what is spent. It is defined by what is felt. The most extraordinary celebrations we have designed began not with a budget, but with a question: what do you want your guests to remember in twenty years?',
      'From that question, everything follows. The venue is not chosen for its prestige, but for its resonance with the couple. The flowers are not selected for their cost, but for their meaning. The menu is not composed to impress, but to tell a story — of heritage, of place, of the two lives being joined.',
      'The role of the planner, in this light, is not to execute a vision but to discover it. We spend weeks in conversation before a single vendor is approached. We learn the families, the histories, the quiet traditions that never appear on an invitation but shape the entire evening.',
      'Only then does design begin. And when it does, every element — from the weight of the napkin to the temperature of the room — is considered. This is what we mean by the art of the luxury wedding. Not excess, but intention. Not spectacle, but meaning.',
    ],
  },
  {
    slug: 'designing-for-discretion',
    title: 'Designing for Discretion',
    excerpt:
      'For the world\'s most private clients, the greatest luxury is not being seen. Here is how we design events around that principle.',
    category: 'Private Events',
    date: 'May 28, 2024',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Discretion is not the absence of design. It is the most demanding form of it. When a client values privacy above all, every decision must serve two masters: the experience of the guest, and the invisibility of the operation.',
      'This begins with venue selection. We work with a network of private estates, closed pavilions, and restricted-access properties that never appear in public listings. Access is controlled from the moment a guest receives their invitation.',
      'It extends to our vendor network. Every photographer, florist, and technician signs a binding confidentiality agreement before they are briefed. No images leave the event without written consent. No detail is shared beyond the team that needs it.',
      'The result is an event that exists only for those who were there. No press, no social media, no public record. Just a memory, held by the people who lived it. For some clients, that is the only luxury that matters.',
    ],
  },
  {
    slug: 'the-brand-launch-as-cultural-moment',
    title: 'The Brand Launch as Cultural Moment',
    excerpt:
      'A product launch is an event. A brand launch is a statement. The difference is the difference between being seen and being remembered.',
    category: 'Brand Strategy',
    date: 'May 10, 2024',
    readTime: '7 min read',
    image:
      "/images/brand.jpg",
    content: [
      'When a brand enters the world, it has one chance to define how it will be perceived. A launch is not a deadline — it is a debut. And like any debut, it is remembered for how it made people feel.',
      'We approach brand launches as narrative events. The venue becomes a stage for the brand\'s story. The guest list is curated not for reach, but for resonance. The reveal moment is choreographed with the precision of a theatrical performance.',
      'The most successful launches we have designed did not feel like events. They felt like discoveries. Guests left feeling they had witnessed the beginning of something — not a product, but a presence.',
      'That is the standard. Not attendance, but anticipation. Not coverage, but conversation. A brand launch should be the moment the world starts paying attention.',
    ],
  },
  {
    slug: 'destination-weddings-global-logistics',
    title: 'Destination Weddings: A Study in Global Logistics',
    excerpt:
      'Behind every effortless celebration abroad is a logistics operation that would humble a small embassy.',
    category: 'Destination Weddings',
    date: 'April 22, 2024',
    readTime: '9 min read',
    image:
      'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'A destination wedding appears effortless to the guest. That effortlessness is the product of months of coordination across borders, languages, and time zones.',
      'It begins with venue acquisition. We maintain relationships with private estates and boutique properties in over forty countries. Many of these venues are not publicly available — they are accessed through personal introductions and long-standing relationships.',
      'Then comes the logistics. Travel arrangements for hundreds of guests, often arriving from different continents. Customs documentation for equipment. Local permits for everything from fireworks to amplified music. Coordination with local authorities, vendors, and hospitality partners.',
      'And then, on the day, none of it is visible. The guest sees only a celebration unfolding in a beautiful place. That invisibility is the point. The logistics exist so that the experience can feel, to everyone present, like magic.',
    ],
  },
  {
    slug: 'the-future-of-event-design',
    title: 'The Future of Event Design',
    excerpt:
      'Technology is changing what is possible in physical space. Here is how we are thinking about the next decade of experience design.',
    category: 'Design',
    date: 'April 5, 2024',
    readTime: '10 min read',
    image:
      'https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'The next decade of event design will be defined by the fusion of physical and digital experience. Not screens on walls, but environments that respond to presence, that remember their guests, that unfold differently for each person who enters.',
      'We are already experimenting with spatial computing, projection mapping, and responsive soundscapes. But technology is never the point. The point is the feeling it makes possible — the sense that a space was designed, in this moment, for you.',
      'The future of luxury is not more technology. It is more intention. Technology simply gives us more tools to express that intention. A room that dims as the sun sets. A soundscape that shifts with the mood of the crowd. A reveal that happens not on cue, but in response.',
      'This is where we are headed. Toward events that are not staged, but alive.',
    ],
  },
  {
    slug: 'protocol-and-presence',
    title: 'Protocol and Presence: Government Events',
    excerpt:
      'Designing for heads of state requires a discipline that few planners possess. Here is what it takes.',
    category: 'Government Events',
    date: 'March 18, 2024',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'A government event is not a celebration. It is a ceremony of state. Every gesture, every sequence, every placement carries meaning that has been refined over centuries of diplomatic tradition.',
      'Our role is to honor that tradition while ensuring the event does not feel rigid. Protocol is not the enemy of warmth — it is the structure that allows warmth to exist without awkwardness. When everyone knows where to stand, what to say, and when to sit, the human moments can happen naturally.',
      'This requires a team that understands both worlds. We work with former protocol officers, cultural advisors, and security consultants. We study the traditions of every delegation we host. We rehearse sequences until they are second nature.',
      'The result is an event that feels, to the dignitary, like respect. And to every other guest, like ease. That balance is the art of the government event.',
    ],
  },
];

export const FAQS = [
  {
    question: 'What types of events does LUMORA plan?',
    answer:
      'We specialize in luxury weddings, destination weddings, corporate events, product and brand launches, college festivals, celebrity events, award ceremonies, concerts, exhibitions, government events, fashion shows, and private luxury parties. If it demands extraordinary execution, it is within our scope.',
  },
  {
    question: 'What is your typical budget range?',
    answer:
      'We work with a range of budgets, though our engagements typically begin at a level that allows for the production values our clients expect. We are transparent about costs from the first conversation and tailor every proposal to the scope of the celebration.',
  },
  {
    question: 'Do you plan events internationally?',
    answer:
      'Yes. We have produced events in over forty countries and maintain a network of venue partners, vendors, and local teams across Europe, Asia, the Middle East, and the Americas. Cross-border logistics are one of our specialties.',
  },
  {
    question: 'How far in advance should we book?',
    answer:
      'For weddings and large-scale events, we recommend booking twelve to eighteen months in advance. For corporate events and launches, six to nine months is typically sufficient. We do accommodate accelerated timelines for select engagements.',
  },
  {
    question: 'Can you work with our existing vendors?',
    answer:
      'Absolutely. We frequently collaborate with client-preferred vendors, florists, and venues. Our role is to orchestrate the entire experience, and we welcome partners who are already part of your vision.',
  },
  {
    question: 'How do you handle confidentiality?',
    answer:
      'Discretion is foundational to our practice. Every member of our team and our vendor network operates under binding confidentiality agreements. For high-profile clients, we offer additional layers of privacy protection, including NDA-bound crews and restricted-access events.',
  },
  {
    question: 'Do you offer partial planning services?',
    answer:
      'While we are primarily a full-service planning firm, we do offer design consultation and day-of coordination for select clients. We are happy to discuss a scope that fits your needs during our initial conversation.',
  },
  {
    question: 'How do we begin working with LUMORA?',
    answer:
      'Every engagement begins with a private consultation. Reach out through our contact page, and a member of our team will arrange a conversation at your convenience. From there, we develop a tailored proposal based on your vision and scope.',
  },
];

export const STATS = [
  { value: 850, suffix: '+', label: 'Events Crafted' },
  { value: 42, suffix: '', label: 'Countries Served' },
  { value: 18, suffix: '', label: 'Years of Mastery' },
  { value: 97, suffix: '%', label: 'Client Referrals' },
];

export const TEAM = [
  {
    name: 'Isabella Moreau',
    role: 'Founder & Creative Director',
    bio: 'Twenty years designing celebrations for the world\'s most discerning clients. Trained in hospitality in Lausanne, refined in Paris.',
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Rajiv Kapoor',
    role: 'Director of Production',
    bio: 'Former technical director for international tours. Brings stadium-scale precision to every event, regardless of size.',
    image:
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sophia Chen',
    role: 'Head of Design',
    bio: 'Background in spatial design and architecture. Believes every room tells a story before a single guest arrives.',
    image:
      'https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Marcus Aurelius',
    role: 'Director of Client Relations',
    bio: 'A career built on trust. Manages our most private engagements with the discretion they demand.',
    image:
      'https://images.pexels.com/photos/2604857/pexels-photo-2604857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const AWARDS = [
  { year: '2024', title: 'Event Planner of the Year', organization: 'Luxury Event Awards' },
  { year: '2024', title: 'Best Destination Wedding', organization: 'International Wedding Awards' },
  { year: '2023', title: 'Excellence in Corporate Events', organization: 'Global Event Summit' },
  { year: '2023', title: 'Creative Director of the Year', organization: 'Design Awards International' },
  { year: '2022', title: 'Best Luxury Brand Launch', organization: 'Brand Experience Awards' },
  { year: '2022', title: 'Outstanding Production Design', organization: 'Event Production Awards' },
];

export const TIMELINE = [
  {
    year: '2007',
    title: 'The Beginning',
    description:
      'Isabella Moreau founds LUMORA in a single studio in Paris, planning intimate weddings for a small circle of clients.',
  },
  {
    year: '2012',
    title: 'Going Global',
    description:
      'Our first international destination wedding in Santorini marks the beginning of a global practice spanning four continents.',
  },
  {
    year: '2016',
    title: 'Corporate Expansion',
    description:
      'We open our corporate events division, producing summits and galas for Fortune 500 clients across Europe and Asia.',
  },
  {
    year: '2019',
    title: 'Government Practice',
    description:
      'LUMORA is entrusted with its first state function, establishing a government and diplomatic events practice.',
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description:
      'We receive our first international awards, including Event Planner of the Year from the Luxury Event Awards.',
  },
  {
    year: '2024',
    title: '850 Events and Counting',
    description:
      'With over 850 events crafted across 42 countries, LUMORA stands among the world\'s most respected event design houses.',
  },
];

export const VALUES = [
  {
    title: 'Intention Over Excess',
    description:
      'Every decision serves the experience. We design with meaning, not with budget. Luxury is not what is spent — it is what is felt.',
  },
  {
    title: 'Discretion as Standard',
    description:
      'The trust our clients place in us is sacred. We protect their privacy, their stories, and their moments with absolute confidentiality.',
  },
  {
    title: 'Craft Without Compromise',
    description:
      'We hold ourselves to a standard that exceeds the client\'s expectation. The detail no one notices is the detail we obsess over.',
  },
  {
    title: 'Partnership, Not Service',
    description:
      'We do not serve clients. We partner with them. Their vision becomes our shared mission, and we carry it as our own.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We begin in conversation. Not about logistics, but about vision. We learn your story, your guests, and the feeling you want to create.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'From discovery, we develop a creative concept — a narrative spine that will guide every design decision that follows.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'The concept becomes tangible. Venue, palette, florals, menu, sound, light — every element is composed in service of the story.',
  },
  {
    number: '04',
    title: 'Production',
    description:
      'Our production team takes over, managing vendors, logistics, and timelines with the precision of a diplomatic operation.',
  },
  {
    number: '05',
    title: 'Execution',
    description:
      'On the day, you are a guest at your own event. Our team is invisible and omnipresent, ensuring every moment unfolds as designed.',
  },
  {
    number: '06',
    title: 'Legacy',
    description:
      'The event ends. The memory does not. We deliver documentation, film, and keepsakes that preserve the experience for years to come.',
  },
];

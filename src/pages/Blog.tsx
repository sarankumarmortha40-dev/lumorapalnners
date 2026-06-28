import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Reveal';
import { BLOG_POSTS } from '../data/content';

const CATEGORIES = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export default function Blog() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let result = BLOG_POSTS;
    if (filter !== 'All') result = result.filter((p) => p.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [filter, query]);

  const featured = BLOG_POSTS[0];

  return (
    <div className="bg-cream-50">
      <PageHero
        eyebrow="The Journal"
        title="Blog"
        subtitle="Reflections on the craft of celebration — from the studio, the field, and the moments in between."
        image="https://images.pexels.com/photos/2605538/pexels-photo-2605538.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      {/* FEATURED POST */}
      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                      Featured
                    </span>
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-ink-900/50">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="mt-6 font-serif text-4xl lg:text-5xl text-ink-900 group-hover:text-gold transition-colors duration-500 text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-6 font-serif text-xl text-ink-900/70 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-xs font-sans text-ink-900/50">
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span>{featured.readTime}</span>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline">
                    Read Article
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="pb-8">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 text-[11px] font-sans uppercase tracking-ultra-wide-sm border transition-all duration-500 ${
                    filter === cat
                      ? 'bg-ink-900 text-cream-50 border-ink-900'
                      : 'border-ink-900/20 text-ink-900/70 hover:border-ink-900 hover:text-ink-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-900/40"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 bg-transparent border border-ink-900/20 text-sm font-sans text-ink-900 placeholder:text-ink-900/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 lg:py-24">
        <div className="container-luxury">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-ink-900/50">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filtered.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.1}>
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
                        <span className="text-ink-900/50">{post.readTime}</span>
                      </div>
                      <h3 className="mt-4 font-serif text-2xl text-ink-900 group-hover:text-gold transition-colors duration-500 text-balance">
                        {post.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm text-ink-900/60 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 text-xs font-sans text-ink-900/40">{post.date}</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 lg:py-32 bg-ink-900">
        <div className="container-luxury text-center">
          <SectionHeading
            eyebrow="Stay Connected"
            title="The LUMORA Letter"
            subtitle="Occasional writings on the craft of celebration. No noise, no frequency promises — only when we have something worth saying."
            light
            align="center"
            className="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 px-5 py-4 bg-transparent border border-cream-50/20 text-sm font-sans text-cream-50 placeholder:text-cream-50/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-gold">
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

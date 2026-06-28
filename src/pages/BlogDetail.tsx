import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { BLOG_POSTS } from '../data/content';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  return (
    <div className="bg-cream-50">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        </div>
        <div className="relative container-luxury pb-20 pt-40 w-full">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow-light">{post.category}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-display text-cream-50 text-shadow-luxury max-w-4xl text-balance">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-6 text-xs font-sans text-cream-50/60">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-gold" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="py-20 lg:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <p className="font-serif text-2xl text-ink-900/80 leading-relaxed">
                {post.excerpt}
              </p>
            </Reveal>
            <div className="mt-12 space-y-8">
              {post.content.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="font-sans text-lg text-ink-900/70 leading-relaxed">{para}</p>
                </Reveal>
              ))}
            </div>

            {/* Share / back */}
            <div className="mt-16 pt-8 border-t border-ink-900/10 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900/60 hover:text-ink-900 transition-colors"
              >
                <ArrowLeft size={14} />
                All Articles
              </Link>
              <Link
                to={`/blog/${nextPost.slug}`}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-ultra-wide-sm text-ink-900 link-underline"
              >
                Next Article
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-luxury">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Continue Reading</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="text-[10px] font-sans uppercase tracking-ultra-wide-sm text-gold">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-ink-900 group-hover:text-gold transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm text-ink-900/60 leading-relaxed">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

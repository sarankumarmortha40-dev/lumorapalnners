import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-ink-900/70" />
      </div>

      <div className="relative container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow-light">Error 404</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h1 className="mt-8 font-serif text-[clamp(6rem,18vw,16rem)] text-cream-50 leading-none text-shadow-luxury">
            404
          </h1>
          <p className="mt-8 font-serif text-2xl md:text-3xl text-cream-50/80 max-w-xl mx-auto">
            The page you are looking for has drifted beyond the horizon.
          </p>
          <p className="mt-4 font-sans text-base text-cream-50/50 max-w-md mx-auto">
            It may have been moved, renamed, or never existed at all.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream-50 text-ink-900 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-gold"
            >
              <Home size={16} />
              Return Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-cream-50/30 text-cream-50 text-xs font-sans uppercase tracking-ultra-wide-sm transition-all duration-500 hover:bg-cream-50 hover:text-ink-900"
            >
              <ArrowLeft size={16} />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

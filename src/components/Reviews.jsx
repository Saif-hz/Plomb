import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Avis clients</h2>
        <p className="section-subtitle">
          Retours verifies apres intervention, avec ville et type de prestation.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -7, rotateX: 1, rotateY: 1 }}
              whileTap={{ scale: 0.995 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="card interactive-card group"
            >
              <div className="mb-3 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`${item.name}-${i}`}
                    size={16}
                    fill="currentColor"
                    className="review-star"
                    style={{ animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-700 transition group-hover:text-slate-800">
                "{item.text}"
              </p>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs">
                <p className="font-semibold text-brand-900">{item.name}</p>
                <span className="rounded-full bg-brand-50 px-2 py-1 font-semibold text-brand-700">{item.area}</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">Intervention: {item.job}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
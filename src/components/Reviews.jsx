import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

// Simple avatar generator
const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const getAvatarBg = (index) => {
  const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-purple-500'];
  return colors[index % colors.length];
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Avis clients</h2>
        <p className="section-subtitle">
          Des interventions réussies, des clients satisfaits. On vous a retenu.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: idx * 0.1 }}
              className="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="mb-3 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`${item.name}-${i}`}
                    size={16}
                    fill="currentColor"
                    className="text-orange-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed text-slate-700 mb-6 italic">
                "{item.text}"
              </p>

              {/* Reviewer Profile */}
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className={`${getAvatarBg(idx)} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {getInitials(item.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-brand-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.area}</p>
                  <p className="text-xs text-brand-600 font-medium">{item.job}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-brand-50 to-orange-50 rounded-3xl p-8 border border-brand-100 text-center"
        >
          <p className="text-slate-600 mb-3">Plus de <span className="font-bold text-2xl text-brand-900">4,8/5</span> en moyenne sur plus de <span className="font-bold text-brand-900">1800</span> interventions</p>
          <p className="text-sm text-slate-500">Les clients nous font confiance pour leur urgence. Vous aussi?</p>
        </motion.div>
      </div>
    </section>
  );
}
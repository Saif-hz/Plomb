import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Avant / apres: preuves terrain</h2>
        <p className="section-subtitle">
          Des cas reels pour juger notre niveau de finition et notre vitesse de resolution.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="card"
            >
              <h3 className="font-heading text-xl text-brand-900">{project.title}</h3>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <p className="rounded-xl border border-rose-100 bg-rose-50 p-3 text-rose-800">
                  <span className="block text-xs font-bold uppercase tracking-wide text-rose-700">
                    Avant
                  </span>
                  {project.before}
                </p>
                <ArrowRight className="mx-auto hidden text-brand-500 sm:block" size={18} />
                <p className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-800">
                  <span className="block text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Apres
                  </span>
                  {project.after}
                </p>
              </div>
              <p className="mt-4 rounded-xl border border-brand-100 bg-brand-50 p-3 text-sm font-semibold text-brand-800">
                Impact: {project.impact}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
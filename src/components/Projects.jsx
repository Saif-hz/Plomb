import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Avant / après : preuves terrain</h2>
        <p className="section-subtitle">
          Des cas réels pour juger notre niveau de finition, notre rapidité d'intervention et notre transparence.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="card border-2 border-slate-100 hover:border-accent-300 hover:shadow-xl"
            >
              <h3 className="font-heading text-2xl font-bold text-brand-900">{project.title}</h3>
              <img
                src={project.image}
                alt={`${project.title} — réalisation AquaChauffagiste`}
                className="mt-4 h-56 w-full rounded-xl object-cover shadow-md sm:h-64 img-bright"
                loading="lazy"
              />
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <p className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4 text-rose-900 font-semibold">
                  <span className="block text-xs font-bold uppercase tracking-wide text-rose-700">
                    Avant
                  </span>
                  {project.before}
                </p>
                <ArrowRight className="mx-auto hidden text-brand-500 sm:block" size={18} />
                <p className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4 text-emerald-900 font-semibold shadow-md">
                  <span className="block text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Après
                  </span>
                  {project.after}
                </p>
              </div>
              <p className="mt-4 rounded-xl border-2 border-brand-200 bg-gradient-to-r from-brand-50 to-accent-50 p-4 text-sm font-bold text-brand-900">
                Impact : {project.impact}
              </p>
              <div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-100 p-2">
                <img
                  src={project.proof}
                  alt="Preuve chantier après intervention"
                  className="h-20 w-20 rounded-lg object-cover img-bright"
                  loading="lazy"
                />
                <p className="text-xs text-slate-600">
                  Photo terrain conservée pour montrer la réalité de l'intervention.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { businessInfo, heroImage, quickProblems } from '../data';

export default function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden bg-heroGrid text-white">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(248,250,252,1)_100%)]" />
      <div className="section-shell relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-300 bg-accent-50/80 px-3 py-1.5 text-xs font-bold text-accent-700">
                ⚡ Plus rapide d'Orléans
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50/80 px-3 py-1.5 text-xs font-bold text-emerald-700">
                💰 Tarifs les plus compétitifs
              </span>
            </div>

            <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl mb-2">
              Plomberie & Chauffage
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-accent-300 mb-4">
              Intervention rapide, prix juste, 24h/24
            </p>

            <p className="mt-4 max-w-xl text-white/85 sm:text-lg leading-relaxed">
              Dépannage d'urgence, installation, rénovation. Tarif annoncé avant d'intervenir. Aucune surprise. Tous les Orleans vous connaissent dans le secteur, choisissez la rapidité et le prix justes.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 mb-8">
              <div className="rounded-lg bg-white/10 border border-white/20 p-3 text-center">
                <p className="text-xl font-bold text-accent-300">2-45 min</p>
                <p className="text-xs text-white/75 mt-1">selon zone</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/20 p-3 text-center">
                <p className="text-xl font-bold text-emerald-300">À partir de 90€</p>
                <p className="text-xs text-white/75 mt-1">prix transparents</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/20 p-3 text-center">
                <p className="text-xl font-bold text-blue-300">7j/7 24h/24</p>
                <p className="text-xs text-white/75 mt-1">toujours disponible</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="cta-pulse inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 font-bold text-white transition hover:bg-accent-600 sm:w-auto text-lg"
              >
                <PhoneCall size={20} />
                Appeler immédiatement
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/20 sm:w-auto text-lg"
              >
                <Send size={20} />
                Devis gratuit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="edge-glow rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur sm:p-6"
          >
            <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-soft sm:p-6">
              <img
                src={heroImage}
                alt="Installation chauffage realisee par AquaChauffagiste"
                className="mb-4 h-44 w-full rounded-xl object-cover"
              />
              <p className="text-sm font-semibold text-brand-700">Diagnostic express</p>
              <p className="mt-1 font-heading text-2xl text-brand-900 sm:text-3xl">Quel est votre probleme ?</p>
              <p className="mt-2 text-sm text-slate-600">Selectionnez votre situation pour etre contacte plus vite.</p>

              <div className="mt-5 space-y-3">
                {quickProblems.map((problem) => (
                  <a
                    key={problem.title}
                    href={problem.href}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3.5 transition hover:border-brand-300 hover:bg-brand-50"
                  >
                    <div>
                      <p className="text-sm font-semibold text-brand-900">{problem.title}</p>
                      <p className="text-xs text-slate-600">{problem.text}</p>
                    </div>
                    <ArrowRight size={16} className="text-brand-600 transition group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
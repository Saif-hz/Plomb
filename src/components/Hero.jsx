import { motion } from 'framer-motion';
import { ArrowRight, Clock3, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { quickProblems } from '../data';

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
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide sm:px-4 sm:text-xs">
              Plombier local premium - Lyon et metropole
            </p>
            <h1 className="font-heading text-3xl leading-tight sm:text-5xl lg:text-[3.55rem]">
              Un pepin de plomberie n attend pas. Nous non plus.
            </h1>
            <p className="mt-6 max-w-xl text-white/90 sm:text-lg">
              Depannage, installation et renovation avec un niveau de finition haut de gamme.
              Vous connaissez le prix avant intervention, toujours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+33472123456"
                className="cta-pulse inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-bold text-white transition hover:bg-accent-600 sm:w-auto"
              >
                <PhoneCall size={18} />
                Appeler maintenant
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20 sm:w-auto"
              >
                <Send size={18} />
                Demander un devis gratuit
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-semibold text-white/95">
                <Clock3 size={14} /> Arrivee moyenne en 45 min
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-semibold text-white/95">
                <ShieldCheck size={14} /> Prix annonces avant intervention
              </span>
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
              <p className="text-sm font-semibold text-brand-700">Diagnostic express</p>
              <p className="mt-1 font-heading text-2xl text-brand-900 sm:text-3xl">Quel est votre probleme ?</p>
              <p className="mt-2 text-sm text-slate-600">Choisissez votre situation pour etre rappelle plus vite.</p>

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
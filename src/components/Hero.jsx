import { motion } from 'framer-motion';
import { ArrowRight, Clock3, PhoneCall, Send, ShieldCheck, MessageCircle } from 'lucide-react';
import { businessInfo, heroImage, quickProblems } from '../data';

export default function Hero() {
  const whatsappMessage = encodeURIComponent('Bonjour, je souhaiterais une intervention pour mon problème de plomberie/chauffage.');
  const whatsappLink = `https://wa.me/33609217169?text=${whatsappMessage}`;

  return (
    <section className="mesh-bg relative overflow-hidden bg-heroGrid text-white">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(248,250,252,1)_100%)]" />
      <div className="section-shell relative pb-12 pt-6 sm:pb-24 sm:pt-10 lg:pb-28 lg:pt-12">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 sm:mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-500/20 px-3 py-1.5 text-xs font-bold text-amber-100 backdrop-blur-sm">
                ⚡ Intervention rapide à Orléans
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-500/20 px-3 py-1.5 text-xs font-bold text-amber-100 backdrop-blur-sm">
                💰 Tarifs les plus compétitifs
              </span>
            </div>

            <h1 className="mb-2 font-heading text-[1.7rem] leading-tight sm:text-5xl lg:text-6xl">
              Plombier Orléans &amp; Chauffagiste
            </h1>
            <p className="mb-3 text-base font-semibold text-accent-300 sm:mb-4 sm:text-2xl">
              Intervention rapide, prix juste, 24h/24
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-lg">
              Dépannage d'urgence, installation, rénovation. Tarif annoncé avant d'intervenir.
              Aucune surprise. Tout Orléans nous connaît&nbsp;: choisissez la rapidité et le prix juste.
            </p>

            {/* Stats — always 3 columns, compact on mobile */}
            <div className="mb-6 mt-6 grid grid-cols-3 gap-2 sm:mt-10 sm:mb-8 sm:gap-4">
              <div className="rounded-lg bg-white/10 border border-white/20 px-2 py-2.5 text-center backdrop-blur-sm sm:p-3">
                <p className="text-base font-bold text-accent-300 sm:text-xl">2-45 min</p>
                <p className="text-[10px] text-white/75 mt-0.5 sm:text-xs sm:mt-1">selon zone</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/20 px-2 py-2.5 text-center backdrop-blur-sm sm:p-3">
                <p className="text-base font-bold text-emerald-300 sm:text-xl">Dès 90 €</p>
                <p className="text-[10px] text-white/75 mt-0.5 sm:text-xs sm:mt-1">prix transparents</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/20 px-2 py-2.5 text-center backdrop-blur-sm sm:p-3">
                <p className="text-base font-bold text-blue-300 sm:text-xl">7j/7 24h/24</p>
                <p className="text-[10px] text-white/75 mt-0.5 sm:text-xs sm:mt-1">toujours dispo</p>
              </div>
            </div>

            {/* CTA buttons — phone + WhatsApp on mobile, + devis on desktop */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="cta-pulse inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-accent-600 sm:w-auto sm:py-4 sm:text-lg"
              >
                <PhoneCall size={20} />
                Appeler maintenant
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-green-700 sm:w-auto sm:py-4 sm:text-lg"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20 sm:w-auto sm:py-4 sm:text-lg backdrop-blur-sm"
              >
                <Send size={18} />
                Devis gratuit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="edge-glow rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur sm:p-6"
          >
            <div className="rounded-2xl bg-white p-4 text-slate-900 shadow-soft sm:p-6">
              <img
                src={heroImage}
                alt="Plombier chauffagiste professionnel à Orléans — intervention AquaChauffagiste"
                className="mb-4 h-44 w-full rounded-xl object-cover sm:h-56 img-bright"
                fetchPriority="high"
              />
              <p className="text-sm font-semibold text-brand-700">Diagnostic express</p>
              <p className="mt-1 font-heading text-xl text-brand-900 sm:text-3xl">Quel est votre problème ?</p>
              <p className="mt-1.5 text-xs text-slate-600 sm:text-sm sm:mt-2">Sélectionnez votre situation pour être contacté plus vite.</p>

              <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {quickProblems.map((problem) => (
                  <a
                    key={problem.title}
                    href={problem.href}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 px-3 py-3 transition hover:border-brand-300 hover:bg-brand-50 sm:px-4 sm:py-3.5"
                  >
                    <div>
                      <p className="text-sm font-semibold text-brand-900">{problem.title}</p>
                      <p className="text-xs text-slate-600">{problem.text}</p>
                    </div>
                    <ArrowRight size={16} className="text-brand-600 transition group-hover:translate-x-1 flex-shrink-0 ml-2" />
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
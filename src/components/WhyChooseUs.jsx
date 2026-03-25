import { motion } from 'framer-motion';
import { trustPoints } from '../data';

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 rounded-3xl bg-brand-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              Notre méthode
            </p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl">Un processus clair en 3 étapes</h2>
            <p className="mt-4 max-w-md text-white/85">
              Vous savez qui intervient, à quel prix et dans quel délai. Chaque étape est annoncée à l\'avance.
            </p>
            <ol className="mt-7 space-y-4 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <span className="rounded-full bg-white/15 px-2 py-0.5 font-semibold text-white">1</span>
                Appel ou formulaire: qualification du problème en moins de 3 minutes.
              </li>
              <li className="flex items-start gap-3">
                <span className="rounded-full bg-white/15 px-2 py-0.5 font-semibold text-white">2</span>
                Devis annoncé avant action, validation avec vous avant intervention.
              </li>
              <li className="flex items-start gap-3">
                <span className="rounded-full bg-white/15 px-2 py-0.5 font-semibold text-white">3</span>
                Réparation soignée, vérification finale, zone laissée propre.
              </li>
            </ol>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {trustPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.article
                  key={point.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5"
                >
                  <div className="inline-flex rounded-xl bg-white/15 p-2">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 font-heading text-xl">{point.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{point.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
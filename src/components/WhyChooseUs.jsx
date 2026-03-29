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
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold">Un processus clair en 3 étapes</h2>
            <p className="mt-4 max-w-md text-white/85">
              Vous savez qui intervient, à quel prix et dans quel délai. Chaque étape est annoncée à l'avance.
            </p>
            <ol className="mt-7 space-y-4 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 rounded-full bg-accent-500 px-3 py-0.5 font-bold text-white">1</span>
                Appel ou formulaire : qualification du problème en moins de 3 minutes.
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 rounded-full bg-accent-500 px-3 py-0.5 font-bold text-white">2</span>
                Devis annoncé avant action, validation avec vous avant intervention.
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 rounded-full bg-accent-500 px-3 py-0.5 font-bold text-white">3</span>
                Réparation soignée, vérification finale, zone laissée propre.
              </li>
            </ol>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {trustPoints.map((point, idx) => {
              const Icon = point.icon;
              const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-purple-500'];
              return (
                <motion.article
                  key={point.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/20 bg-white/10 p-6 hover:border-white/40 hover:bg-white/15 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                >
                  <div className={`inline-flex rounded-lg ${colors[idx % 4]} p-2.5 shadow-lg`}>
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
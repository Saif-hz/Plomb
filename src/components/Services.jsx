import { motion } from 'framer-motion';
import { useState } from 'react';
import { businessInfo, services } from '../data';

export default function Services() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = services[selectedIdx];
  const Icon = selected.icon;

  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="section-title">Interventions les plus demandées</h2>
          <p className="section-subtitle text-center mx-auto">
            Services spécialisés, prix justes, exécution soignée. Découvrez ce que nous offrons.
          </p>
        </div>

        {/* Service Selector Grid */}
        <div className="mb-8 grid grid-cols-2 gap-2.5 sm:mb-12 sm:gap-3 md:grid-cols-4">
          {services.map((service, idx) => {
            const SIcon = service.icon;
            return (
              <motion.button
                key={service.title}
                onClick={() => setSelectedIdx(idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-2xl border-2 p-3 transition-all duration-300 sm:p-4 ${
                  selectedIdx === idx
                    ? 'border-accent-500 bg-accent-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-brand-300'
                }`}
              >
                <SIcon
                  size={24}
                  className={`mx-auto mb-2 ${
                    selectedIdx === idx ? 'text-accent-600' : 'text-brand-600'
                  }`}
                />
                <p className={`text-xs sm:text-sm font-bold text-center line-clamp-2 ${
                  selectedIdx === idx ? 'text-brand-900' : 'text-slate-700'
                }`}>
                  {service.title}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Service View */}
        <motion.div
          key={selectedIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card interactive-card mx-auto max-w-4xl overflow-hidden rounded-3xl"
        >
          <div className="p-5 sm:p-8 lg:p-10">
            <div>
              <div className="mb-4 inline-flex rounded-2xl bg-brand-100 p-3 sm:mb-6 sm:p-4">
                <Icon size={30} className="text-brand-700 sm:h-9 sm:w-9" />
              </div>
              <h3 className="mb-2 font-heading text-2xl text-brand-900 sm:mb-3 sm:text-3xl">{selected.title}</h3>
              <p className="mb-5 text-base leading-relaxed text-slate-600 sm:mb-6 sm:text-lg">{selected.description}</p>

              <div className="mb-7 space-y-3 sm:mb-8">
                <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 sm:gap-3 sm:p-4">
                  <span className="text-xl font-bold text-emerald-600 sm:text-2xl">{selected.price}</span>
                  <span className="text-xs text-emerald-700 sm:text-sm">prix transparent</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-blue-200 bg-blue-50 p-3 sm:gap-3 sm:p-4">
                  <span className="text-base font-semibold text-blue-700 sm:text-lg">⏱ {selected.duration}</span>
                  <span className="text-xs text-blue-600 sm:text-sm">durée moyenne</span>
                </div>
              </div>

              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 py-3 text-base font-bold text-white transition hover:bg-accent-600 sm:py-4 sm:text-lg"
              >
                ☎️ Demander cette intervention
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
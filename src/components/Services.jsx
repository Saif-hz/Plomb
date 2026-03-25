import { motion } from 'framer-motion';
import { useState } from 'react';
import { businessInfo, services } from '../data';

export default function Services() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = services[selectedIdx];
  const Icon = selected.icon;

  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-shell">
        <div className="text-center mb-16">
          <h2 className="section-title">Interventions les plus demandées</h2>
          <p className="section-subtitle text-center mx-auto">
            Services spécialisés, prix justes, exécution soignée. Découvrez ce que nous offrons.
          </p>
        </div>

        {/* Service Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {services.map((service, idx) => {
            const SIcon = service.icon;
            return (
              <motion.button
                key={service.title}
                onClick={() => setSelectedIdx(idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-2xl p-4 transition-all duration-300 border-2 ${
                  selectedIdx === idx
                    ? 'border-accent-500 bg-accent-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-brand-300'
                }`}
              >
                <SIcon
                  size={28}
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
          className="card interactive-card rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 p-8 lg:p-10">
            <div>
              <div className="inline-flex rounded-2xl bg-brand-100 p-4 mb-6">
                <Icon size={36} className="text-brand-700" />
              </div>
              <h3 className="font-heading text-3xl text-brand-900 mb-3">{selected.title}</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">{selected.description}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-2xl font-bold text-emerald-600">{selected.price}</span>
                  <span className="text-sm text-emerald-700">prix transparent</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-lg font-semibold text-blue-700">⏱ {selected.duration}</span>
                  <span className="text-sm text-blue-600">durée moyenne</span>
                </div>
              </div>

              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-accent-500 text-white font-bold py-3 sm:py-4 transition hover:bg-accent-600 text-lg"
              >
                ☎️ Demander cette intervention
              </a>
            </div>

            <motion.img
              src={selected.image}
              alt={selected.title}
              className="h-80 w-full rounded-2xl object-cover shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
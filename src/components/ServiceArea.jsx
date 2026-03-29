import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { businessInfo, cities } from '../data';

export default function ServiceArea() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50/30 to-orange-50/40 p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="section-title">Zone d'intervention</h2>
            <p className="section-subtitle">
              Intervention rapide sur {businessInfo.city} et sa proche couronne. Un doute sur votre secteur ?
              Appelez-nous et nous confirmons immédiatement.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="rounded-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white px-4 py-3 text-sm font-bold text-emerald-900 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  {city} <span className="text-emerald-600 text-xs font-semibold block mt-1">✓ Dispo aujourd'hui</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 border border-white/10 p-8 text-white shadow-xl"
          >
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/30" />
            <div className="absolute right-11 top-11 h-18 w-18 rounded-full border border-white/40" />
            <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-accent-400/70" />
            <MapPin className="text-accent-400" size={28} />
            <h3 className="mt-4 font-heading text-3xl font-bold">Hub intervention {businessInfo.city}</h3>
            <p className="mt-2 text-sm text-white/85">{businessInfo.addressLine}, {businessInfo.postalCity}</p>
            <p className="mt-6 text-sm text-white/85">
              Cette implantation nous permet de réduire les délais d'arrivée et de couvrir les
              urgences sur toute la métropole.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-white/10 p-2">Selon zone</div>
              <div className="rounded-lg bg-white/10 p-2">Confirmé</div>
              <div className="rounded-lg bg-white/10 p-2">À l'appel</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Prestations les plus demandees</h2>
        <p className="section-subtitle">
          Des interventions pensees pour aller droit au resultat avec une execution propre.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
                whileTap={{ scale: 0.995 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="card interactive-card group"
              >
                <div className="service-icon-wrap inline-flex rounded-xl bg-brand-100 p-3 text-brand-700">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-heading text-xl text-brand-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <div className="mt-4 space-y-2">
                  <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {service.price}
                  </p>
                  <p className="text-xs text-slate-500">Duree moyenne: {service.duration}</p>
                </div>
                <a
                  href="tel:+33472123456"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition group-hover:gap-2 group-hover:text-brand-900"
                >
                  Demander cette intervention
                  <span aria-hidden="true">→</span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { workGallery } from '../data';

export default function WorkGallery() {
  return (
    <section className="py-8 sm:py-12">
      <div className="section-shell">
        <h3 className="font-heading text-2xl text-brand-900 sm:text-3xl">Galerie chantiers récents</h3>
        <p className="mt-2 text-sm text-slate-600">
          Exemples réels de nos installations plomberie et chauffage.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {workGallery.map((image, idx) => (
            <motion.figure
              key={`${image}-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <img
                src={image}
                alt="Photo chantier AquaChauffagiste"
                className="h-36 w-full object-cover transition duration-300 hover:scale-105 sm:h-44"
                loading="lazy"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

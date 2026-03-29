import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { workGallery } from '../data';

export default function WorkGallery() {
  const [lightbox, setLightbox] = useState(null);

  const groupedServiceImages = Object.values(
    import.meta.glob('../images/*/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
      eager: true,
      import: 'default',
    })
  );

  const allGalleryImages = [...workGallery, ...groupedServiceImages];

  return (
    <section className="py-8 sm:py-12">
      <div className="section-shell">
        <h3 className="font-heading text-2xl text-brand-900 sm:text-3xl">Galerie chantiers récents</h3>
        <p className="mt-2 text-sm text-slate-600">
          Exemples réels de nos installations plomberie et chauffage.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {allGalleryImages.map((image, idx) => (
            <motion.figure
              key={`${image}-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white"
              onClick={() => setLightbox(image)}
            >
              <img
                src={image}
                alt={`Photo chantier AquaChauffagiste n°${idx + 1}`}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-56 img-bright"
                loading="lazy"
              />
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Photo chantier agrandie"
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl img-bright"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}

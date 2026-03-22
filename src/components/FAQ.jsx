import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Questions frequentes avant intervention</h2>
        <p className="section-subtitle">
          Les reponses qui rassurent vos clients avant l appel: delais, prix, garanties, methodes.
        </p>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="edge-glow rounded-2xl bg-white/95 p-5 shadow-soft"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-lg text-brand-900 sm:text-xl">{item.question}</h3>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-700 transition ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

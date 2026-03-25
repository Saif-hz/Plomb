import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="section-title">Questions fréquentes avant intervention</h2>
        <p className="section-subtitle">
          Les réponses qui rassurent avant d'appeler: délais de réponse, tarification, garanties, procédures.
        </p>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={`rounded-2xl border-2 bg-white/98 p-6 shadow-soft transition-all duration-300 ${isOpen ? 'border-accent-300 bg-accent-50/30 shadow-md' : 'border-slate-100 hover:border-slate-200'}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left hover:text-accent-600 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-heading text-lg sm:text-xl font-semibold transition-colors ${isOpen ? 'text-accent-600' : 'text-brand-900'}`}>{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-accent-600' : 'text-slate-400'}`}
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
                      <p className="pt-4 text-sm leading-relaxed text-slate-700 font-medium">{item.answer}</p>
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

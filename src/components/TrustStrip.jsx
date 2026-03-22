import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { keyStats } from '../data';

function AnimatedStat({ target, suffix = '', decimals = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    let rafId;
    const startedAt = performance.now();

    const animate = (time) => {
      const elapsed = time - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = target * eased;
      setValue(start);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  return (
    <span>
      {value.toLocaleString('fr-FR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section className="-mt-8 pb-8 sm:-mt-12 sm:pb-10">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-soft backdrop-blur sm:grid-cols-2 lg:grid-cols-4 sm:p-5"
        >
          {keyStats.map((stat) => {
            return (
              <div key={stat.label} className="rounded-xl bg-slate-50/70 p-4">
                <p className="font-heading text-3xl text-brand-900 sm:text-4xl">
                  <AnimatedStat target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                <div className="mt-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-brand-400 to-accent-500" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

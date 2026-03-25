import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { businessInfo } from '../data';

const sectionActions = {
  services: { href: '#services', label: 'Voir services' },
  projects: { href: '#projects', label: 'Voir realisations' },
  reviews: { href: '#reviews', label: 'Voir les avis' },
  faq: { href: '#faq', label: 'Voir la FAQ' },
  contact: { href: '#contact', label: 'Remplir devis' },
};

export default function FloatingCallButton() {
  const [activeSection, setActiveSection] = useState('contact');

  useEffect(() => {
    const sectionIds = Object.keys(sectionActions);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const secondaryAction = useMemo(
    () => sectionActions[activeSection] || sectionActions.contact,
    [activeSection]
  );

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 gap-2 rounded-2xl border border-white/60 bg-white/95 p-2 shadow-xl backdrop-blur md:hidden">
      <a
        href={`tel:${businessInfo.phoneHref}`}
        className="cta-pulse inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-3 text-sm font-bold text-white"
        aria-label="Appeler maintenant"
      >
        <Phone size={16} />
        Appeler
      </a>
      <a
        href={secondaryAction.href}
        className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
      >
        {secondaryAction.label}
        <ArrowRight size={14} />
      </a>
    </div>
  );
}

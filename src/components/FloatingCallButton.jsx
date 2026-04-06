import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { businessInfo } from '../data';

const sectionActions = {
  services: { href: '#services', label: 'Voir services' },
  projects: { href: '#projects', label: 'Voir realisations' },
  reviews: { href: '#reviews', label: 'Voir les avis' },
  faq: { href: '#faq', label: 'Voir la FAQ' },
  contact: { href: '#contact', label: 'Devis gratuit' },
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

  const whatsappLink = 'https://wa.me/33609217169?text=' + encodeURIComponent('Bonjour, je souhaiterais une intervention pour mon problème de plomberie/chauffage.');

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex w-[calc(100%-1rem)] max-w-md -translate-x-1/2 gap-1.5 rounded-2xl border border-white/60 bg-white/95 p-1.5 shadow-xl backdrop-blur md:hidden">
      <a
        href={`tel:${businessInfo.phoneHref}`}
        className="cta-pulse inline-flex flex-[1.2] items-center justify-center gap-1.5 rounded-xl bg-accent-500 px-2.5 py-2.5 text-[13px] font-bold text-white"
        aria-label="Appeler maintenant"
      >
        <Phone size={15} />
        Appeler
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-600 px-2.5 py-2.5 text-[13px] font-bold text-white"
        aria-label="WhatsApp"
      >
        <MessageCircle size={15} />
        WhatsApp
      </a>
      <a
        href={secondaryAction.href}
        className="inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-xl bg-brand-900 px-2.5 py-2.5 text-[13px] font-bold text-white transition hover:bg-brand-800"
      >
        <span className="truncate">{secondaryAction.label}</span>
        <ArrowRight size={13} />
      </a>
    </div>
  );
}

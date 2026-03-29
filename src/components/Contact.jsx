import { PhoneCall, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { businessInfo } from '../data';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formsubmit.co/ajax/' + businessInfo.email, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent('Bonjour, je souhaiterais une intervention pour mon problème de plomberie/chauffage.');
  const whatsappLink = `https://wa.me/33609217169?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-14 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-6 rounded-3xl border border-brand-100 bg-white p-5 shadow-soft sm:gap-8 sm:p-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="section-title">Parlons de votre intervention</h2>
            <p className="section-subtitle">
              Décrivez le problème en 30 secondes. Un expert vous contactera rapidement.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 px-5 py-3 font-bold text-white transition hover:bg-brand-800 sm:w-auto"
              >
                <PhoneCall size={18} />
                {businessInfo.phoneDisplay}
              </a>
              <a
                href={`tel:${businessInfo.phoneHrefSecondary}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-300 bg-brand-50 px-5 py-3 font-bold text-brand-900 transition hover:bg-brand-100 sm:w-auto"
              >
                <PhoneCall size={18} />
                {businessInfo.phoneDisplaySecondary}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700 sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <MapPin size={16} className="text-brand-600 flex-shrink-0" />
                <span>{businessInfo.addressLine}, {businessInfo.postalCity}</span>
              </div>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-600 transition">
                <Mail size={16} className="text-brand-600 flex-shrink-0" />
                <span>{businessInfo.email}</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-emerald-800">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-emerald-800">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-emerald-800">Intervention rapide</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de contact">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nouvelle demande via le site AquaChauffagiste" />

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Nom</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Votre nom complet"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Téléphone</span>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Votre numéro de téléphone"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Email (optionnel)</span>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Votre adresse email"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Type de besoin</span>
              <select name="service_type" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white">
                <option value="">-- Sélectionnez --</option>
                <option>Entretien chaudière gaz</option>
                <option>Entretien annuel multi-énergies</option>
                <option>Dépannage chaudières (gaz, fioul, granulés, PAC)</option>
                <option>Installation chauffage / eau chaude</option>
                <option>Ballon d'eau chaude : dépannage, détartrage, installation</option>
                <option>Ramonage cheminée à bois (80 €)</option>
                <option>Recherche et réparation de fuites</option>
                <option>Débouchage canalisations</option>
                <option>Rénovation salle de bain</option>
                <option>Climatisation réversible</option>
                <option>Pompe à chaleur (PAC)</option>
                <option>Robinetterie et sanitaires</option>
                <option>Autre demande</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Message</span>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Décrivez votre problème"
              />
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-600">
              <input type="checkbox" name="callback_request" className="h-4 w-4 rounded border-slate-300" />
              Je souhaite être contacté au numéro fourni.
            </label>
            
            {submitStatus === 'success' && (
              <div className="rounded-xl bg-green-50 p-3 text-sm text-green-700 border border-green-200">
                ✓ Merci ! Nous vous recontacterons rapidement.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700 border border-red-200">
                Erreur lors de l'envoi. Essayez de nous appeler directement.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-accent-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-accent-600 disabled:opacity-60"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
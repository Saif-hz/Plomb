import { PhoneCall, MessageCircle } from 'lucide-react';
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

  const whatsappMessage = encodeURIComponent('Bonjour, je souhaiterais une intervention pour mon probleme de plomberie/chauffage.');
  const whatsappLink = `https://wa.me/33609217169?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="section-title">Parlons de votre intervention</h2>
            <p className="section-subtitle">
              Décrivez le problème en 30 secondes. Un expert vous contactera rapidement.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-900 px-5 py-3 font-bold text-white transition hover:bg-brand-800"
              >
                <PhoneCall size={18} />
                Appeler
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              Adresse: {businessInfo.addressLine}, {businessInfo.postalCity}
            </p>
            <p className="mt-2 text-sm text-slate-600">Email: {businessInfo.email}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li>Devis gratuit et sans engagement</li>
              <li>Aucun paiement en ligne requis</li>
              <li>Intervention rapide garantie</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de contact">
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
              <span className="mb-1 block text-sm font-semibold text-slate-700">Telephone</span>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Votre numero de telephone"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Type de besoin</span>
              <select name="service_type" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white">
                <option value="">-- Selectionnez --</option>
                <option>Urgence plomberie</option>
                <option>Debouchage</option>
                <option>Chauffe-eau</option>
                <option>Renovation salle de bain</option>
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
                ✓ Merci! Nous vous recontacterons rapidement.
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
              className="w-full rounded-full bg-accent-500 px-6 py-3 font-bold text-white transition hover:bg-accent-600 disabled:opacity-60"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
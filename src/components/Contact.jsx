import { PhoneCall, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
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
        <div className="grid gap-6 rounded-3xl border-2 border-brand-200 bg-gradient-to-br from-white via-white to-brand-50/50 p-5 shadow-lg sm:gap-8 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left side — contact info */}
          <div>
            <h2 className="section-title">Parlons de votre intervention</h2>
            <p className="section-subtitle">
              Décrivez le problème en 30 secondes. Un expert vous contactera rapidement.
            </p>

            {/* Phone buttons — stacked on mobile for full tap area */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 px-5 py-3.5 font-bold text-white transition hover:bg-brand-800 sm:w-auto"
              >
                <PhoneCall size={18} />
                {businessInfo.phoneDisplay}
              </a>
              <a
                href={`tel:${businessInfo.phoneHrefSecondary}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-300 bg-brand-50 px-5 py-3.5 font-bold text-brand-900 transition hover:bg-brand-100 sm:w-auto"
              >
                <PhoneCall size={18} />
                {businessInfo.phoneDisplaySecondary}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-3.5 font-bold text-white transition hover:bg-green-700 sm:w-auto"
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

            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 sm:px-3">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-[11px] font-semibold text-emerald-800 sm:text-xs">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 sm:px-3">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-[11px] font-semibold text-emerald-800 sm:text-xs">Sans engagement</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 sm:px-3">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-[11px] font-semibold text-emerald-800 sm:text-xs">Réponse rapide</span>
              </div>
            </div>
          </div>

          {/* Right side — Form */}
          <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-7">
            {/* Form header with urgency */}
            <div className="mb-5 flex items-center gap-3 rounded-xl bg-accent-50 border border-accent-200 px-4 py-3">
              <Clock size={18} className="text-accent-600 flex-shrink-0" />
              <p className="text-sm font-semibold text-accent-800">
                Réponse en moins de 30 minutes en moyenne
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-6 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-heading text-xl text-emerald-900 mb-2">Demande envoyée !</h3>
                <p className="text-sm text-emerald-700 mb-4">
                  Nous vous recontacterons dans les plus brefs délais.
                </p>
                <p className="text-xs text-emerald-600">
                  Besoin urgent ? Appelez directement le <a href={`tel:${businessInfo.phoneHref}`} className="font-bold underline">{businessInfo.phoneDisplay}</a>
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 rounded-full bg-emerald-600 px-5 py-2 text-sm font-bold text-white hover:bg-emerald-700 transition"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" aria-label="Formulaire de devis gratuit">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nouvelle demande via le site AquaChauffagiste" />
                {/* Honeypot anti-spam field */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Name + Phone side by side on desktop */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Nom <span className="text-red-400">*</span></span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="Votre nom"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Téléphone <span className="text-red-400">*</span></span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="06 XX XX XX XX"
                    />
                  </label>
                </div>

                {/* City + Email side by side */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Ville / commune <span className="text-red-400">*</span></span>
                    <input
                      type="text"
                      name="city"
                      required
                      autoComplete="address-level2"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="Ex: Orléans, Saran..."
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Email <span className="text-slate-400 font-normal">(optionnel)</span></span>
                    <input
                      type="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="email@exemple.com"
                    />
                  </label>
                </div>

                {/* Service type + Urgency side by side */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Type de besoin <span className="text-red-400">*</span></span>
                    <select name="service_type" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                      <option value="">-- Sélectionnez --</option>
                      <option>Entretien chaudière gaz</option>
                      <option>Entretien annuel multi-énergies</option>
                      <option>Dépannage chaudières</option>
                      <option>Installation chauffage / eau chaude</option>
                      <option>Ballon d'eau chaude</option>
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
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Urgence</span>
                    <select name="urgency" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                      <option value="normal">Normal — dans la semaine</option>
                      <option value="soon">Rapidement — sous 48h</option>
                      <option value="urgent">Urgent — aujourd'hui</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Description du problème <span className="text-red-400">*</span></span>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 resize-none"
                    placeholder="Décrivez brièvement votre problème..."
                  />
                </label>

                {submitStatus === 'error' && (
                  <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700 border border-red-200">
                    Erreur lors de l'envoi. Essayez de nous appeler directement au {businessInfo.phoneDisplay}.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-pulse w-full rounded-full bg-accent-500 px-6 py-4 text-base font-bold text-white transition hover:bg-accent-600 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
                </button>
                <p className="text-center text-xs text-slate-400">
                  Gratuit et sans engagement · Réponse rapide garantie
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
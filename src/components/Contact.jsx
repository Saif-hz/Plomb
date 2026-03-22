import { PhoneCall } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="section-title">Parlons de votre intervention</h2>
            <p className="section-subtitle">
              Decrivez le probleme en 30 secondes. Un expert vous rappelle rapidement.
            </p>

            <a
              href="tel:+33472123456"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-brand-900 px-5 py-3 font-bold text-white"
            >
              <PhoneCall size={18} />
              +33 4 72 12 34 56
            </a>

            <p className="mt-6 text-sm text-slate-600">
              Adresse: 18 Rue de la Republique, 69002 Lyon
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li>Rappel moyen en 12 minutes</li>
              <li>Aucun paiement en ligne</li>
              <li>Devis gratuit sans engagement</li>
            </ul>
          </div>

          <form className="space-y-4" aria-label="Formulaire de contact">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Nom</span>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Votre nom complet"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Telephone</span>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Votre numero de telephone"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Type de besoin</span>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white">
                <option>Urgence plomberie</option>
                <option>Debouchage</option>
                <option>Chauffe-eau</option>
                <option>Renovation salle de bain</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Message</span>
              <textarea
                rows="4"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="Decrivez votre probleme de plomberie"
              />
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Je souhaite etre rappele sous 10 a 15 minutes.
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-accent-500 px-6 py-3 font-bold text-white transition hover:bg-accent-600"
            >
              Recevoir mon devis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
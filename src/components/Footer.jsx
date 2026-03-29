import { useState } from 'react';
import { businessInfo, navLinks } from '../data';

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <>
      <footer className="bg-brand-950 py-12 text-white">
        <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-bold text-white">{businessInfo.brand}</p>
            <p className="mt-3 text-sm text-white/75">
              Plomberie et chauffage pour urgences, installations et rénovations à {businessInfo.city}.
            </p>
          </div>

          <div>
            <p className="font-semibold">Liens rapides</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Coordonnées</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <a href={`tel:${businessInfo.phoneHref}`} className="hover:text-accent-300 transition-colors">
                  📞 {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${businessInfo.phoneHrefSecondary}`} className="hover:text-accent-300 transition-colors">
                  📞 {businessInfo.phoneDisplaySecondary}
                </a>
              </li>
              <li>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-accent-300 transition-colors">
                  ✉️ {businessInfo.email}
                </a>
              </li>
              <li>📍 {businessInfo.addressLine}, {businessInfo.city}</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Informations</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <button
                  onClick={() => setShowLegal(true)}
                  className="hover:text-accent-300 transition-colors text-left"
                >
                  Mentions légales
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowLegal(true)}
                  className="hover:text-accent-300 transition-colors text-left"
                >
                  Politique de confidentialité
                </button>
              </li>
              <li className="pt-2">
                <span className="text-xs text-white/50">Artisan certifié · Assuré</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-shell mt-10 border-t border-white/10 pt-5 text-xs text-white/60">
          © {new Date().getFullYear()} {businessInfo.brand}. Tous droits réservés.
        </div>
      </footer>

      {/* Mentions Légales Modal */}
      {showLegal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowLegal(false)}
        >
          <div
            className="max-h-[80vh] max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-heading text-2xl text-brand-900 mb-4">Mentions légales</h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-brand-900 mb-1">Éditeur du site</h3>
                <p>{businessInfo.brand}</p>
                <p>{businessInfo.addressLine}, {businessInfo.postalCity}</p>
                <p>Téléphone : {businessInfo.phoneDisplay}</p>
                <p>Email : {businessInfo.email}</p>
                <p>SIRET : [À compléter]</p>
              </div>
              <div>
                <h3 className="font-bold text-brand-900 mb-1">Hébergement</h3>
                <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
              </div>
              <div>
                <h3 className="font-bold text-brand-900 mb-1">Propriété intellectuelle</h3>
                <p>L'ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive de {businessInfo.brand}. Toute reproduction est interdite sans autorisation.</p>
              </div>
              <div>
                <h3 className="font-bold text-brand-900 mb-1">Protection des données</h3>
                <p>Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : {businessInfo.email}</p>
              </div>
            </div>
            <button
              onClick={() => setShowLegal(false)}
              className="mt-6 w-full rounded-full bg-brand-900 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
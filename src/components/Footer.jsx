import { businessInfo } from '../data';

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-12 text-white">
      <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-xl">{businessInfo.brand}</p>
          <p className="mt-3 text-sm text-white/75">
            Plomberie et chauffage pour urgences, installations et renovations a {businessInfo.city}.
          </p>
        </div>

        <div>
          <p className="font-semibold">Liens rapides</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Realisations
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white">
                Avis
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Coordonnées</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>{businessInfo.phoneDisplay}</li>
            <li>{businessInfo.email}</li>
            <li>{businessInfo.addressLine}, {businessInfo.city}</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Suivez-nous</p>
          <p className="mt-3 text-sm text-white/75">
            Retrouvez-nous sur nos plateformes de presence en ligne ou contactez-nous directement.
          </p>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-5 text-xs text-white/60">
        © {new Date().getFullYear()} {businessInfo.brand}. Tous droits reserves.
      </div>
    </footer>
  );
}
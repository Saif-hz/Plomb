import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-12 text-white">
      <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-xl">Atelier Bleu 24</p>
          <p className="mt-3 text-sm text-white/75">
            Plomberie artisanale premium pour urgences, installations et renovation a Lyon.
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
          <p className="font-semibold">Coordonnees</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>+33 4 72 12 34 56</li>
            <li>contact@atelierbleu24.fr</li>
            <li>18 Rue de la République, Lyon</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Suivez-nous</p>
          <div className="mt-3 flex gap-3 text-white/80">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-5 text-xs text-white/60">
        © {new Date().getFullYear()} Atelier Bleu 24. Tous droits reserves.
      </div>
    </footer>
  );
}
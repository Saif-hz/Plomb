import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-950 py-2 text-xs text-white/90">
        <div className="section-shell flex items-center justify-between gap-2">
          <p className="hidden sm:block">Urgence plomberie 24h/24 - 7j/7</p>
          <p className="sm:hidden">Urgence 24h/24</p>
          <a href="tel:+33472123456" className="font-semibold text-accent-400 hover:text-accent-300">
            <span className="hidden sm:inline">+33 4 72 12 34 56</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </div>
      <div className="border-b border-white/10 bg-brand-900/85 backdrop-blur-md">
        <nav className="section-shell flex h-16 items-center justify-between sm:h-20" aria-label="Navigation principale">
        <a href="#" className="text-lg font-heading font-bold text-white tracking-tight sm:text-xl">
          Atelier Bleu <span className="text-accent-400">24</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-white/90 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+33472123456"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-600"
        >
          <Phone size={16} />
          Appeler maintenant
        </a>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-white/10 bg-brand-900/95 md:hidden"
        >
          <div className="section-shell py-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:+33472123456"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white"
            >
              <Phone size={16} />
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { businessInfo, navLinks } from '../data';
import logoRabi from '../images/Logorabi3.optimized.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-accent-500 to-orange-500 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        <span className="sm:hidden">🚀 Intervention rapide | Devis gratuit</span>
        <span className="hidden sm:inline">🚀 Intervention rapide garantie | Tarifs transparents | Devis gratuit</span>
      </div>

      <div className="border-b border-brand-700/30 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800/95 backdrop-blur-md">
        <nav className="section-shell py-2 sm:py-3" aria-label="Navigation principale">
          <div className="navbar-shell flex h-[62px] items-center justify-between px-2.5 sm:h-20 sm:px-5">
            <a href="#" className="inline-flex items-center gap-1.5 text-base font-heading font-bold tracking-tight sm:gap-3 sm:text-2xl">
              <span className="logo-frame">
                <img
                  src={logoRabi}
                  alt="Logo AquaChauffagiste"
                  className="h-10 w-10 object-contain sm:h-14 sm:w-14"
                />
              </span>
              <span className="hidden sm:inline">
                <span className="text-accent-400">A</span>
                <span className="text-white">qua</span>
                <span className="text-brand-300">C</span>
                <span className="text-white">hauffagiste</span>
              </span>
              <span className="sm:hidden text-[14px] leading-none">
                <span className="text-accent-400">A</span>
                <span className="text-white">qua</span>
                <span className="text-brand-300">C</span>
                <span className="text-white">hauffagiste</span>
              </span>
            </a>

            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={`tel:${businessInfo.phoneHref}`}
              className="navbar-cta hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Phone size={16} />
              Appeler maintenant
            </a>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex rounded-xl border border-white/20 bg-white/10 p-2.5 text-white transition hover:bg-white/20 md:hidden"
              aria-expanded={open}
              aria-label="Ouvrir le menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${businessInfo.phoneHref}`}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white"
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
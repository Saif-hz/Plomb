import { partnerLogoBoards } from '../data';

export default function PartnerLogos() {
  return (
    <section className="py-8 sm:py-12">
      <div className="section-shell">
        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
          <h3 className="font-heading text-2xl text-brand-900 sm:text-3xl">Marques et partenaires</h3>
          <p className="mt-2 text-sm text-slate-600">
            Nous intervenons sur des équipements de grandes marques reconnues.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {partnerLogoBoards.map((logoBoard, idx) => (
              <img
                key={`${logoBoard}-${idx}`}
                src={logoBoard}
                alt="Marques partenaires AquaChauffagiste"
                className="h-40 w-full rounded-xl border border-slate-200 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

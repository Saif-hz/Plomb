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

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerLogoBoards.map((board, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 transition hover:shadow-md"
              >
                <img
                  src={board}
                  alt={`Marques partenaires AquaChauffagiste — planche ${idx + 1}`}
                  className="h-48 w-full rounded-lg object-contain object-center sm:h-56 lg:h-60 grayscale-[30%] hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

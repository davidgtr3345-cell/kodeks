import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O studiju",
  description:
    "Saznajte više o Kodeks Studiju, pristupu radu i načinu izrade modernih web stranica, landing page rješenja i urednih interfejsa za firme.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "O studiju | Kodeks Studio",
    description:
      "Pristup radu, dizajnu i izradi modernih web stranica i landing page rješenja za firme i uslužne djelatnosti.",
    url: "/about",
    siteName: "Kodeks Studio",
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O studiju | Kodeks Studio",
    description:
      "Pristup radu, dizajnu i izradi modernih web stranica i landing page rješenja za firme i uslužne djelatnosti.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="section-padding">
        <div className="container-main">
          <span className="eyebrow">Studio</span>

          <h1 className="section-title is-wide mt-5">
            Dizajn koji izgleda uredno i radi jasno
          </h1>

          <p className="section-text mt-5">
            Kodeks Studio pravi moderne web stranice i landing page rješenja za
            firme kojima treba ozbiljan i profesionalan online nastup.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="glass-panel rounded-3xl p-6">
              <h2 className="text-[22px] font-semibold text-white">Pristup</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#aebacc]">
                Fokus je na jasnoj strukturi, čistom sadržaju i dizajnu koji
                posjetiocu odmah objašnjava čime se bavite.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h2 className="text-[22px] font-semibold text-white">Izvedba</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#aebacc]">
                Svaka stranica se radi tako da izgleda profesionalno na desktopu
                i da ostane pregledna na mobilnim uređajima.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h2 className="text-[22px] font-semibold text-white">Cilj</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#aebacc]">
                Cilj nije samo da stranica izgleda lijepo, nego da ulije povjerenje
                i vodi korisnika prema upitu ili kontaktu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

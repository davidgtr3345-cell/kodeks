import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Web stranice i landing page za firme",
  description:
    "Kodeks Studio izrađuje moderne web stranice, landing page rješenja i uredne korisničke interfejse za firme i uslužne djelatnosti.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web stranice i landing page za firme | Kodeks Studio",
    description:
      "Moderne web stranice, landing page rješenja i profesionalan online nastup za firme i usluge.",
    url: "https://www.tvoj-domen.ba",
    siteName: "Kodeks Studio",
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web stranice i landing page za firme | Kodeks Studio",
    description:
      "Moderne web stranice, landing page rješenja i profesionalan online nastup za firme i usluge.",
  },
};

export default function HomePage() {
  const featuredProjects = Object.entries(projectsData).slice(0, 3);

  return (
    <>
      <section className="section-padding w-full overflow-x-clip">
        <div className="container-main w-full max-w-full overflow-x-clip">
          <div className="grid w-full min-w-0 items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)]">
            <div className="min-w-0 max-w-xl">
              <span className="eyebrow">Digitalni studio</span>

              <h1 className="mt-5 max-w-[10ch] wrap-break-word text-[42px] font-semibold leading-[0.98] tracking-tight text-white sm:max-w-[11ch] sm:text-[48px] md:max-w-[14ch] md:text-[58px]">
                Stranice koje ulijevaju povjerenje
              </h1>

              <p className="mt-5 max-w-[52ch] wrap-break-word text-[15px] leading-7 text-[#aebacc] sm:text-[16px]">
                Uredan dizajn, jasna struktura i profesionalan online nastup za
                firme i usluge.
              </p>

              <div className="mt-8 flex min-w-0 flex-wrap gap-3">
                <Link href="/projects" className="brand-button">
                  Projekti
                </Link>
                <Link href="/#kontakt" className="ghost-button">
                  Zatraži ponudu
                </Link>
              </div>
            </div>

            <div className="min-w-0 max-w-full overflow-hidden">
              <div className="glass-panel-strong w-full min-w-0 max-w-full rounded-[28px] p-4 sm:p-5 md:rounded-4xl md:p-6">
                <div className="min-w-0 max-w-full rounded-3xl border border-white/10 bg-[#081222] p-4 sm:p-5 md:p-6">
                  <span className="eyebrow">Pristup</span>

                  <h2 className="mt-4 max-w-[18ch] wrap-break-word text-balance text-left text-[20px] font-semibold leading-[1.12] tracking-tight text-white md:max-w-[19ch] md:text-[26px]">
                    Jasan sadržaj bez viška
                  </h2>

                  <p className="mt-4 max-w-[48ch] wrap-break-word text-[15px] leading-7 text-[#aebacc]">
                    Fokus je da posjetilac odmah razumije čime se bavite i zašto
                    vam treba poslati upit.
                  </p>

                  <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
                    <div className="min-w-0 max-w-full rounded-[22px] border border-white/10 bg-white/2 p-4">
                      <p className="text-[13px] text-[#8ea0b8]">Format</p>
                      <p className="mt-2 wrap-break-word text-[17px] font-semibold text-white">
                        Web i landing page
                      </p>
                    </div>

                    <div className="min-w-0 max-w-full rounded-[22px] border border-white/10 bg-white/2 p-4">
                      <p className="text-[13px] text-[#8ea0b8]">Stil</p>
                      <p className="mt-2 wrap-break-word text-[17px] font-semibold text-white">
                        Moderan i uredan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm w-full overflow-x-clip">
        <div className="container-main w-full max-w-full overflow-x-clip">
          <div className="mb-8 flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 max-w-xl">
              <span className="eyebrow">Projekti</span>
              <h2 className="mt-4 wrap-break-word text-[28px] font-semibold leading-[1.04] tracking-tight text-white md:text-[38px]">
                Primjeri rješenja
              </h2>
              <p className="mt-3 wrap-break-word text-[15px] leading-7 text-[#aebacc]">
                Nekoliko tipova stranica i interfejsa za firme i usluge.
              </p>
            </div>

            <Link href="/projects" className="ghost-button w-fit max-w-full">
              Svi projekti
            </Link>
          </div>

          <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map(([slug, project]) => (
              <ProjectCard
                key={slug}
                slug={slug}
                title={project.title}
                description={project.description}
                type={project.type}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
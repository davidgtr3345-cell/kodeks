import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projekti",
  description:
    "Pregled projekata Kodeks Studija: moderne web stranice, landing page rješenja i uredni interfejsi za firme i uslužne djelatnosti.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projekti | Kodeks Studio",
    description:
      "Primjeri web stranica, landing page rješenja i interfejsa koje izrađuje Kodeks Studio.",
    url: "/projects",
    siteName: "Kodeks Studio",
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekti | Kodeks Studio",
    description:
      "Primjeri web stranica, landing page rješenja i interfejsa koje izrađuje Kodeks Studio.",
  },
};

export default function ProjectsPage() {
  const projects = Object.entries(projectsData);

  return (
    <main>
      <section className="section-padding-sm">
        <div className="container-main">
          <div className="max-w-2xl">
            <span className="eyebrow">Projekti</span>

            <h1 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-tight text-white md:text-[48px]">
              Primjeri web rješenja
            </h1>

            <p className="mt-4 text-[16px] leading-7 text-[#aebacc]">
              Odabrani projekti koji pokazuju pristup jasnom sadržaju, urednom
              vizuelnom sistemu i profesionalnom online nastupu.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map(([slug, project]) => (
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
    </main>
  );
}

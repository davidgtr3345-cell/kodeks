import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "@/data/projects";

type ProjectSlug = keyof typeof projectsData;

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as ProjectSlug];

  if (!project) {
    return {
      title: "Projekat nije pronađen",
      description: "Traženi projekat ne postoji.",
    };
  }

  const pageTitle = `${project.title} | Projekat`;
  const pageDescription =
    project.description ||
    "Detaljan pregled projekta, pristupa dizajnu i funkcionalnog rješenja.";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Kodeks Studio`,
      description: pageDescription,
      url: `/projects/${slug}`,
      siteName: "Kodeks Studio",
      locale: "bs_BA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Kodeks Studio`,
      description: pageDescription,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="section-padding-sm">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="eyebrow">{project.type}</span>

            <h1 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-tight text-white md:text-[52px]">
              {project.title}
            </h1>

            <p className="mt-4 max-w-[60ch] text-[16px] leading-7 text-[#aebacc]">
              {project.description}
            </p>
          </div>

          <div className="project-detail-image-wrap mt-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="project-image"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              <h2 className="text-[24px] font-semibold text-white">
                O projektu
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#aebacc]">
                Ovaj projekat prikazuje pristup jasnoj strukturi sadržaja,
                profesionalnom vizuelnom identitetu i dizajnu koji vodi korisnika
                prema kontaktu ili upitu.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#aebacc]">
                Fokus je na preglednosti, povjerenju i modernom prikazu na svim
                uređajima, uz uredan odnos između sadržaja, tipografije i CTA
                elemenata.
              </p>
            </div>

            <aside className="glass-panel rounded-3xl p-6">
              <h2 className="text-[20px] font-semibold text-white">
                Informacije
              </h2>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[13px] text-[#8ea0b8]">Tip projekta</p>
                  <p className="mt-1 text-[16px] font-semibold text-white">
                    {project.type}
                  </p>
                </div>

                <div>
                  <p className="text-[13px] text-[#8ea0b8]">Naziv</p>
                  <p className="mt-1 text-[16px] font-semibold text-white">
                    {project.title}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

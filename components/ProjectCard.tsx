import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  type: string;
  image: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  type,
  image,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block h-full rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-3 shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:border-white/16"
    >
      <div className="project-image-wrap">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="project-image transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="px-2 pb-2 pt-4">
        <div className="mb-3">
          <span className="project-badge">{type}</span>
        </div>

        <h3 className="text-[22px] font-semibold leading-[1.08] tracking-tight text-white md:text-[24px]">
          {title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-[#aebacc]">
          {description}
        </p>

        <div className="mt-4 inline-flex items-center text-[14px] font-semibold text-[#71dcd0]">
          Pogledaj detalje
        </div>
      </div>
    </Link>
  );
}
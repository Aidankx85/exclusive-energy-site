import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteNav from "../../components/SiteNav";
import { getSector, SECTOR_SLUGS } from "../sectors";
import {
  getProjectsBySector,
  type ProjectSummary,
} from "../../../sanity/lib/fetch";
import { urlFor } from "../../../sanity/lib/image";

type SectorPageProps = {
  params: Promise<{ sector: string }>;
};

export function generateStaticParams() {
  return SECTOR_SLUGS.map((sector) => ({ sector }));
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { sector: sectorSlug } = await params;
  const sector = getSector(sectorSlug);
  if (!sector) return { title: "Portfolio | Exclusive Energy & Electric" };
  return {
    title: `${sector.title} Projects | Exclusive Energy & Electric`,
    description: sector.description,
  };
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { sector: sectorSlug } = await params;
  const sector = getSector(sectorSlug);
  if (!sector) notFound();

  const projects = await getProjectsBySector(sectorSlug);
  const inProgress = projects.filter((p) => p.status === "inProgress");
  const completed = projects.filter((p) => p.status !== "inProgress");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SiteNav />

      {/* Hero */}
      <section
        className="relative min-h-[55vh] w-full bg-cover bg-center flex items-end pt-32 pb-12 px-10"
        style={{ backgroundImage: `url('${sector.coverImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-white/80 text-sm mb-4">
            <Link href="/portfolio" className="hover:text-blue-300">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            <span>{sector.title}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            {sector.title}
          </h1>
          <p className="mt-4 text-xl font-semibold text-blue-300">
            {sector.tagline}
          </p>
          <p className="mt-3 text-white/90 text-base max-w-3xl">
            {sector.description}
          </p>
        </div>
      </section>

      {/* Project grid */}
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        {projects.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Projects coming soon
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We are actively documenting our recent {sector.title.toLowerCase()}{" "}
              work. Check back soon — or contact us for project references.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Get a Free Estimate
            </Link>
          </div>
        ) : (
          <div className="space-y-20">
            {inProgress.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">
                    In the Works
                  </h2>
                </div>
                <ProjectGrid projects={inProgress} sectorSlug={sector.slug} priorityCount={3} />
              </section>
            )}
            {completed.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-8">
                  Recently Completed
                </h2>
                <ProjectGrid
                  projects={completed}
                  sectorSlug={sector.slug}
                  priorityCount={inProgress.length === 0 ? 3 : 0}
                />
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function ProjectGrid({
  projects,
  sectorSlug,
  priorityCount,
}: {
  projects: ProjectSummary[];
  sectorSlug: string;
  priorityCount: number;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <Link
          key={project._id}
          href={`/portfolio/${sectorSlug}/${project.slug}`}
          className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-blue-300/60 hover:-translate-y-1 transition-all"
        >
          <div className="relative w-full h-64 bg-gray-100">
            {project.coverImage?.asset && (
              <Image
                src={urlFor(project.coverImage).width(800).auto("format").url()}
                alt={project.coverImage.alt || project.title}
                fill
                sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform"
                priority={idx < priorityCount}
              />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition">
              {project.title}
            </h3>
            {(project.client || project.location || project.year) && (
              <p className="mt-1 text-sm text-gray-500">
                {[project.client, project.location, project.year]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            {project.summary && (
              <p className="mt-3 text-gray-700 text-sm">{project.summary}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

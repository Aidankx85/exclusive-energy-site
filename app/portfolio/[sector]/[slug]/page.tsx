import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import SiteNav from "../../../components/SiteNav";
import { getSector } from "../../sectors";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "../../../../sanity/lib/fetch";
import { urlFor } from "../../../../sanity/lib/image";

type CaseStudyProps = {
  params: Promise<{ sector: string; slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjectSlugs();
  return projects.map((p) => ({ sector: p.sector, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project | Exclusive Energy & Electric" };
  return {
    title: `${project.title} | Exclusive Energy & Electric`,
    description: project.summary || `${project.title} case study.`,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.coverImage?.asset
        ? [urlFor(project.coverImage).width(1200).height(630).url()]
        : undefined,
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-7 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-gray-900 mt-5 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-gray-800 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-800">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).width(1200).auto("format").url()}
            alt={value.alt || ""}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      ) : null,
  },
};

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const sector = getSector(project.sector);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
        {project.coverImage?.asset ? (
          <Image
            src={urlFor(project.coverImage).width(1920).auto("format").url()}
            alt={project.coverImage.alt || project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12">
          <nav aria-label="Breadcrumb" className="text-white/80 text-sm mb-3">
            <Link href="/portfolio" className="hover:text-blue-300">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            {sector && (
              <>
                <Link
                  href={`/portfolio/${sector.slug}`}
                  className="hover:text-blue-300"
                >
                  {sector.title}
                </Link>
                <span className="mx-2">/</span>
              </>
            )}
            <span>{project.title}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            {project.title}
          </h1>
          {project.summary && (
            <p className="mt-4 text-xl text-white/90 max-w-3xl">
              {project.summary}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <main className="w-full max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Scope of work */}
        <article className="lg:col-span-2">
          {project.scopeOfWork && project.scopeOfWork.length > 0 ? (
            <PortableText
              value={project.scopeOfWork}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-gray-600 italic">
              Detailed scope of work coming soon.
            </p>
          )}
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-28">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Project details
            </h2>
            <dl className="space-y-3 text-sm">
              {project.client && (
                <div>
                  <dt className="text-gray-500">Client</dt>
                  <dd className="font-semibold text-gray-900">
                    {project.client}
                  </dd>
                </div>
              )}
              {project.location && (
                <div>
                  <dt className="text-gray-500">Location</dt>
                  <dd className="font-semibold text-gray-900">
                    {project.location}
                  </dd>
                </div>
              )}
              {project.year && (
                <div>
                  <dt className="text-gray-500">Completed</dt>
                  <dd className="font-semibold text-gray-900">
                    {project.year}
                  </dd>
                </div>
              )}
              {project.squareFeet && (
                <div>
                  <dt className="text-gray-500">Square footage</dt>
                  <dd className="font-semibold text-gray-900">
                    {project.squareFeet.toLocaleString()} sq ft
                  </dd>
                </div>
              )}
              {sector && (
                <div>
                  <dt className="text-gray-500">Sector</dt>
                  <dd className="font-semibold text-gray-900">
                    <Link
                      href={`/portfolio/${sector.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {sector.title}
                    </Link>
                  </dd>
                </div>
              )}
            </dl>

            {project.highlights && project.highlights.length > 0 && (
              <>
                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3 border-b border-gray-200 pb-2">
                  Highlights
                </h3>
                <ul className="space-y-2 text-sm">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-800">{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link
              href="/contact"
              className="block mt-6 text-center bg-blue-600 text-white px-4 py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Discuss a similar project
            </Link>
          </div>
        </aside>
      </main>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="w-full bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={img._key || idx}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 shadow"
                >
                  {img.asset && (
                    <Image
                      src={urlFor(img).width(900).auto("format").url()}
                      alt={img.alt || `${project.title} photo ${idx + 1}`}
                      fill
                      sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 400px"
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

import type { PortableTextBlock } from "@portabletext/types";
import { client } from "./client";
import {
  allProjectSlugsQuery,
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectsBySectorQuery,
} from "./queries";

export type SanityImage = {
  _type?: "image";
  asset?: { _ref?: string; _type?: string; url?: string };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  _key?: string;
};

export type ProjectStatus = "completed" | "inProgress";

export type ProjectSummary = {
  _id: string;
  title: string;
  slug: string;
  sector: string;
  status: ProjectStatus;
  client?: string;
  location?: string;
  year?: number;
  summary?: string;
  coverImage: SanityImage;
  featured?: boolean;
};

export type Project = ProjectSummary & {
  squareFeet?: number;
  highlights?: string[];
  scopeOfWork?: PortableTextBlock[];
  gallery?: SanityImage[];
  publishedAt?: string;
};

const fetchOpts = { next: { revalidate: 60 } };

// Wrap each fetch in try/catch so a Sanity outage / bad creds / network
// blip can't take down the marketing-site build. Pages with no data fall
// back to empty states.
async function safeFetch<T>(
  label: string,
  fn: () => Promise<T>,
  fallback: T,
): Promise<T> {
  if (!client) return fallback;
  try {
    return await fn();
  } catch (err) {
    console.warn(`[sanity] ${label} failed; falling back to empty.`, err);
    return fallback;
  }
}

export async function getAllProjects(): Promise<ProjectSummary[]> {
  return safeFetch(
    "getAllProjects",
    () => client!.fetch(allProjectsQuery, {}, fetchOpts),
    [],
  );
}

export async function getProjectsBySector(
  sector: string,
): Promise<ProjectSummary[]> {
  return safeFetch(
    `getProjectsBySector(${sector})`,
    () => client!.fetch(projectsBySectorQuery, { sector }, fetchOpts),
    [],
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return safeFetch(
    `getProjectBySlug(${slug})`,
    () => client!.fetch(projectBySlugQuery, { slug }, fetchOpts),
    null,
  );
}

export async function getAllProjectSlugs(): Promise<
  { slug: string; sector: string }[]
> {
  return safeFetch(
    "getAllProjectSlugs",
    () => client!.fetch(allProjectSlugsQuery, {}, fetchOpts),
    [],
  );
}

export async function getFeaturedProjects(): Promise<ProjectSummary[]> {
  return safeFetch(
    "getFeaturedProjects",
    () => client!.fetch(featuredProjectsQuery, {}, fetchOpts),
    [],
  );
}

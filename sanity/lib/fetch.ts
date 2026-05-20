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

export async function getAllProjects(): Promise<ProjectSummary[]> {
  if (!client) return [];
  return client.fetch(allProjectsQuery, {}, fetchOpts);
}

export async function getProjectsBySector(
  sector: string,
): Promise<ProjectSummary[]> {
  if (!client) return [];
  return client.fetch(projectsBySectorQuery, { sector }, fetchOpts);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!client) return null;
  return client.fetch(projectBySlugQuery, { slug }, fetchOpts);
}

export async function getAllProjectSlugs(): Promise<
  { slug: string; sector: string }[]
> {
  if (!client) return [];
  return client.fetch(allProjectSlugsQuery, {}, fetchOpts);
}

export async function getFeaturedProjects(): Promise<ProjectSummary[]> {
  if (!client) return [];
  return client.fetch(featuredProjectsQuery, {}, fetchOpts);
}

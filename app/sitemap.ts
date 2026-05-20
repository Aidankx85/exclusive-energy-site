import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { SECTOR_SLUGS } from "./portfolio/sectors";
import { getAllProjectSlugs } from "../sanity/lib/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/service-details/wiring`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/service-details/efficiency`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/service-details/maintenance`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/service-details/warehouse-power`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const sectorRoutes: MetadataRoute.Sitemap = SECTOR_SLUGS.map((slug) => ({
    url: `${SITE_URL}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projects = await getAllProjectSlugs();
    projectRoutes = projects.map((p) => ({
      url: `${SITE_URL}/portfolio/${p.sector}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // If Sanity is unreachable at build time, fall back to just static + sector routes.
  }

  return [...staticRoutes, ...sectorRoutes, ...projectRoutes];
}

import { groq } from "next-sanity";

const SUMMARY_PROJECTION = `
  _id,
  title,
  "slug": slug.current,
  sector,
  "status": coalesce(status, "completed"),
  client,
  location,
  year,
  summary,
  coverImage,
  featured
`;

export const allProjectsQuery = groq`
  *[_type == "project" && defined(slug.current)]
    | order(coalesce(year, 0) desc, publishedAt desc) {
    ${SUMMARY_PROJECTION}
  }
`;

export const projectsBySectorQuery = groq`
  *[_type == "project" && sector == $sector && defined(slug.current)]
    | order(coalesce(year, 0) desc, publishedAt desc) {
    ${SUMMARY_PROJECTION}
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${SUMMARY_PROJECTION},
    squareFeet,
    highlights,
    scopeOfWork,
    gallery[] {
      ...,
      asset->
    },
    publishedAt
  }
`;

export const allProjectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current,
    sector
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true && defined(slug.current)]
    | order(coalesce(year, 0) desc, publishedAt desc) [0...6] {
    ${SUMMARY_PROJECTION}
  }
`;

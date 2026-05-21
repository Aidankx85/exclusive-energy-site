import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      // Old misspelled sector slug → corrected. Keeps any existing inbound
      // links / shares working.
      {
        source: "/portfolio/goverment",
        destination: "/portfolio/government",
        permanent: true,
      },
      {
        source: "/portfolio/goverment/:slug",
        destination: "/portfolio/government/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

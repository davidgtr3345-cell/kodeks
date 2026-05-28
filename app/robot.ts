import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.tvoj-domen.ba/sitemap.xml",
    host: "https://www.tvoj-domen.ba",
  };
}
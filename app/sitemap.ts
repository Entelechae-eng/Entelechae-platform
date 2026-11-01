import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://entelechae.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/platforms",
    "/platforms/atelier",
    "/research",
    "/company",
    "/contact",
    "/careers",
    "/legal",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/platforms") ? 0.9 : 0.8,
  }));
}


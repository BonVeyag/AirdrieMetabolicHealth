import type { MetadataRoute } from "next";
import { conditionGuides } from "@/lib/condition-guides";
import { getCollectionSlugs } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pillarSlugs, resourceSlugs, researchSlugs] = await Promise.all([
    getCollectionSlugs("pillars"),
    getCollectionSlugs("resources"),
    getCollectionSlugs("research"),
  ]);

  const staticRoutes = [
    "",
    "/how-it-works",
    "/book",
    "/class",
    "/start",
    "/maintenance",
    "/resources",
    "/resources/books",
    "/resources/videos",
    "/resources/videos/stress",
    "/resources/facebook-groups",
    "/resources/websites",
    "/dr-rajat-thapa",
    "/community",
    "/research",
    "/privacy",
    "/disclaimer",
  ];

  const dynamicRoutes = [
    ...pillarSlugs.map((slug) => `/pillars/${slug}`),
    ...resourceSlugs.map((slug) => `/resources/${slug}`),
    ...conditionGuides.map((guide) => `/resources/conditions/${guide.slug}`),
    ...researchSlugs.map((slug) => `/research/${slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}

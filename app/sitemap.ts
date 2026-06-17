// app/sitemap.ts — auto-generated sitemap.xml referenced by app/robots.ts
//
// Lists every public page with lastModified, changeFrequency, priority.
// Dynamic /destinations/[slug] pages are enumerated from destinations data
// so new destinations automatically show up in the sitemap.

import type { MetadataRoute } from "next";
import { destinations } from "@/destinations/data";
import { visas } from "@/visa/data";

const SITE_URL = "https://youraussieguides.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "",                       priority: 1.0,  changeFrequency: "weekly"  },
    { path: "/aussie-english",        priority: 0.9,  changeFrequency: "weekly"  },
    { path: "/destinations",          priority: 0.9,  changeFrequency: "weekly"  },
    { path: "/finance",               priority: 0.8,  changeFrequency: "monthly" },
    { path: "/transport",             priority: 0.8,  changeFrequency: "monthly" },
    { path: "/apartment",             priority: 0.8,  changeFrequency: "monthly" },
    { path: "/workplace",             priority: 0.8,  changeFrequency: "monthly" },
    { path: "/study",                 priority: 0.8,  changeFrequency: "monthly" },
    { path: "/tourist",               priority: 0.8,  changeFrequency: "monthly" },
    { path: "/weather",               priority: 0.8,  changeFrequency: "monthly" },
    { path: "/sport",                 priority: 0.7,  changeFrequency: "monthly" },
    { path: "/beyond-sydney",         priority: 0.7,  changeFrequency: "monthly" },
    { path: "/other-tools",           priority: 0.6,  changeFrequency: "monthly" },
    { path: "/resources",             priority: 0.7,  changeFrequency: "monthly" },
    { path: "/faq",                   priority: 0.7,  changeFrequency: "monthly" },
    { path: "/visa",                  priority: 0.9,  changeFrequency: "monthly" },
    { path: "/about",                 priority: 0.5,  changeFrequency: "yearly" },
    { path: "/privacy",               priority: 0.3,  changeFrequency: "yearly"  },
    { path: "/terms",                 priority: 0.3,  changeFrequency: "yearly"  },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const destinationEntries: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const visaEntries: MetadataRoute.Sitemap = visas.map((v) => ({
    url: `${SITE_URL}/visa/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...destinationEntries, ...visaEntries];
}
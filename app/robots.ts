import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://lukefournier.com/sitemap.xml",
    host: "https://lukefournier.com",
  };
}

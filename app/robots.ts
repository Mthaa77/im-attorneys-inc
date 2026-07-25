import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://im-attorneys.gee7pipz.chatgpt.site/sitemap.xml",
  };
}

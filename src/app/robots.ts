import { baseURL } from "@/app/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    host: baseURL,
    sitemap: `${baseURL}/sitemap.xml`,
  };
}

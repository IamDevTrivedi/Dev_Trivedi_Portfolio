import { Metadata as NextMetadata } from "next";

export interface MetaProps {
  title: string;
  description: string;
  baseURL: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  publishedTime?: string;
  author?: {
    name: string;
    url?: string;
  };
}

export function generateMetadata({
  title,
  description,
  baseURL,
  path = "",
  type = "website",
  image,
  keywords,
  noIndex = false,
  publishedTime,
  author,
}: MetaProps): NextMetadata {
  const normalizedBaseURL = /^(https?:\/\/)/.test(baseURL) ? baseURL : `https://${baseURL}`;
  const normalizedSiteURL = normalizedBaseURL.endsWith("/")
    ? normalizedBaseURL.slice(0, -1)
    : normalizedBaseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const isFullUrl = (url: string) => /^https?:\/\//.test(url);

  const ogImage = image
    ? isFullUrl(image)
      ? image
      : `${normalizedSiteURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedSiteURL}/og?title=${encodeURIComponent(title)}`;

  const url = `${normalizedSiteURL}${normalizedPath}`;

  return {
    metadataBase: new URL(normalizedSiteURL),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      type,
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
      siteName: `${author?.name || "Portfolio"}`,
      url,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(author ? { authors: [{ name: author.name, url: author.url }] } : {}),
  };
}

export const Meta = {
  generate: generateMetadata,
};

export default Meta;
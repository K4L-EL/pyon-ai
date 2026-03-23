import type { Metadata } from "next";

const SITE_URL = "https://pyon.ai";
const SITE_NAME = "PYON ai";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({ title, description, path = "", image }: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/og-default.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

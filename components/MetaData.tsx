import { useEffect, useState } from "react";

import { NextSeo } from "next-seo";
import useWindowLocation from "@hooks/useWindowLocation";

// import Head from "next/head";

type Props = {
  title: string;
  description: string;
  previewImage?: string;
  keywords?: string;
  suffix?: string;
};

const getFaviconPath = (isDarkMode: boolean = true): string => {
  return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
};

export default function MetaData({
  title,
  description,
  previewImage,
  suffix,
}: Props) {
  const { currentURL } = useWindowLocation();
  const [faviconHref, setFaviconHref] = useState("/favicon-dark.ico");

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches));
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  return (
    <NextSeo
      title={title + (suffix ? ` - ${suffix}` : "")}
      description={description || "Kamil Krutul"}
      canonical={currentURL}
      additionalLinkTags={[
        {
          rel: "icon",
          href: faviconHref,
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-192x192.png",
          sizes: "192x192",
        },
      ]}
      openGraph={{
        type: "website",
        url: currentURL,
        title: title + (suffix ? ` - ${suffix}` : ""),
        description: description || "Kamil Krutul",
        profile: {
          firstName: "Kamil",
          lastName: "Krutul",
          gender: "Male",
          username: "crane-cele",
        },
        images: [
          {
            url: previewImage ?? "",
            width: 1200,
            height: 630,
            alt: title,
            type: "image/jpeg",
          },
        ],
        siteName: "kamil-portfolio",
      }}
    />
  );
}

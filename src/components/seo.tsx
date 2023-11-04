import * as React from "react";
import { SiteMetadata, useSiteMetadata } from "../hooks/use-site-metadata";

interface SEOProps {
  description?: string;
  title?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const SEO = (props: SEOProps) => {
  const { title, description, image, siteUrl, author }: SiteMetadata =
    useSiteMetadata();

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={author} />
      {props.children}
    </>
  );
};

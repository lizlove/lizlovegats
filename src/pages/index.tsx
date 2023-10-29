import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import { Intro } from "../components/intro";
import { Layout } from "../components/layout";
import { Section } from "../components/section";

const IndexPage: React.FC<PageProps> = () => {
  const sections = [
    {
      title: "Projects",
      subtitle: "Things built mostly with code",
      name: "projects",
    },
    {
      title: "Writing",
      subtitle: "Blog posts, talks, and other words",
      name: "writing",
    },
    {
      title: "Bio",
      subtitle: "A bit more about me.",
      name: "bio",
    },
  ];

  return (
    <Layout>
      <SEO title="Liz Lovero" />
      <Intro />
      {sections.map((section) => (
        <Section {...section} key={section.name + "-section"} />
      ))}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Liz Lovero" />;

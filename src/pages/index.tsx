import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import { Intro } from "../components/intro";
import { Layout } from "../components/layout";
import { Section } from "../components/section";
import { SectionProps } from "../types/all-types";

const IndexPage: React.FC<PageProps> = () => {
  const sections: SectionProps[] = [
    {
      title: "Projects",
      subtitle: "Things built mostly with code",
      section: "projects",
    },
    {
      title: "Writing",
      subtitle: "Blog posts, talks, and other words",
      section: "writing",
    },
    {
      title: "Bio",
      subtitle: "A bit more about me.",
      section: "bio",
    },
  ];

  return (
    <Layout>
      <SEO title="Liz Lovero" />
      <Intro />
      {sections.map((section) => (
        <Section {...section} key={section.section + "-section"} />
      ))}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Liz Lovero" />;

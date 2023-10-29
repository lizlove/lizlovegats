import { graphql, useStaticQuery } from "gatsby"

export interface SiteMetadata {
  title: string
  description: string
  author: string
  image: string
  siteUrl: string
  icon: string
}

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
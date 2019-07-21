import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Archive View" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <section className="section">
        <div className="section-backdrop"></div>
        <div className="section-text-container section-left-border">
          <div className="section-icon-container">
            <div className="section-icon"></div>
          </div>
          <div className="section-heading-container">
            <div className="section-heading">
              <h2 className="section-title">ArchiveView</h2>
              <div className="section-subtitle">
                <p>
                  Built on D3.js library, this interactive chart compares
                  collection development at the two largest University of Texas
                  archives over time. For this project I used a jQuery scraper
                  to collect data from University XML documents and RegEx parser
                  to normalize data.
                </p>
              </div>
            </div>
          </div>
          <div className="section-body-container">
            <div id="chart"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SecondPage

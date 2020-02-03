import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import * as d3 from "d3"
// import taroCsv from "./taro.csv"

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

  const margin = { top: 40, right: 10, bottom: 80, left: 10 }
  const width = 1360 - margin.left - margin.right
  const height = 830 - margin.top - margin.bottom
  const gridSize = Math.floor(width / 24)
  const legendElementWidth = gridSize * 1.5
  const buckets = 9
  const colors = [
    "#ffffd9",
    "#edf8b1",
    "#c7e9b4",
    "#7fcdbb",
    "#41b6c4",
    "#1d91c0",
    "#225ea8",
    "#253494",
    "#081d58",
  ]
  const groups = [
    "Briscoe - Records",
    "Briscoe - Papers",
    "Briscoe - Collections",
    "Ransom - Records",
    "Ransom - Papers",
    "Ransom - Collections",
  ]
  const years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ]

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
                  to collect data from University XML documents and RegEx to
                  normalize data.
                </p>
              </div>
            </div>
          </div>
          <div className="section-chart-container">
            <div className="chart-heatmap">
              <svg
                width={width + margin.left + margin.right}
                height={height + margin.top + margin.bottom}
              >
                <g
                  color="green"
                  transform={`translate(" + margin.left + "," + margin.top + ")`}
                >
                  <rect width="100%" height="100%" fill="currentColor" />
                  {/* {data.map(d => (
                    <g className="arc" key={`a${d.data.age}`}>
                      <path d={arc(d)} fill={color(d.data.age)} />
                      <text
                        transform={`translate(${arc.centroid(d)})`}
                        dy=".35em"
                      >
                        {d.data.age}
                      </text>
                    </g>
                  ))} */}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SecondPage

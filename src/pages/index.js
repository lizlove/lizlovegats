import React, { Component } from "react"
import { Link } from "gatsby"
import textures from "textures"
import * as d3 from "d3"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    const svg = d3.select("#example").append("svg")
    const t = textures.lines().thicker()
    svg.call(t)
    svg.append("circle").style("fill", t.url())
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="section section-intro">
          <div id="example" className="section-backdrop">
            <svg></svg>
          </div>
          <div className="section-text-container section-text-container-intro">
            <div className="section-icon-container">
              <div className="center-icon">
                <Link to="/">
                  <h1 className="center-icon-text">
                    <svg height="100" width="100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="black"
                        strokeWidth="3"
                        fill="red"
                      />
                    </svg>
                    <span>Elizabeth Lovero</span>
                  </h1>
                </Link>
                <span>
                  <svg></svg>
                </span>
              </div>
            </div>
            <div className="section-heading-container">
              <div className="section-heading">
                <h2 className="section-title">Bio</h2>
                <div className="section-subtitle">
                  <p>A little more about me.</p>
                </div>
              </div>
            </div>
            <div className="section-intro-contents">
              <p>
                {" "}
                Elizabeth Lovero is an engineer living and working in 🗽 New
                York City. A specialist in front-end development and data
                visualization, she is passionate about visual storytelling and
                digital preservation. In a previous life, she was a contemporary
                art curator. You should follow her scruffy rescue dog,{" "}
                <Link to="https://www.instagram.com/lillenlen/">Lenny.</Link>
              </p>
            </div>{" "}
            <Image />
          </div>
        </section>
        <section className="section">
          <div className="section-backdrop">
            <div id="example"></div>
          </div>
          <div className="section-text-container section-left-border">
            <div className="section-icon-container">
              <div className="section-icon"></div>
            </div>
            <div className="section-heading-container">
              <div className="section-heading">
                <h2 className="section-title">Bio</h2>
                <div className="section-subtitle">
                  <p>A little more about me.</p>
                </div>
              </div>
            </div>
            <div className="section-text-two-col">
              <p>
                {" "}
                Elizabeth Lovero is an engineer living and working in 🗽 New
                York City. A specialist in front-end development and data
                visualization, she is passionate about visual storytelling and
                digital preservation. In a previous life, she was a contemporary
                art curator. You should follow her scruffy rescue dog,{" "}
                <Link to="https://www.instagram.com/lillenlen/">Lenny.</Link>
              </p>
            </div>
            <div className="section-text-two-col">
              {" "}
              <Image />
            </div>
          </div>
        </section>
        {/*
            <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}

export default IndexPage

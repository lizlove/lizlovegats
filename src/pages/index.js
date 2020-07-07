import React from "react"
import { Link } from "gatsby"
import twitter from "../images/twitter-logo.svg"
import linkedin from "../images/linkedin-logo.svg"
import github from "../images/github-logo.svg"
import ghost from "../images/ghost-logo.svg"
// import textures from "textures"
// import * as d3 from "d3"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

class IndexPage extends React.Component {
  toggleGhostMode() {
    let css =
      "html {-webkit-filter: invert(100%);" +
      "-moz-filter: invert(100%);" +
      "-o-filter: invert(100%);" +
      "-ms-filter: invert(100%); }"

    let head = document.head
    let inversion = document.getElementById("invert")
    if (inversion) {
      head.removeChild(inversion)
    } else {
      let style = document.createElement("style")
      style.type = "text/css"
      style.id = "invert"
      if (style.styleSheet) {
        style.styleSheet.cssText = css
      } else {
        style.appendChild(document.createTextNode(css))
      }
      head.appendChild(style)
    }
  }
  render() {
    return (
      <Layout>
        <SEO title="Liz Lovero" />
        <section className="section section-intro">
          <div className="section-backdrop intro-backdrop"></div>
          <div className="section-text-container-intro">
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
            <div className="section-intro-contents">
              <div className="section-intro-copy">
                <p>
                  {" "}
                  Hi 👋 I'm <Link to="/">Liz</Link>, an engineer currently at
                  the{" "}
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.simonsfoundation.org/flatiron/"
                  >
                    Flatiron Institute
                  </a>{" "}
                  in 🗽 New York City. I specialize in front-end development and
                  data visualization 📈.
                </p>
                <p>
                  {" "}
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:elizabethlovero@gmail.com"
                  >
                    Contact me
                  </a>{" "}
                  or keep scrolling 👇 for more. You should also follow{" "}
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/lillenlen/"
                  >
                    Lenny,
                  </a>{" "}
                  my scruffy rescue dog.
                </p>
              </div>
              <div className="section-intro-icons">
                <span className="social-icon-background"></span>
                <div className="social-icon-container">
                  <a
                    className="social-icon-link"
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lizlove"
                  >
                    <img src={github} alt="github" className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-container">
                  <a
                    className="social-icon-link"
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/lizzardl"
                  >
                    <img src={twitter} alt="twitter" className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-container">
                  <a
                    className="social-icon-link"
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/elizabeth-lovero-b2ab1867/"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="social-icon"
                    />
                  </a>
                </div>
                <div className="social-icon-container">
                  <a className="social-icon-link ghost">
                    <img
                      src={ghost}
                      alt="ghost"
                      className="social-icon"
                      onClick={() => this.toggleGhostMode()}
                    />
                  </a>
                </div>
                <span className="social-icon-background"></span>
              </div>
            </div>{" "}
          </div>
        </section>
        <section className="section">
          <div className="section-backdrop"></div>
          <div className="section-text-container section-left-border">
            <div className="section-icon-container">
              <div className="section-icon"></div>
            </div>
            <div className="section-heading-container">
              <div className="section-heading">
                <h2 className="section-title">Projects</h2>
                <div className="section-subtitle">
                  <p>Things built mostly with code</p>
                </div>
              </div>
            </div>
            <div className="section-body-container">
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://spikeforest.flatironinstitute.org/"
                  >
                    SpikeForest
                  </a>
                  <span className="date">2019</span>
                </h3>
                <p>
                  {" "}
                  SpikeForest is a website and open source computing framework
                  for evaluating and comparing spike sorting algorithms for
                  neurophysiology data analysis. The project is documented in a
                  May 2020{" "}
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://elifesciences.org/articles/55167"
                  >
                    {" "}
                    eLife paper.
                  </a>{" "}
                </p>
              </div>
              {/* TODO: Thank you chart */}
              {/* <div className="item-copy-container">
            <h3 className="item-title">
              <a aria-describedby="new-window" target="_blank" rel="noopener noreferrer" href="https://medium.com">Be Thankful for What You've Got</a>
              <span className="date">2019</span>
            </h3>
            <p>
              A digital thank you note to everyone who helped with the birth of
              my son. Based on notes I took from the last 90 days of pregnancy
              to the first 3 months of his life, this visualization includes
              everyone from doctors to Lyft drivers, family members to folks who
              offered seats on the subway.
            </p>
          </div> */}
              {/* TODO: Ok, Not Ok */}
              {/* <div className="item-copy-container">
            <h3 className="item-title">
              <a aria-describedby="new-window" target="_blank" rel="noopener noreferrer" href="https://medium.com">Ok, Not Ok</a>
              <span className="date">2019</span>
            </h3>
            <p>
              {" "}
              Want to quickly get a read on an awkward interaction? Think that
              someone is over-reacting and want some crowd-sourced backup?
              Submit to Ok, Not Ok and see what the world thinks!
            </p>
          </div> */}
              {/* TODO: Nightly */}
              {/* <div className="item-copy-container">
            <h3 className="item-title">
              <a aria-describedby="new-window" target="_blank" rel="noopener noreferrer" href="https://nightlyreview.org">Nightly Review</a>
              <span className="date">2015-2019</span>
            </h3>
            <p>
              {" "}
             Nightly is a tool for drafting personal inventories and sharing them with an accountability partner via email.
            </p>
          </div> */}
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lizlove/donut-time-bot"
                  >
                    Donut Time
                  </a>
                  <span className="date">2018</span>
                </h3>
                <p>
                  Show gratitude to coworkers on a Slack workspace using custom
                  donut emojis and slash commands. Built upon the Howdy.ai
                  platform for a company hackathon at{" "}
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://havenlife.com/home.html"
                  >
                    Haven Life
                  </a>
                  , Donut Time also includes a leaderboard to track the most
                  thanked and most thankful employees.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://sortinghat.co/"
                  >
                    Sorting Hat
                  </a>
                  <span className="date">2017</span>
                </h3>
                <p>
                  Want to quickly sort yourself into a Hogwarts House on Slack?
                  Type your the <code>/sortinghat</code> slash command followed
                  by a name of the witch or wizard to be sorted. Sorting Hat bot
                  responds with a short rhyme and the banner of the selected
                  House.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://publicradio.info/"
                  >
                    publicradio.info
                  </a>
                  <span className="date">2017</span>
                </h3>
                <p>
                  Publicradio.info is a web app for listening to noncommercial
                  news, culture, and art. The rugged anti-design was featured on{" "}
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://brutalistwebsites.com/"
                  >
                    Brutalist Websites.
                  </a>
                </p>
              </div>
              {/* TODO: Update dB NYC - move images to internal page*/}
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lizlove/db-nyc"
                  >
                    dB NYC
                  </a>
                  <span className="date">2015</span>
                </h3>
                <p>
                  dB NYC is a visualization of the noise pollution in New York
                  City. The app was created using Ruby on Rails and maps the
                  location of 311 noise complaints, emergency services, social
                  check-ins, and social venue reviews to create a dynamic
                  heat-map of noise broken down over a 24 hour period.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <Link to="/archiveview">ArchiveView</Link>
                  <span className="date">2014</span>
                </h3>
                <p>
                  Built on D3.js library, interactive chart compares collection
                  development at the two largest University of Texas archives
                  over time. Wrote jQuery scraper to collect data from
                  University XML documents and RegEx parser to normalize data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-backdrop"></div>
          <div className="section-text-container section-left-border">
            <div className="section-icon-container">
              <div className="section-icon"></div>
            </div>
            <div className="section-heading-container">
              <div className="section-heading">
                <h2 className="section-title">Writing</h2>
                <div className="section-subtitle">
                  <p>Blog posts, talks, and other words</p>
                </div>
              </div>
            </div>
            <div className="section-body-container">
              {/* TODO: Newsletter */}
              {/* <div className="item-copy-container">
            <p>
              {" "}
              I write an occasional newsletter about data visualization, design,
              and the detritus of digital life called <a>Chart of the Week</a>.
              <a aria-describedby="new-window" target="_blank" rel="noopener noreferrer" href="https://medium.com/@sachagreif" className="button">
                Sign up here to receive the newsletter
              </a>
            </p>
          </div> */}
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/presentation/d/1BpPYy4RnZVmQ57fyDnbW8V55xRjkDETPWYrVdx44MoU/edit?usp=sharing"
                  >
                    Design in the Deep End
                  </a>{" "}
                  <span className="date">2019</span>
                </h3>
                <p>
                  {" "}
                  Slides from a talk I gave to the Analytics Club at the
                  Department of Education on how to approach data visualization
                  and design when you are not a subject matter expert.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@lizzardl/integrating-multiple-recaptchas-into-angular-2-d30c3816f4bf"
                  >
                    Integrating multiple reCAPTCHAs into Angular 2
                  </a>
                  <span className="date">2018</span>
                </h3>
                <p>
                  {" "}
                  A tutorial on using directives, services, and observables to
                  integrate Google reCAPTCHAs into the Angular 2 framework.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lizlove/talks/blob/master/DigitalArtPreservation.pdf"
                  >
                    Digital Preservation
                  </a>{" "}
                  <span className="date">2017</span>
                </h3>
                <p>
                  {" "}
                  A talk given ManhattanJS encouraging Javascript developers to
                  help preserve digital art and cultural history.{" "}
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/the-data-experience/d3-js-data-visualization-with-javascript-for-beginners-8617e68eebc6"
                  >
                    D3.js — Data Visualization with JS for beginners
                  </a>{" "}
                  <span className="date">2015</span>
                </h3>
                <p>
                  {" "}
                  A simple introduction to the D3 library written for the coding
                  novice.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@lizzardl/how-i-learned-about-programming-from-marcel-duchamp-1e9ea1dc9cd6"
                  >
                    What I learned about programming from Marcel Duchamp
                  </a>
                  <span className="date">2015</span>
                </h3>
                <p>
                  {" "}
                  A list of concepts gleaned from the study of Duchamp that are
                  surprisingly applicable to beginning developers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-backdrop"></div>
          <div className="section-text-container section-left-border">
            <div className="section-icon-container">
              <div className="section-icon"></div>
            </div>
            <div className="section-heading-container">
              <div className="section-heading">
                <h2 className="section-title">Bio</h2>
                <div className="section-subtitle">
                  <p>A bit more about me.</p>
                </div>
              </div>
            </div>
            <div className="section-body-container">
              <div className="item-copy-container">
                <p>
                  {" "}
                  I'm 👩🏻‍💻 a Full Stack Engineer experienced in both art and
                  technology. I am passionate about human-centric design, visual
                  storytelling, and digital preservation. In a previous life, I
                  was a contemporary art curator.
                </p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.simonsfoundation.org/flatiron/"
                  >
                    Flatiron Institute
                  </a>
                  <span className="date">2018 - present</span>
                </h3>
                <p>Data Visualization Engineer</p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://havenlife.com/home.html"
                  >
                    MassMutual
                  </a>
                  <span className="date">2017 - 2018</span>
                </h3>
                <p>Developer, Haven Life</p>
              </div>
              <div className="item-copy-container">
                <h3 className="item-title">
                  <a
                    aria-describedby="new-window"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.bloomberg.com/research/stocks/private/snapshot.asp?privcapId=261785627"
                  >
                    Simple Labs, Inc.
                  </a>
                  <span className="date">2015 - 2017</span>
                </h3>
                <p>Engineer</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

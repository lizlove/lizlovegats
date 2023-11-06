import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useGhostMode } from "../hooks/use-ghost-mode";

export const Intro = () => {
  return (
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
              Hi 👋 I'm <Link to="/">Liz</Link>, an engineer and manager based
              in <span className="no-wrap">🌭 Chicago</span> I specialize in
              front-end development and data visualization 📈.
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
              or keep scrolling 👇 for more.
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
                <StaticImage
                  src="../images/github-logo.svg"
                  alt="github"
                  className="social-icon"
                />
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
                <StaticImage
                  src="../images/twitter-logo.svg"
                  alt="twitter"
                  className="social-icon"
                />
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
                <StaticImage
                  src="../images/linkedin-logo.svg"
                  alt="linkedin"
                  className="social-icon"
                />
              </a>
            </div>
            <div className="social-icon-container">
              <a
                className="social-icon-link ghost"
                onClick={() => useGhostMode()}
              >
                <StaticImage
                  src="../images/ghost-logo.svg"
                  alt="ghost"
                  className="social-icon"
                />
              </a>
            </div>
            <span className="social-icon-background"></span>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

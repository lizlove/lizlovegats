/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="canvas">
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}, Elizabeth Lovero. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

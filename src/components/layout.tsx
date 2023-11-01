import * as React from "react"
import "../styles/styles.scss"

export interface LayoutProps{
  children: React.ReactNode
}

export const Layout = ({ children }:LayoutProps) => {
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
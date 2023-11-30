import "../styles/styles.scss";
import * as React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="canvas">
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} Elizabeth Lovero
      </footer>
    </div>
  );
};

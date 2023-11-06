import * as cvLovero from "../static/cv-lovero.pdf";
import * as React from "react";
import { ItemProps, SectionProps } from "../types/all-types";
import { Item } from "./item";
import { useGetItems } from "../hooks/use-get-items";

export const Section = ({ section, title, subtitle }: SectionProps) => {
  const items: ItemProps[] | undefined = useGetItems(section);

  return (
    <section className="section">
      <div className="section-backdrop"></div>
      <div className="section-text-container section-left-border">
        <div className="section-icon-container">
          <div className="section-icon"></div>
        </div>
        <div className="section-heading-container">
          <div className="section-heading">
            <h2 className="section-title">{title}</h2>
            <div className="section-subtitle">
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="section-body-container">
          {section === "bio" && (
            <div className="item-copy-container">
              <p>
                I am 👩🏻‍💻 a Full Stack Engineer and Project Manager experienced in
                both art and technology. Early in my career, I worked in
                contemporary art. You can download my complete CV{" "}
                <a
                  aria-describedby="new-window"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={cvLovero.default}
                  title="Download my CV"
                >
                  here
                </a>
                .
              </p>
            </div>
          )}
          {!!items && items.map((item) => <Item {...item} />)}
        </div>
      </div>
    </section>
  );
};

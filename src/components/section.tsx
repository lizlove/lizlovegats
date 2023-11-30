import { ItemProps, SectionProps } from "../types/all-types";
import cvLovero from "../static/cv-lovero.pdf";
import { Item } from "./item";
import React from "react";
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
              <p>
                {subtitle}
                {section === "bio" && (
                  <span>
                    {" "}
                    Download my complete CV{" "}
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
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="section-body-container">
          {!!items && items.map((item) => <Item {...item} section={section} />)}
        </div>
      </div>
    </section>
  );
};

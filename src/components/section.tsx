import * as React from "react";
import { useGetItems } from "../hooks/use-get-items";
import { Item } from "./item";
import { ItemProps, SectionProps } from "../types/all-types";

export const Section = ({ section, title, subtitle }: SectionProps) => {
  const items: ItemProps[] | undefined = useGetItems(section);
  console.log("items", items, "section props", section);

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
                I am 👩🏻‍💻 a Full Stack Engineer and Product Manager experienced in
                both art and technology. In a previous life, I was a
                contemporary art curator.
              </p>
            </div>
          )}
          {items && items.map((item) => <Item {...item} />)}
        </div>
      </div>
    </section>
  );
};

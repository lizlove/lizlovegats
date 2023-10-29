import * as React from "react";
import { useGetItems } from "../hooks/use-get-items";
import { SectionBody } from "./sectionBody";
import { ItemProps } from "./item";

export interface SectionProps {
  name: string;
  title: string;
  subtitle: string;
}

export const Section = ({ name, title, subtitle }: SectionProps) => {
  const items: ItemProps[] = useGetItems(name);

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
        {items && <SectionBody {...items} />}
      </div>
    </section>
  );
};

import * as React from "react";
import { Link } from "gatsby";
import { ItemProps } from "../types/all-types";

export const Item = ({ title, date, description, link }: ItemProps) => {
  return (
    <div className="item-copy-container">
      <h3 className="item-title">
        <a
          aria-describedby="new-window"
          target="_blank"
          rel="noopener noreferrer"
          href={link ?? "/"}
        >
          {title}
        </a>
        <span className="date">{date}</span>
      </h3>
      <p>{description}</p>
    </div>
  );
};

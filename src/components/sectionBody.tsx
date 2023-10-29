import * as React from "react";
import { Item, ItemProps } from "./item";

export const SectionBody = (items: ItemProps[]) => {
  return (
    <div className="section-body-container">
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};

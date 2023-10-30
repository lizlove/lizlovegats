import * as React from "react";
import { Item } from "./item";
import { ItemProps } from "../types/all-types";

export const SectionBody = (items: ItemProps[]) => {
  return (
    <div className="section-body-container">
      {items && items.map((item) => <Item {...item} />)}
    </div>
  );
};

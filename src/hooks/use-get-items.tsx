import * as React from "react";
import { writing } from "../data/writing";
import { ItemProps, SectionTypes } from "../types/all-types";

export const useGetItems = (section: SectionTypes) => {
  if (!section) {
    return;
  }
  const items: ItemProps[] = [];
  if (section && section === "writing") {
    items.push(...writing);
  }
  return items;
};

import * as React from "react";
import { writing } from "../data/writing";
import { ItemProps } from "../components/item";

export const useGetItems = (name: string): ItemProps[] => {
  const items: ItemProps[] = [];
  if (name === "writing") {
    items.push(...writing);
  }
  return items;
};

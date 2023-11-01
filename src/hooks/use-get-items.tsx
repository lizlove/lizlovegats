import * as React from "react";
import { writing } from "../data/writing";
import { bio } from "../data/bio";
import { SectionTypes } from "../types/all-types";

export const useGetItems = (section: SectionTypes) => {
  console.log("section", section);
  if (!section) {
    return;
  }
  if (section === "writing") {
    console.log("writing", writing);
    return writing;
  } else if (section === "bio") {
    console.log("bio", bio);
    return bio;
  } else {
    return;
  }
};

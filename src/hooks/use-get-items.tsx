import * as React from "react";
import { bio } from "../data/bio";
import { projects } from "../data/projects";
import { writing } from "../data/writing";
import { SectionTypes } from "../types/all-types";

export const useGetItems = (section: SectionTypes) => {
  if (!section) {
    return;
  }
  if (section === "writing") {
    return writing;
  } else if (section === "bio") {
    return bio;
  } else if (section === "projects") {
    return projects;
  } else {
    return;
  }
};

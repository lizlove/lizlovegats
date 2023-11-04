export interface ItemProps {
  title?: string;
  date?: string;
  description?: string;
  link?: string;
  hide?: boolean;
}

export type SectionTypes = "writing" | "projects" | "bio";

export interface SectionProps {
  title: string;
  subtitle: string;
  section: SectionTypes;
}

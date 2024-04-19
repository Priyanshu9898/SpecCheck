import { ReactNode } from "react";

export interface Tab {
  id: number;
  title: string;
  content: ReactNode;
}

export interface FeatureTabProps {
  title: string;
  description1: string;
  description2: string;
  imageUrl: string;
  header1: string;
  header2: string;
  linkUrl: string;
}

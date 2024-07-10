import { ReactNode } from "react";

export type AccordionProps = {
  children: ReactNode;
};

export type AccordionContextType = {
  openIndex: null | number;
  toggleIndex: (index: number) => void;
};

export type AccordionItemProps = {
  children: ReactNode;
  index: number;
};

export type AccordionHeaderProps = {
  index?: number;
  children: ReactNode;
};

export type AccordionPannelProps = {
  index?: number;
  children: ReactNode;
};

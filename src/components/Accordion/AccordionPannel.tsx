import React, { useContext } from "react";
import { AccordionPannelProps } from "../../types/accordion";
import { AccordionContext } from "./Accordion";

const AccordionPannel = ({ index, children }: AccordionPannelProps) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionPannel must be within an Accordion");
  const { openIndex } = context;

  return openIndex === index ? (
    <div className="accordion-pannel">{children}</div>
  ) : null;
};

export default AccordionPannel;

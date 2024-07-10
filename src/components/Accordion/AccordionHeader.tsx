import React, { useContext } from "react";
import { AccordionHeaderProps } from "../../types/accordion";
import { AccordionContext } from "./Accordion";

const AccordionHeader = ({ index, children }: AccordionHeaderProps) => {
  const context = useContext(AccordionContext);

  if (!context)
    throw new Error("AccordionHeader must be used within the Accordion");

  const { openIndex, toggleIndex } = context;

  return (
    <div
      className="accordion-header"
      onClick={() => toggleIndex(index as number)}
    >
      {children}
      <span>{openIndex === index ? "-" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;

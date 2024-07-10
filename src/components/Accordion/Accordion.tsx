import React, { createContext, useState } from "react";
import { AccordionContextType, AccordionProps } from "../../types/accordion";
import "./Accordion.style.css";

export const AccordionContext = createContext<AccordionContextType>({
  openIndex: null,
  toggleIndex: () => {},
});

const Accordion = ({ children }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleIndex = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <AccordionContext.Provider value={{ openIndex, toggleIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;

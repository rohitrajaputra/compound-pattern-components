import React from "react";
import { AccordionItemProps } from "../../types/accordion";

const AccordionItem = ({ index, children }: AccordionItemProps) => {
  return (
    <div className="accordion-item">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { index } as any)
          : child
      )}
    </div>
  );
};

export default AccordionItem;

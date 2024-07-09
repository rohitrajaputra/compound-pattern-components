import React from "react";
import { OptionListProps } from "../../types/select";

const OptionList = ({ children }: OptionListProps) => {
  return <div className="option-list">{children}</div>;
};

export default OptionList;

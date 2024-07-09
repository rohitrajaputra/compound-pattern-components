import React, { useContext } from "react";
import { SelectContext } from "./Select";
import { OptionProps } from "../../types/select";

const Option = ({ value, children }: OptionProps) => {
  const { closeDropdown, setSelectedOption } = useContext(SelectContext);

  const handleSelectClick = (): void => {
    setSelectedOption({ value, label: children });
    closeDropdown();
  };

  return (
    <div className="option" onClick={handleSelectClick}>
      {children}
    </div>
  );
};

export default Option;

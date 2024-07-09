import React, { createContext, useEffect, useState } from "react";
import {
  SelectContextType,
  SelectedOptionType,
  SelectProps,
} from "../../types/select";
import "./Select.style.css";

export const SelectContext = createContext<SelectContextType>({
  setSelectedOption: () => {},
  closeDropdown: () => {},
  selectedOption: { label: "", value: "" },
});

const Select = ({
  placeholder = "Select an option",
  children,
  selected,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] =
    useState<SelectedOptionType>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    selected(selectedOption);
  }, [selectedOption]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <SelectContext.Provider
      value={{ closeDropdown, selectedOption, setSelectedOption }}
    >
      <div className="select">
        <div className="select-trigger" onClick={toggleOpen}>
          <span className="label">
            {" "}
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span>🔻</span>
        </div>
        {isOpen && <div className="select-options">{children}</div>}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;

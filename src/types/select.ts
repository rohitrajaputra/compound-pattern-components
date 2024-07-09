import { Dispatch, SetStateAction } from "react";

export type SelectProps = {
  children: React.ReactNode;
  placeholder?: string;
  selected: Function;
};

export type SelectedOptionType = null | {
  label: React.ReactNode;
  value: string;
};

export type SelectContextType = {
  selectedOption: SelectedOptionType;
  setSelectedOption: Dispatch<SetStateAction<SelectedOptionType>>;
  closeDropdown: Function;
};

export type OptionListProps = {
  children: React.ReactNode;
};

export type OptionProps = { value: string; children: React.ReactNode };

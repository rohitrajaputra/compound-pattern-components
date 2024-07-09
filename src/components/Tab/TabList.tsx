import { TabListProps } from "../../types/tabs";

const TabList = ({ children }: TabListProps) => {
  return <div className="tab-list">{children}</div>;
};

export default TabList;

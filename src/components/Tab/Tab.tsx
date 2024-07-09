import { useContext } from "react";
import { TabContext } from "./Tabs";
import { TabProps } from "../../types/tabs";

const Tab = ({ index, children }: TabProps) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <button
      onClick={() => setActiveTab(index)}
      className={`tab ${activeTab === index ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

export default Tab;

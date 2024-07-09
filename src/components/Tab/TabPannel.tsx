import React, { useContext } from "react";
import { TabContext } from "./Tabs";
import { TabPannelProps } from "../../types/tabs";

const TabPannel = ({ index, children }: TabPannelProps) => {
  const { activeTab } = useContext(TabContext);
  return (
    <div className={`tab-pannel ${index === activeTab ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default TabPannel;

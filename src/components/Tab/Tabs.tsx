import { useState, createContext } from "react";
import "./Tabs.style.css";
import { TabContextType, TabsProps } from "../../types/tabs";

export const TabContext = createContext<TabContextType>({
  activeTab: 1,
  setActiveTab: () => {},
});

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabContext.Provider>
  );
};

export default Tabs;

import { Dispatch, SetStateAction } from "react";

export type TabsProps = {
  children: React.ReactNode;
};

export type TabContextType = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

export type TabProps = {
  children: React.ReactNode;
  index: number;
};

export type TabListProps = {
  children: React.ReactNode;
};

export type TabPannelsProps = {
  children: React.ReactNode;
};

export type TabPannelProps = {
  index: number;
  children: React.ReactNode;
};

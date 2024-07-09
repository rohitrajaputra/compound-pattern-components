import { useState } from "react";
import "./App.css";
import { Option, OptionList, Select } from "./components/Select";
import { Tab, TabList, TabPannel, TabPannels, Tabs } from "./components/Tab";
import { SelectedOptionType } from "./types/select";

function App() {
  const [optionSelected, setOptionSelected] = useState<SelectedOptionType>();

  const SelectedOption = (option: SelectedOptionType) => {
    setOptionSelected(option);
  };
  return (
    <div className="app">
      <Tabs>
        <TabList>
          <Tab index={1}>Tab 1</Tab>
          <Tab index={2}>Tab 2</Tab>
          <Tab index={3}>Tab 3</Tab>
        </TabList>
        <TabPannels>
          <TabPannel index={1}>Hello World 1</TabPannel>
          <TabPannel index={2}>Hello World 2</TabPannel>
          <TabPannel index={3}>Hello World 3</TabPannel>
        </TabPannels>
      </Tabs>

      <Select selected={(option: SelectedOptionType) => SelectedOption(option)}>
        <OptionList>
          <Option value="IN">India</Option>
          <Option value="US">USA</Option>
          <Option value="PK">Pakistan</Option>
          <Option value="UK">United Kingdom</Option>
          <Option value="RU">Russia</Option>
          <Option value="SA">South Africa</Option>
        </OptionList>
      </Select>
      {optionSelected && <h1>Selected Option : {optionSelected?.value}</h1>}
    </div>
  );
}

export default App;

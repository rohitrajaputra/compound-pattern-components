import "./App.css";
import { Tab, TabList, TabPannel, TabPannels, Tabs } from "./components/Tab";

function App() {
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
    </div>
  );
}

export default App;

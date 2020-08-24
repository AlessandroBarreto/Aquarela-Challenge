import React from "react";
import "./App.css";
import Header from "./components/Header";
//import NewsView from "./components/views/NewsView";
import MainNew from "./components/MainNew";
import SubNew from "./components/SubNew";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainNew />
      <SubNew />
    </div>
  );
};

export default App;

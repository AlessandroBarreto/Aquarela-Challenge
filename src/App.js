import React from "react";
import "./App.css";
import Header from "./components/Header";
import NewsView from "./components/views/NewsView";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NewsView />
    </div>
  );
};

export default App;

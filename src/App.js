import React from "react";
import "./App.css";
import Header from "./components/Header";
//import NewsView from "./components/views/NewsView";
import MainNew from "./components/MainNew";
import SubNew from "./components/SubNew";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="App" >
      <Header />
      <MainNew />
      <SubNew />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import ByCountry from "./components/ByCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <ByCountry />
      <Content />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Cards />
    </div>
  );
}

export default App;

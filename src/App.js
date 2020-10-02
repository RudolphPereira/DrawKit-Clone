import React from "react";
import "./App.css";
import CardsSection from "./components/CardsSection";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <CardsSection />
    </div>
  );
}

export default App;

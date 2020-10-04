import React from "react";
import "./App.css";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import WebPage from "./components/WebPage";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <CardsSection />
      <WebPage />
      <Footer />
    </div>
  );
}

export default App;

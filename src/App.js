import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import WebPage from "./components/WebPage";
import HomeTwo from "./components/HomeTwo";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Drawkit-Clone">
            <Nav />
            <Home />
            <CardsSection />
            <WebPage />
            <Footer />
          </Route>
          <Route path="/Free-Icons">
            <Nav />
            <HomeTwo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

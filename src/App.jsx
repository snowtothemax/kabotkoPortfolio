import "./assets/App.css";
import React from "react";
import { Routes } from "./components/router";
import TopNavigationBar from "./components/TopNavBar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App-container">
      <TopNavigationBar />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

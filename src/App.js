import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import SortingApp from "./components/sorting/SortingApp";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SortingApp />
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import SortingVisualizer from "./components/sorting/SortingVisualizer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SortingVisualizer />
    </React.Fragment>
  );
}

export default App;

import React from "react";
import "./App.css";
import Kepala from "./componen/kepala";
import AddTodo from "./componen/AddTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Kepala />
      <AddTodo />
    </div>
  );
}

export default App;

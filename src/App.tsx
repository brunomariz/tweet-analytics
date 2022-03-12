import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Analytics from "./routes/Analytics/Analytics";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

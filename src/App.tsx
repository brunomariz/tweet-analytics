import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Analytics from "./routes/Analytics/Analytics";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

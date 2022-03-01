import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Analytics from "./routes/Analytics";

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

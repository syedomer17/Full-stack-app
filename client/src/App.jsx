import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/public/Home"
import Register from "./Pages/public/Register";
import Login from "./Pages/public/Login"

const App = () => {
  return (
    <>
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
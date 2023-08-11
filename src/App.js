import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Upload from "./Upload";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;

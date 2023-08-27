import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Movie from "./pages/movie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

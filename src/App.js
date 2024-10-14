import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Header from "./components/header/header";
import "./assets/main.scss";
import TopRated from "./pages/top-rated";
import Upcoming from "./pages/upcoming";
import NowPlaying from "./pages/now-playing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/now_playing" element={<NowPlaying />} />

        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

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
import MoviesGenres from "./pages/genre-movie";
import ScrollToTop from "./components/sroll-to-top";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/now_playing" element={<NowPlaying />} />
        <Route path="/genre/:genreId" element={<MoviesGenres />} />

        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

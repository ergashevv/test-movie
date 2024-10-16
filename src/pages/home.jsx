import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.scss";
import MovieCard from "../components/card";
import useFetch from "../hooks/fetch";
import { Pagination } from "@mui/material";
import MovieGenres from "../components/genres";

const Home = () => {
  const [page, setPage] = useState(1);
  console.log(page, 'page');
  const { data, loading, error } = useFetch(`movie/popular`, page);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="container">
        <div className="genres">
          <MovieGenres />
        </div>
      </div>




      <div className="cards container">
        {
          data?.results.map((item, key) => (
            <MovieCard id={item.id} title={item.title} img={item.poster_path} />
          ))
        }
      </div>
      <div className="container">
        <div style={{
          margin: "50px 0"
        }}>
          <Pagination
            page={page}
            onChange={handleChange}
            count={data?.total_pages}
            shape="rounded" />
        </div>
      </div>
    </>
  );
};
export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState();
  const [genreMovie, setGenreMovie] = useState();
  const [genreMovieId, setGenreMovieId] = useState();
  //popular movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=41ee00ef54c639e104c9b60ce5d3736b`
      )
      .then(function (response) {
        console.log(response);
        setData(response?.data?.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  //movies genres list
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=41ee00ef54c639e104c9b60ce5d3736b`
      )
      .then(function (response) {
        console.log(response, "response");
        setGenre(response?.data?.genres);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // ganres movies
  useEffect(() => {
    if (genreMovieId) {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/${genreMovieId}/movies?api_key=41ee00ef54c639e104c9b60ce5d3736b`
        )
        .then(function (response) {
          console.log(response, "response");
          setGenreMovie(response?.data?.results);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [genreMovieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <>
      <div className="movies container">
        {data.map((movie, index) => (
          <div className="movie-card" key={index}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
                alt={`${movie.title} Poster`}
              />
              <div className="titles">
                <h1>{movie.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <ul>
          {genre?.map((i, k) => (
            <button onClick={() => setGenreMovieId(i?.id)}>{i?.name}</button>
          ))}
        </ul>
      </div>
      <div className="movies-genre">
        {genreMovie?.map((i, k) => (
          <>
            <img
              src={"https://image.tmdb.org/t/p/w500" + i?.poster_path}
              alt=""
            />
          </>
        ))}
      </div>
    </>
  );
};
export default Home;

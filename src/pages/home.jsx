import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <>
      <div className="movies">
        {data.map((movie, index) => (
          <div className="movie-card" key={index}>
            <Link to={`/movie/${movie.id}`}>
              <h1>{movie.title}</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
                alt={`${movie.title} Poster`}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;

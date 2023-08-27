import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Movie = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=41ee00ef54c639e104c9b60ce5d3736b`
      )
      .then(function (response) {
        console.log(response);
        setData(response?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);
  console.log(data);

  return (
    <>
      <img
        src={"https://image.tmdb.org/t/p/w500" + data?.backdrop_path}
        alt="img"
      />
      <h1>{id}</h1>
    </>
  );
};
export default Movie;

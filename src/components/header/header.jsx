import { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";
const Header = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    if (value) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=41ee00ef54c639e104c9b60ce5d3736b`
        )
        .then(function (response) {
          setData(response.data.results);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    }
  }, [value]);
  return (
    <>
      <div className="header">
        <h1>Header</h1>
        <input onChange={(e) => setValue(e.target.value)} type="text" />
        <p>{value}</p>
        <div className="movie">
          {data?.map((i, k) => (
            <img
              src={"https://image.tmdb.org/t/p/w500" + i?.backdrop_path}
              alt="img"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

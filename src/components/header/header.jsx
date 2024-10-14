import { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    if (value) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=41ee00ef54c639e104c9b60ce5d3736b`
        )
        .then(function (response) {
          console.log(response);
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
        <div className="links">
          <Link to={'/'}>Popular</Link>
          <Link to={'/top_rated'}>Top rated</Link>
          <Link to={'/upcoming'}>Up coming</Link>
          <Link to={'/now_playing'}>Now playing</Link>
        </div>

      </div>
    </>
  );
};

export default Header;

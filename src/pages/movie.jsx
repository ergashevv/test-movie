import { useParams } from "react-router"
import useFetch from "../hooks/fetch";
import './main.scss'
const Movie = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`movie/${id}`);
  console.log(data, 'data');
  return (
    <>

      <div className="movie-inner">
        <div style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data?.backdrop_path})`,
        }} className="banner">

          <h1>{data?.title}</h1>
        </div>
      </div>

    </>
  )
}

export default Movie
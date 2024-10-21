import { useParams } from "react-router"
import useFetch from "../hooks/fetch";
import './main.scss'
import SimilarMoives from "../components/similar-movies";
const Movie = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`movie/${id}/videos`);
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
      <iframe width="1280" height="536" src="https://www.youtube.com/embed/6-_An3qL_lc" title="Pretty Girls Should Always Smile - The Substance | CLIP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {
        data?.results?.map((item, keuy) => (
          <iframe width="1280" height="720" src={`https://www.youtube.com/watch?v=${item?.key}`} title="X-Faktor 3-soni | Farg&#39;ona viloyati | 2-mavsum" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        ))
      }
      <div className="similar container">
        <SimilarMoives />
      </div>
    </>
  )
}

export default Movie
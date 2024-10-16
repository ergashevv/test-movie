import { useParams } from "react-router"
import useFetch from "../../hooks/fetch";
import MovieCard from "../../components/card";
import './main.scss'
const MoviesGenres = () => {
    const { genreId } = useParams()
    const { data } = useFetch(`discover/movie`, null, `&with_genres=${genreId}`);

    return (
        <>
            <div className="genres-movies container">
                {
                    data?.results?.map((item, key) => (
                        <MovieCard title={item?.title} img={item?.backdrop_path} />
                    ))
                }
            </div>
        </>
    )
}

export default MoviesGenres
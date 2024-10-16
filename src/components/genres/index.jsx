import { Link } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import './main.scss'
const MovieGenres = () => {
    const { data } = useFetch(`genre/movie/list`);
    return (
        <>
            {
                data?.genres?.map((i, k) => (
                    <div className="genre-item">
                        <Link to={`/genre/${i?.id}`}>
                            {i?.name}
                        </Link>
                    </div>

                ))
            }
        </>
    )
}

export default MovieGenres
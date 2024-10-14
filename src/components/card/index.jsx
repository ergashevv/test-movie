import { Link } from 'react-router-dom'
import './main.scss'
const MovieCard = ({ img, title, id }) => {
    return (
        <>
            <Link to={`/movie/${id}`}>
                <div className="card">
                    <img
                        src={"https://image.tmdb.org/t/p/w500" + img}
                        alt="" />
                    <div className="title-section">
                        <h1>{title}</h1>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default MovieCard
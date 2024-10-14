
import MovieCard from '../../components/card';
import useFetch from '../../hooks/fetch';
import './main.scss'
const TopRated = () => {
    const { data, loading, error } = useFetch('movie/top_rated');
    return (
        <>
            <div className="cards container">
                {
                    data?.results.map((item, key) => (
                        <MovieCard id={item.id} title={item.title} img={item.poster_path} />
                    ))
                }
            </div>
        </>
    )
}
export default TopRated
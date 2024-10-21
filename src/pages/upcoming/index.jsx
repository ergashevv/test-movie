
import MovieCard from '../../components/card';
import useFetch from '../../hooks/fetch';
import './main.scss'
const Upcoming = () => {
    const { data } = useFetch('movie/upcoming');

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
export default Upcoming
import { useParams } from "react-router";
import useFetch from "../../hooks/fetch";
import MovieCard from "../card";

const SimilarMoives = () => {
    const { id } = useParams()

    const { data } = useFetch(`movie/${id}/similar`);
    console.log(data);
    return (
        <>
            {
                data?.results?.map((item, key) => (
                    <MovieCard title={item?.title} id={item?.id} img={item?.backdrop_path} />
                ))
            }
        </>
    )
}

export default SimilarMoives
import { useParams } from "react-router";

const Movie = () => {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};
export default Movie;

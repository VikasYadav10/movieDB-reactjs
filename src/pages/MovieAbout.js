import Loading from "./Loading";
import { useGlobalContext } from "../ContextProvider";
import { Link } from "react-router-dom";

export default function MovieAbout() {
  const { loading, searchResult } = useGlobalContext();
  console.log(searchResult);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="moive-container">
      {searchResult.map(function (movie) {
        return (
          <section className="movie-search" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="info">
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
              <p>Type: {movie.Type}</p>
              <Link to={`/about/${movie.imdbID}`}>
                <button className="btn">More</button>
              </Link>
            </div>
          </section>
        );
      })}
    </div>
  );
}

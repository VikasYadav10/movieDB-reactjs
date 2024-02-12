import { Link, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import Loading from "./Loading";
import { useEffect, useState } from "react";
const key = "60633521";

export default function About() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=${key}&i=${id}`;
    const movieData = async function () {
      setLoading(true);
      const res = await fetch(url);
      const respose = await res.json();
      setData(respose);
      setLoading(false);
    };
    movieData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const genres = data.Genre.split(",");
  return (
    <div className="about-container">
      <div className="back">
        <Link to="/">
          <FaHome />
        </Link>
      </div>
      <section>
        <img src={data.Poster} alt={data.Title} />
        <div className="about">
          <h1>{data.Title}</h1>
          <p>
            {data.imdbRating} <IoIosStar /> ({data.imdbVotes}) votes
          </p>
          <p>Release data: {data.Released}</p>
          <p>{data.Runtime}</p>
          <p>
            {genres.map((genre, index) => {
              return <span className="genre">{genre}</span>;
            })}
          </p>

          <div className="plot">
            <h2>Synopsis</h2>
            <p>{data.Plot}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

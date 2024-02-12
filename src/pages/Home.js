import { useState } from "react";
import MovieAbout from "./MovieAbout";
import { useGlobalContext } from "../ContextProvider";

//

export default function Home() {
  const [value, setValue] = useState("");
  const { setMovies } = useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();
    setMovies(value);
  }
  return (
    <div>
      <header className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            id="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </header>
      <MovieAbout />
    </div>
  );
}

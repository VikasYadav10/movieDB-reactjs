import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext();
const key = "60633521";

function AppProvider({ children }) {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState("Batman");

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://www.omdbapi.com/?apikey=${key}&s=${movies}`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setSearchResult(data.Search);
      setLoading(false);
    };
    fetchData();
  }, [movies]);

  return (
    <ContextProvider.Provider
      value={{ searchResult, movies, setMovies, loading }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export function useGlobalContext() {
  return useContext(ContextProvider);
}

export { ContextProvider, AppProvider };

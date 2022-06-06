import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion,AnimatePresence } from "framer-motion";

export default function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    fetchpopular();
  }, []);

  const fetchpopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=16e50d116d8e19efe85e78679e1e75f2&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <motion.div layout className="popularmovies">
        <AnimatePresence>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

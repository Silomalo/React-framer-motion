import React,{useEffect} from 'react'
import "./App.css";

export default function Filter({ setActiveBtn, activeBtn, filtered, setFiltered, popular }) {
  // const [popular, setPopular] = useState([]);
  useEffect(() => {
    if(activeBtn === 0){
      setFiltered(popular);
      return;
    }
    const filteredMovies = popular.filter((movie) => movie.genre_ids.includes(activeBtn));
  setFiltered(filteredMovies);
  }, [activeBtn]);

  return (
    <div className="filter-container">
      <button className={activeBtn === 0 ? "active" : ""} onClick={() => setActiveBtn(0)}> All</button>
      <button className={activeBtn ===28 ? "active" : ""} onClick={() => setActiveBtn(28)}> Action</button>
      <button className={activeBtn === 35 ? "active" : ""} onClick={() => setActiveBtn(35)}> Comedy</button>
    </div>
  );
}

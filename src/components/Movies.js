import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Movies() {

const [movies, setMovies] = useState([]);


  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    requisicao.then((res) => {
        setMovies(res.data);
    });
  }, []);

  return (
    
    <ul className="movies-container">
      {movies.map((r) => (
        <li className="movies-box" key={r.id} >
          <Link to={`/${r.id}/showtimes`}>
            <img src={r.posterURL} alt=""/>
          </Link>
        </li>
      ))}
    </ul>
  );
}
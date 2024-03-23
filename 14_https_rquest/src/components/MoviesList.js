import React, { useContext } from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import AllContext from "../store/all-context.js";

const MovieList = (props) => {
  const allCtx = useContext(AllContext);
  return (
    <ul className={classes["movies-list"]}>
      {allCtx.allMovies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;

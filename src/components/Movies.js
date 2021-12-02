import React from "react";
import { movies } from "../data";
import Movie from './Movie'

function Movies() {

  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => <Movie key={movie.title} details={movie}/>)}
    </div>
  )
}

export default Movies;

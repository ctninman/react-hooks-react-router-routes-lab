import MovieByActor from "./MovieByActor"

function Actor ({actor}) {

  const { name, movies } = actor
  
  return (
    <div>
      <h2>{name}</h2>
      <ul>{movies.map((movie) => <MovieByActor key={movie} movie={movie}/>)}</ul>
    </div>
  )
}

export default Actor
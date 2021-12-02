import MovieByDirector from "./MovieByDirector"

function Director ({director}) {

  const { name, movies } = director
  return (
    <div>
      <h2>{name}</h2>
      <ul>{movies.map((movie) => <MovieByDirector key={movie} movie={movie}/>)}</ul>
    </div>
  )
}

export default Director
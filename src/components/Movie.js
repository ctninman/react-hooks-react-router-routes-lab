import Genre from './Genre'

function Movie ({details}) {

  const {title, time, genres} = details
  return (
    <div>
      <h2>{title}</h2>
      <h4>{time} minutes</h4>
      <div>
        <h2>Genres</h2>
        <ul>{genres.map((genre) => <Genre key={genre} genre={genre}/>)}</ul>
      </div>
    </div>
  )
}

export default Movie
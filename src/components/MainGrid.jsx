function Movies({movies, movieCard}) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ul className="grid grid-cols-pelis-grid lg:grid-cols-pelis-grid-large 
                        place-items-center p-4"
      >
        {movies.map(movie => movieCard(movie))}
      </ul>
      : <p className="text-center">No hay resultados</p>  
  )
}

export function MainGrid({movies, movieCard, loading, searchError}){
 

  return (
    <div className='container mx-auto max-w-screen-xl'>
      {loading && !searchError ? <p className="text-center">Cargando....</p> : null}
      {!loading && searchError ? <p className="text-center">{searchError}</p> : null}
      {!loading && !searchError ? <Movies movies={movies} movieCard={movieCard}/> : null}
    </div>
  )
}
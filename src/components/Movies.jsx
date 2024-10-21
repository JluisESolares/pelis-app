//import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'

function MoviesResults({movies}) {
  return (
    <ul className="grid grid-cols-pelis-grid lg:grid-cols-pelis-grid-large place-items-center p-4">
      {movies.map(({id, ...movie}) => (
        <MovieCard key={id} movie={movie}/>
      ))}
    </ul>
  )
}

function NoMoviesResults() {
  return (
    <p className='text-center'>No hay resultados</p>
  )
}

export function Movies({movies}) {
  const hasMovies = movies?.length > 0
  
  return (
    hasMovies ?
      <MoviesResults movies={movies} />
      :
      <NoMoviesResults /> 
  )
}
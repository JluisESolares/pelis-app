import { useEffect, useState } from 'react'

function MoviesResults({movies}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const [renderMovies, setRendermovies] = useState([])

  useEffect(() => {
    setRendermovies([])
    const timeout = setTimeout(() => {
      setRendermovies(movies)
    }, 10)

    return () => clearTimeout(timeout)
  }, [movies])

  const handlerLoaded = () => {
    setIsLoaded(true)
  }

  return (
    <ul className="grid grid-cols-pelis-grid place-items-center p-4">
      {renderMovies.map(movie => (
        <li 
          key={movie.id}
          className={`w-full flex flex-col p-4 gap-4 items-center text-center transition-opacity transform duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} animate-fadeIn`}
        >
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img 
            className="w-full object-contain rounded-md" 
            src={movie.poster} 
            alt={movie.title}
            onLoad={handlerLoaded} 
          />
        </li>
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
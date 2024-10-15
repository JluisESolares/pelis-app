import movieResults from '../mocks/movie-results.json'
//import noMovieResults from '../mocks/movie-no-results.json' 

export function useMovies() { 
  const movies = movieResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
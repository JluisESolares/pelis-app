//const API_KEY = '30df5189'
const API_KEY_MDB = '729c8d77a9abd1374fa09ad1e51502e8'
const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

export const searchMovies = (search) => {
  if(!search) throw new Error('search is missing')
  
  /* const fetchDelay = new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`))
    }, 2000)
  }) */

  return fetch(
    `${BASE_URL}?query=${search}&include_adult=false&language=en-US&page=1&api_key=${API_KEY_MDB}`
  )
    .then(res => res.json())
    .then(data => {
      const movies = data.results
      return movies?.map(movie => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        description: movie.overview
      }))
    })

}




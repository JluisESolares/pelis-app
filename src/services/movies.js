const API_KEY = '30df5189'

export const searchMovies = (search) => {
  if(!search) throw new Error('search is missing')
  
  /* const fetchDelay = new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`))
    }, 2000)
  }) */

  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then(res => res.json())
    .then(data => {
      const movies = data.Search
      return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
    })

}




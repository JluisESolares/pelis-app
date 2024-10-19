import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
 
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)
  
  const getMovies = useCallback(async ({search}) => {

    if(prevSearch.current === search) return

    try {
      setLoading(true)
      setError(null)
      prevSearch.current = search
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    }
    catch(err) {
      setError(err.message) 
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { 
    console.log('sorted Movies')
    return (
      sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies
    )
    
    
  }, [movies, sort])


  return { movies: sortedMovies, getMovies, loading, error }
}
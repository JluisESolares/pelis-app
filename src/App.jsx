import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
//import { useModal } from './hooks/useModal'

import {
  MovieLayout,
  MovieHeader,
  MovieMain,
  MovieSearch,
  Modal,
  MainGrid,
  MovieCard,
  MovieDetails,
} from './components'

import './App.css'

function App() {
  const [sort, setSort] = useState(false)
  const [movieDetails, setMovieDetails] = useState({})

  const { search, error, setSearch } = useSearch()

  const {
    movies,
    getMovies,
    loading,
    error: searchError,
  } = useMovies({ search, sort })

  const handlerChange = (ev) => {
    if (ev.target.value.startsWith(' ')) return
    setSearch(ev.target.value)
  }

  const handlerSubmit = (ev) => {
    ev.preventDefault()
    getMovies({ search: search.trim() })
  }

  const handlerSort = () => {
    setSort(!sort)
  }

  const showModalInfo = (info) => {
    setMovieDetails(info)
  }

  return (
    <MovieLayout>
      <MovieHeader
        movieSearch={
          <MovieSearch
            sort={sort}
            search={search}
            error={error}
            handlerChange={handlerChange}
            handlerSubmit={handlerSubmit}
            handlerSort={handlerSort}
          />
        }
      />
      <MovieMain>
        <MainGrid
          loading={loading}
          searchError={searchError}
          movies={movies}
          movieCard={({ id, ...options }) => (
            <MovieCard key={id} movie={options} show={showModalInfo} />
          )}
        />
      </MovieMain>
      <Modal
        contentData={movieDetails}
        content={(data) => <MovieDetails movieDetails={data} />}
      />
    </MovieLayout>
  )
}

export default App

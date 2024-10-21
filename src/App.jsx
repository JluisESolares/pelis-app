import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
//import { useModal } from './hooks/useModal'

import { Modal } from './components/Modal'
import { MainGrid } from './components/MainGrid'
import { MovieCard } from './components/MovieCard'
import { MovieDetails } from './components/MovieDetails'

import './App.css'

function App() {

  const [sort, setSort] = useState(false)
  const [movieDetails, setMovieDetails] = useState({})

  const { 
    search,
    error,
    setSearch,
  } = useSearch()

  const { 
    movies, 
    getMovies, 
    loading, 
    error: searchError
  } = useMovies({search, sort})

  const handlerChange = (ev) => {
    if(ev.target.value.startsWith(' ')) return
    setSearch(ev.target.value)
  }

  const handlerSubmit = (ev) => {
    ev.preventDefault()
    getMovies({search: search.trim()})
  }

  const handlerSort = () => {
    setSort(!sort)
  }

  const showModalInfo = (info) => {
    setMovieDetails(info)
  }

  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white'>
      
      <header className='mx-auto p-4 text-center'>
        <h2 className='py-4 text-lg'>Buscador de peliculas</h2>
        <form className="form flex flex-col px-4 gap-4 sm:max-w-7xl sm:flex-row justify-center mx-auto" onSubmit={handlerSubmit}>
          <input 
            autoFocus
            value={search} 
            onChange={handlerChange} 
            name="pelicula" 
            type="text" 
            placeholder="Avengers, Star Wars, The Matrix ..."
            className='px-4 py-2 rounded-md bg-zinc-700 focus:outline-none
              flex-grow max-w-2xl
            '
          />
          <div className='flex gap-4 pr-4 items-center justify-center'>
            <input className="appearance-none w-5 h-5 rounded-md bg-zinc-700 hover:ring-4 hover:ring-emerald-950 checked:bg-emerald-950" type="checkbox" checked={sort} onChange={handlerSort} />
            <button className='-order-1 bg-emerald-950 px-4 py-2 rounded-md flex-grow'>Search</button>
          </div>
        </form>
        { error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <Modal
        contentData={movieDetails}
        content={(data) => <MovieDetails movieDetails={data} />} />
      <MainGrid
        loading={loading}
        searchError={searchError}
        movies={movies}
        movieCard={({id, ...options}) => <MovieCard key={id} movie={options} show={showModalInfo}/>}
      />
    </div>
  )
}

export default App

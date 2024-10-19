import { useState, useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() {

  const [sort, setSort] = useState(false)
  
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
    //setSearch('')
    //isFirstInput.current = true
  }

  const handlerSort = () => {
    setSort(!sort)
  }
  
  useEffect(() => {
    console.log('se crea la funcion getMovies re-render')
  }, [getMovies])
  
  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white'>
      <header className='mx-auto p-4 text-center'>
        <h2 className='py-4 text-lg'>Buscador de peliculas</h2>
        <form className="form flex flex-col px-4 gap-4 sm:max-w-7xl sm:flex-row justify-center mx-auto" onSubmit={handlerSubmit}>
          <input 
            value={search} 
            onChange={handlerChange} 
            name="pelicula" 
            type="text" 
            placeholder="Avengers, Star Wars, The Matrix ..."
            className='px-4 py-2 rounded-md bg-zinc-700 focus:outline-none'
          />
          <div className='flex gap-4 items-center justify-center'>
            <input className="appearance-none w-6 h-6 rounded-md bg-zinc-700 hover:ring-4 hover:ring-emerald-950 checked:bg-emerald-950" type="checkbox" checked={sort} onChange={handlerSort} />
            <button className='basis-5/6 -order-1 bg-emerald-950 px-4 py-2 rounded-md'>Search</button>
          </div>
        </form>
        { error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        { loading === true && <p>Please wait.....</p> }
        { searchError ? <p>Something went wrong! {searchError}</p> : <></> }
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App

import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  
  const { movies } = useMovies()
  return (
    <>
      <header>
        <h2>Buscador de peliculas</h2>
        <form className="form">
          <input type="text" placeholder="Avengers, Star Wars, The Matrix ..."/>
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </>
  )
}

export default App

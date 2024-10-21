import { useState } from 'react'
export function MovieCard({movie, show}){
  const [imgLoaded, setImageLoaded] = useState(false)

  const handleLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <li 
      className={`
        w-full flex flex-col p-4 gap-4 items-center text-center
        transition-opacity duration-300 ease-in ${imgLoaded ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img 
        className="w-full object-contain rounded-md" 
        src={movie.poster} 
        alt={movie.title}
        onLoad={handleLoaded}
        onClick={() => show(movie)}
      />
    </li>
  )
}
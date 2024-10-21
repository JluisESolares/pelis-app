import { useState } from 'react'
export function MovieDetails({ movieDetails }) {
  const [load, setLoad] = useState(false)
  
  return (
    <div className={`transition-opacity duration-300 ease-in ${ load ? 'opacity-100' : 'opacity-0'}`}>
      <h3>{movieDetails?.title}</h3>
      <img 
        src={movieDetails?.poster} 
        onLoad={() => setLoad(true)}
      />
    </div>
  );
}

import { useState, useEffect } from 'react';
export function MovieDetails({ movieDetails }) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (!Object.keys(movieDetails).length > 0) {
      setLoad(false);
    }
  }, [movieDetails]);
  return (
    <div
      className={`transition-all duration-300 ease-in ${
        load ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <h3>{movieDetails?.title}</h3>
      <img
        src={movieDetails?.poster}
        onLoad={() => setLoad(true)}
        alt={movieDetails?.title}
      />
    </div>
  );
}

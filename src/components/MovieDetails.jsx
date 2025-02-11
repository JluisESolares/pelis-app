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
      className={
        `transition-all duration-300 ease-in 
        ${load ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        w-full mt-14 flex flex-col gap-4
      `}
    >
      <h3 className='text-center text-xl font-bold mb-4'>{movieDetails?.title}</h3>
      <div className='w-full flex flex-col gap-8 sm:flex-row md:flex-col'>
        <div className='basis-1/2 md:hidden md:basis-0'>
          <img
            src={movieDetails?.poster}
            onLoad={() => setLoad(true)}
            alt={movieDetails?.title}
            className='w-full object-fit rounded-md'
          />
        </div>
        <div className='hidden md:block'>
          <img
            src={movieDetails?.backdrop}
            onLoad={() => setLoad(true)}
            alt={movieDetails?.title}
            className='w-full object-fit rounded-md'
          />
        </div>
        <div className='basis-1/2 md:basis-0'>
          <h3 className='text-xl font-bold mb-2'>Overview</h3>
          <p>{movieDetails?.description}</p>
        </div>
      </div>
    </div>
  );
}

export function MovieDetails({detailsMovie, close, isOpenModal}){
  const renderMovie = isOpenModal ? detailsMovie : {}
  return (
    <div className="">
      <button onClick={close}>Cerrar Modal</button>
      <h3>{renderMovie?.title}</h3>
      <img 
        src={renderMovie?.poster}
      />
    </div>
  )
}
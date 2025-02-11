export function MovieSearch({
  sort,
  search,
  error,
  handlerChange,
  handlerSubmit,
  handlerSort,
}) {
  return (
    <div>
      <h2 className="py-4 text-lg">Buscador de peliculas</h2>
      <form
        className="form flex flex-col px-4 gap-4 sm:max-w-7xl sm:flex-row justify-center mx-auto"
        onSubmit={handlerSubmit}
      >
        <input
          autoFocus
          value={search}
          onChange={handlerChange}
          name="pelicula"
          type="text"
          placeholder="Avengers, Star Wars, The Matrix ..."
          className="px-4 py-2 rounded-md bg-zinc-700 focus:outline-none
            flex-grow max-w-2xl
          "
        />
        <div className="flex gap-4 pr-4 items-center justify-center">
          <input
            className="appearance-none w-5 h-5 rounded-md bg-zinc-700 hover:ring-4 hover:ring-emerald-950 checked:bg-emerald-950"
            type="checkbox"
            checked={sort}
            onChange={handlerSort}
          />
          <button className="-order-1 bg-emerald-950 px-4 py-2 rounded-md flex-grow">
            Search
          </button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'

export function useSearch(){

  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [isFocused, setIsFocused] = useState(false);
  
  const isFirstInput = useRef(true)

  useEffect(() => {

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    
    if(search == '') {
      setError('No puede estar en blanco')
      return
    }
    
    if(search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
    }
    
    if(search.length < 3) {
      setError('Tiene que tener almenos 3 caracteres')
      return
    }
    
    setError(null)
  },[search])

  return { 
    search,
    error,
    isFocused,
    setSearch,
    setIsFocused
  }
}
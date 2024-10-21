import { useRef, useState } from 'react'

export function useModal(){

  const [isOpenModal, setIsOpenModal] = useState(false)
  const refModal = useRef()

  const openModal = () => refModal.current.showModal()

  const closeModal = () => refModal.current.close()

  return {
    refModal,
    openModal,
    closeModal,
    isOpenModal,
    setIsOpenModal
  }
}


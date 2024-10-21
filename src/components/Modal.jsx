
import { createPortal } from 'react-dom'

export function Modal({content, refModal, setIsOpenModal}){

  return createPortal((
    <dialog ref={refModal}
      onClose={() => setIsOpenModal(false)}
    >
      {content()}
    </dialog>
  ), document.getElementById('modal'))
}
import { createPortal } from 'react-dom';
import { useModal } from '../hooks/useModal';

export function Modal({ contentData, content }) {
  const { 
    dialogRef,
    closeModal, 
    isOpen, 
    handleClose,
  } = useModal({ contentData });

  const contentDataConditional = isOpen ? contentData : {}

  return createPortal(
    <dialog 
      ref={dialogRef} 
      onClose={handleClose}
      className='w-full max-w-7xl p-4 relative bg-zinc-900 text-white'
    >
      <button 
        onClick={closeModal} 
        aria-label="Cerrar"
        className='absolute right-0 top-0 px-4 py-3 rounded-md cursor-pointer'
      >
        X
      </button>
      {content(contentDataConditional)}
    </dialog>,
    document.getElementById('modal')
  )
}

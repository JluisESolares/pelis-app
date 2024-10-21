import { useRef, useEffect, useState } from 'react';

export function useModal({ contentData }) {
  const dialogRef = useRef();
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    if (Object.keys(contentData).length > 0) {
      setIsOpen(true)
      dialogRef.current.showModal();
    }
  }, [contentData]);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const handleClose = () => {
    setIsOpen(false)
  }

  return {
    dialogRef,
    closeModal,
    isOpen,
    handleClose,
  };
}

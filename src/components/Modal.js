import React, { useRef } from 'react'
import useEventListener from '../hooks/useEventListener'

export default function Modal({ showModal, setShowModal, children }) {
  const backgroundRef = useRef()

  useEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  })
  useEventListener('mousedown', (e) => {
    if (e.target === backgroundRef.current && showModal) {
      setShowModal(false)
    }
  })

  return (
    <>
      {showModal && (
        <div ref={backgroundRef} className='background'>
          <div className='modal'>
            <div className='body'>{children}</div>
            <span className='cross' onClick={() => setShowModal(false)}></span>
          </div>
        </div>
      )}
    </>
  )
}

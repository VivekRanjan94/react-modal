import React, { useState } from 'react'
import Modal from './Modal'
import '../scss/styles.scss'

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className='btn' onClick={() => setShowModal((prev) => !prev)}>
        Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className='modal__content'>Hello World</div>
      </Modal>
    </>
  )
}

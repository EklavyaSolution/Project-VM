import React from 'react'

const Modal = ({ show, setShow, children }) => {
    
    if (!show) {
        return null
    }
    return (
        <div className='w-screen h-screen grid place-items-center fixed z-[9999] top-0 left-0  backdrop-blur-lg'>
            {children}
        </div>
    )
}

export default Modal
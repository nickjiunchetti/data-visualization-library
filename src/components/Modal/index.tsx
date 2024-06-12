import React from 'react'

export type ModalType = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  children?: React.ReactNode
}

export default function BaseModal({ show, setShow, children }: ModalType) {
  return (
    show && (
      <div
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 cursor-pointer'
        onClick={(e) => {
          e.stopPropagation()
          setShow(false)
        }}
      >
        <div
          className='w-screen md:w-2/5  bg-white p-8 pb-4 rounded shadow-lg relative cursor-default'
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <div className='absolute top-2 right-2 text-gray-500'>
            <span
              className='material-symbols-outlined cursor-pointer'
              onClick={() => setShow(false)}
            >
              link
            </span>
            <span
              className='material-symbols-outlined cursor-pointer'
              onClick={() => setShow(false)}
            >
              close
            </span>
          </div>
        </div>
      </div>
    )
  )
}

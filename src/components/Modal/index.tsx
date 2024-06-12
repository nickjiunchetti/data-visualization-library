import React from 'react'

export default function Modal({
  show,
  setShow,
  children,
}: {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}) {
  return (
    show && (
      <div
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-20'
        onClick={(e) => {
          e.stopPropagation()
          setShow(false)
        }}
      >
        <div
          className='bg-white p-4 rounded shadow-lg relative'
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <div className='absolute top-2 right-2'>
            <span
              className='material-symbols-outlined cursor-pointer'
              onClick={() => setShow(false)}
            >
              content_copy
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

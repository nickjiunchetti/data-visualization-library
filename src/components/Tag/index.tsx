import React from 'react'

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className='px-3 py-1 text-sm text-gray-500  bg-gray-50 rounded border'>
      {children}
    </span>
  )
}

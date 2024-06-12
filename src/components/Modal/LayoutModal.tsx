import React from 'react'

import Tag from '../Tag'
import { ModalType } from '.'
import BaseModal from '.'

export default function LayoutModal({ show, setShow }: ModalType) {
  return (
    <BaseModal show={show} setShow={setShow}>
      <div className='text-center'>
        <div className='w-12 h-12 mx-auto bg-gray-50 text-gray-400 rounded flex items-center justify-center'>
          <span className='material-symbols-outlined'>view_module</span>
        </div>
        <p className='flex justify-center gap-2 mt-3 text-xl font-bold items-center'>
          INTES{' '}
          <span className='font-normal text-xs text-gray-500 bg-gray-50 p-1 rounded'>
            Layout
          </span>
        </p>
        <p className='mt-1 text-xs text-gray-400'>
          Descriptive name of the Layout
        </p>
        <p className='mt-4 text-sm'>
          Those options are already baked in with this model shoot me an email
          clear blue water but we need distributors to evangelize the new line
          to local markets.
        </p>
        <div className='mt-2 space-x-1'>
          <Tag>#comms</Tag>
          <Tag>#coverage</Tag>
          <Tag>#stakeholders</Tag>
        </div>
      </div>
      <div className='mt-6 grid grid-cols-2 md:grid-cols-4 text-center font-semibold border-gray-300'>
        <div className='border-r-2 border-b md:border-b-0 p-2 '>
          <p className='text-sm text-gray-500 flex items-center justify-center gap-1'>
            Used
            <span className='material-symbols-outlined text-sm'>info</span>
          </p>
          <p>2485</p>
        </div>
        <div className='border-b md:border-b-0 md:border-r-2 p-2'>
          <p className='text-sm text-gray-500'>Type</p>
          <p className='font-semibold'>Universal</p>
        </div>
        <div className='border-r-2 p-2'>
          <p className='text-sm text-gray-500 flex items-center justify-center gap-1'>
            Pages No.
            <span className='material-symbols-outlined text-sm'>info</span>
          </p>
          <p className='font-semibold'>6</p>
        </div>
        <div className='p-2'>
          <p className='text-sm text-gray-500'>Last Updated</p>
          <p className='font-semibold'>07/23/2024</p>
        </div>
      </div>
      <div className='flex my-6 h-40 bg-gray-50 text-gray-300 rounded justify-center items-center'>
        layout image
      </div>
      <div className='mt-6'>
        <p className='text-lg font-semibold'>Business Questions</p>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          {[1, 2, 3, 4].map((value, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-md  ${
                index === 0 && 'bg-gray-100'
              }`}
            >
              <p className='font-semibold'>Question {index + 1}</p>
              <p className='text-sm text-gray-600 md:w-4/5'>
                Short description of the item goes nicely here.
              </p>
            </div>
          ))}
        </div>
      </div>
      <button className='w-full mt-2 py-2 bg-gray-900 text-gray-300 text-sm rounded-lg flex items-center justify-center gap-1'>
        <span className='material-symbols-outlined'>bookmark</span>
        Favorite item
      </button>
    </BaseModal>
  )
}

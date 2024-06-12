'use client'
import { itensDataType } from '@/app/page'
import { useEffect, useState } from 'react'

export default function SearchInput({
  itensData,
  setFilteredItens,
}: {
  itensData: itensDataType
  filteredItens: itensDataType
  setFilteredItens: Function
}) {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    searchValue === '' ? setFilteredItens(itensData) : setFilteredItens([])
  }, [itensData, searchValue, setFilteredItens])

  return (
    <div className='w-full relative mb-5'>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type='text'
        placeholder='Type to search...'
        className='p-2 w-full pl-10 border rounded-lg shadow-sm focus:outline-none focus:border-gray-300 text-sm'
      />
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <span className='material-symbols-outlined text-gray-400'>search</span>
      </div>
      <button
        onClick={() => setSearchValue('')}
        className='absolute inset-y-0 right-0 flex items-center pr-3'
      >
        <span className='material-symbols-outlined text-gray-400'>clear</span>
      </button>
    </div>
  )
}

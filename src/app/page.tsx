'use client'
import SearchBar from '../components/SearchInput'
import TabBar from '../components/Tab'
import SectionTitle from '../components/Section'
import { useState } from 'react'

const itemMock = {
  name: 'Item Name',
  description: 'Short description of the item goes nicely here.',
  date: '06/27/2024' as string | undefined,
}

const itensDataMock = [
  { ...itemMock, date: undefined },
  itemMock,
  itemMock,
  itemMock,
]

export type itemType = typeof itemMock
export type itensDataType = typeof itensDataMock

export default function Home() {
  const [filteredItens, setFilteredItens] = useState(itensDataMock)

  return (
    <main className='min-h-full flex flex-col items-center relative'>
      <div className='m-4 p-4 bg-gray-50 rounded flex flex-col items-center md:w-2/3 relative'>
        <div className='md:w-3/5'>
          <h1 className='font-extrabold text-3xl md:text-5xl mb-4 text-center'>
            Library
          </h1>
          <h2 className='text-xs md:text-lg mb-10 text-center'>
            Browse for assets needed to report and present data analysis.
          </h2>
          <SearchBar
            itensData={itensDataMock}
            filteredItens={filteredItens}
            setFilteredItens={setFilteredItens}
          />
          <TabBar />
          {filteredItens.length === 0 ? (
            <div className='text-sm text-gray-500 mb-5'>
              Not seeing what you wish to see? Try updating search and filter
              parameters or requesting a new asset.
            </div>
          ) : (
            <>
              <SectionTitle
                title='Featured'
                description='Curated top picks from this week'
                itens={filteredItens}
              />
              <SectionTitle
                title='Trending'
                description='Most popular by community'
                itens={filteredItens}
              />
            </>
          )}
          <button
            className='flex w-full md:w-auto p-3 items-center gap-2
          justify-center text-sm bg-gray-500 text-gray-50 rounded-md
          sm:justify-end sm:absolute sm:top-0 sm:right-0 sm:mt-4 sm:mr-4'
          >
            <span className='material-symbols-outlined'>box_add</span>
            Request Asset
          </button>
        </div>
      </div>
    </main>
  )
}

'use client'
import SearchBar from '../components/SearchInput'
import TabBar from '../components/Tab'
import SectionTitle from '../components/Section'
import { useState } from 'react'

const item = {
  name: 'Item Name',
  description: 'Short description of the item goes nicely here.',
  date: '06/27/2024' as string | undefined,
}

const itensData = [{ ...item, date: undefined }, item, item, item]

export type itemType = typeof item
export type itensDataType = typeof itensData

export default function Home() {
  const [filteredItens, setFilteredItens] = useState(itensData)

  return (
    <main className='h-full p-2'>
      <div className='min-h-full bg-gray-50 flex flex-col items-center p-3'>
        <h1 className='font-extrabold text-3xl mb-4'>Library</h1>
        <h2 className='text-xs mb-4'>
          Browse for assets needed to report and present data analysis
        </h2>
        <SearchBar
          itensData={itensData}
          filteredItens={filteredItens}
          setFilteredItens={setFilteredItens}
        />
        <TabBar />
        {filteredItens.length === 0 ? (
          <div className='text-sm text-gray-500 mb-5'>
            Not seeing any items? Try updating search and filter parameters.
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
        <button className='flex w-full p-2 items-center gap-2 justify-center  text-white-700 bg-gray-500 text-gray-200 rounded'>
          <span className='material-symbols-outlined'>box_add</span>
          Request Asset
        </button>
      </div>
    </main>
  )
}

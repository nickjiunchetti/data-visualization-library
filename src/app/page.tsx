import Image from 'next/image'
import SearchBar from '../components/SearchInput'
import TabBar from '../components/Tab'
import SectionTitle from '../components/Section'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <main className='h-full p-2'>
      <div className='min-h-full bg-gray-50 flex flex-col items-center p-3'>
        <h1 className='font-extrabold text-3xl mb-4'>Library</h1>
        <h2 className='text-xs mb-4'>
          Browse for assets needed to report and present data analysis
        </h2>
        <SearchBar />
        <TabBar />
        <SectionTitle
          title='Featured'
          description='Curated top picks from this week'
        />
        <SectionTitle
          title='Trending'
          description='Most popular by community'
        />
        <div className='flex w-full text-white-700'>
          <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
          <button className=''>Request</button>
        </div>
      </div>
    </main>
  )
}

import Image from 'next/image'
import SearchBar from '../components/SearchInput'
import TabBar from '../components/Tab'
import SectionTitle from '../components/SectionTitle'
import Item from '../components/Item'

export default function Home() {
  return (
    <main className='h-full p-2'>
      <div className='min-h-full bg-gray-50 flex flex-col items-center p-3'>
        <button>Request</button>
        <h1 className='font-bold text-3xl mb-4'>Library</h1>
        <h2 className='text-xs mb-4'>
          Browse for assets needed to report and present data analysis
        </h2>
        <SearchBar />
        <TabBar />
        <SectionTitle />
        <div>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <SectionTitle />
        <div>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}

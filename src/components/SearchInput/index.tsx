'use client'
export default function SearchInput() {
  return (
    <div className='w-full relative mb-5'>
      <input
        type='text'
        placeholder='Type to search...'
        className='p-1 w-full pl-10 border rounded-lg shadow-sm focus:outline-none focus:border-gray-300 text-sm'
      />
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <span className='material-symbols-outlined text-gray-400'>search</span>
      </div>
    </div>
  )
}

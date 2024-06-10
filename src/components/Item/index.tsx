import Image from 'next/image'

export default function Item({ featured }: { featured?: boolean }) {
  const containerClass = featured && 'bg-white rounded border border-gray-100'

  return (
    <div className={containerClass + ' flex p-4 w-full md:w-1/2 gap-4'}>
      <Image
        className='w-1/3'
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
      <div className='flex flex-col gap-1'>
        <p className='font-semibold'>Item Name</p>
        <p className='text-sm'>
          Short description of the item goes nicely here.
        </p>
        <p className='text-xs text-gray-300'>06/27/2024</p>
      </div>
    </div>
  )
}

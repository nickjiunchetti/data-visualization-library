import Image from 'next/image'

export default function Item({
  name,
  description,
  date,
  featured,
}: {
  name: string
  description: string
  date?: string
  featured?: boolean
}) {
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
        <p className='font-semibold'>{name}</p>
        <p className='text-sm'>{description}</p>
        <p className='text-xs text-gray-400'>{date}</p>
      </div>
    </div>
  )
}

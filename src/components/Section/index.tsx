import Item from '../Item'

export default function Section({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const featured = title === 'Featured'
  return (
    <div className='flex flex-col w-full'>
      <h3 className='font-bold text-xl'>{title}</h3>
      <p className='text-sm text-gray-500 mb-5'>{description}</p>
      <div className='flex flex-col md:flex-row gap-3 p-2'>
        <Item featured={featured} />
        <Item featured={featured} />
        <Item featured={featured} />
        <Item featured={featured} />
      </div>
    </div>
  )
}

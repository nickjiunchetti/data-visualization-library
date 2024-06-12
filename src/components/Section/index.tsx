import Item from '../Item'
import { itemType, itensDataType } from '@/app/page'
export default function Section({
  title,
  description,
  itens,
}: {
  title: string
  description: string
  itens: itensDataType
}) {
  const featured = title === 'Featured'
  return (
    <div className='flex flex-col w-full mb-5'>
      <h3 className='font-bold text-xl'>{title}</h3>
      <p className='text-sm text-gray-500 mb-5'>{description}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {itens.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            description={item.description}
            date={item.date && item.date}
            featured={featured}
          />
        ))}
      </div>
    </div>
  )
}

export function ModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className='flex justify-center gap-2 mt-3 text-xl font-bold items-center'>
      {children}
      <span className='font-normal text-xs text-gray-500 bg-gray-50 p-1 rounded'>
        Layout
      </span>
    </p>
  )
}

export function AssetDescription({ children }: { children: React.ReactNode }) {
  return <p className='mt-1 text-xs text-gray-400'>{children}</p>
}

'use client'
import { itensDataType } from '@/app/page'
import { useEffect, useState } from 'react'

export default function TabBar({
  activeTab,
  setActiveTab,
  itensData,
  setFilteredItens,
}: {
  activeTab: string
  setActiveTab: Function
  itensData: itensDataType
  setFilteredItens: Function
}) {
  const tabs = [
    { name: 'Featured' },
    { name: 'KPI' },
    { name: 'Layouts' },
    { name: 'Storyboards' },
  ]

  useEffect(() => {
    activeTab === 'Featured'
      ? setFilteredItens(itensData)
      : setFilteredItens([])
  }, [activeTab, itensData, setFilteredItens])

  return (
    <>
      <div className='w-full flex mb-8 bg-gray-100 rounded p-1'>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`text-sm w-full px-3 py-1  ${
              activeTab === tab.name
                ? ' bg-white rounded font-semibold'
                : ' text-gray-300'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {activeTab != 'Featured' && (
        <div className='flex flex-col items-center justify-center h-full gap-2'>
          <p className='text-gray-500 text-center'>
            You don&apos;t have permission to see this assets.
          </p>
          <button className='flex p-3 items-center gap-2 text-sm bg-gray-500 text-gray-50 rounded-md'>
            <span className='material-symbols-outlined'>box_add</span>
            Request Permission
          </button>
        </div>
      )}
    </>
  )
}

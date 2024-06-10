'use client'
import { useState } from 'react'

export default function TabBar() {
  const [activeTab, setActiveTab] = useState('Featured')

  const tabs = [
    { name: 'Featured' },
    { name: 'KPI' },
    { name: 'Layouts' },
    { name: 'Storyboards' },
  ]

  return (
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
  )
}

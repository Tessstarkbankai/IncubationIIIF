import React from 'react'

function SubSection({text}) {
  return (
    <div className=' w-full h-[240px] bg-gradient-to-r from-gray-100 to-gray-400 flex justify-center'>
      <h1 className=' flex text-3xl font-bold items-center text-gray-600'>{text}</h1>
    </div>
  )
}

export default SubSection
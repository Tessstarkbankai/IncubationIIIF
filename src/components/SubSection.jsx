import React from 'react'

function SubSection({text}) {
  return (
    <div className=' w-full h-[240px] bg-[#f2f2f2] flex justify-center'>
      <h1 className=' flex text-3xl font-bold items-center text-gray-600'>{text}</h1>
    </div>
  )
}

export default SubSection
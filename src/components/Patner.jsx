import React from 'react'

function Patner({image,name}) {
  return (
    <div className=' flex justify-center py-6 px-10 flex-col hover:bg-white hover:shadow-lg hover:transition-all hover:duration-300'>
      <img src={image} className='w-[160px] h-[160px]' alt="" />
      <h1 className=' font-semibold text-lg text-gray-600 text-center'>{name}</h1>
    </div>
  )
}

export default Patner
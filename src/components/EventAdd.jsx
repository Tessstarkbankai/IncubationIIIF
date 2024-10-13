import React from 'react'


function EventAdd({image,text,heading}) {
  return (
    <>
      <div className='p-4 flex sm:flex-row flex-col justify-center gap-20 items-center mt-10 mb-12 overflow-hidden'>
        <div className="flex img">
          <img className='justify-center h-[380px]' src={image} alt="H" />
        </div>
        <div className="text sm:w-[700px] text-lg ">
          <h1 className='text-center sm:text-3xl font-bold text-gray-500 mb-8'>{heading}</h1>
          <h1 className=' text-center sm:text-xl' style={{textAlign: "justify"}}>{text}</h1>
        </div>
      </div>
    </>
  )
}

export default EventAdd
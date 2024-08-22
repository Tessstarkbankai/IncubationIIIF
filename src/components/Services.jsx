import React from 'react'

function Services() {
  return (
    <div className=' w-full sm:h-[700px] mt-10'>
      <h1 className=' text-xl sm:text-3xl font-extrabold font-sans text-center sm:tracking-widest mb-2 z-10 relative'>OUR SERVICES</h1>
      <div className=' w-[110px] sm:w-[190px] h-1 bg-blue-600 m-auto mb-4 z-10 relative'></div>
      <div className=' sm:mt-[-60px] mt-10 flex justify-center'>
        <img src="./ServiceInc.png" width={'2000px'} alt="" />
      </div>
    </div>
  )
}

export default Services
import React from 'react'

function CardBig() {
  return (
    <div className=' w-[80%] h-[400px] bg-slate-600 flex justify-center m-auto p-8 gap-10 bg-gradient-to-tl from-blue-500 to-transparent via-blue-300 shadow-lg rounded-lg'>
      <div className=' flex justify-center items-center'>
        <img className=' mt-6' src="./area.jpg" alt="" />
      </div>
      <div className=' flex justify-center flex-col text-center font-sans'>
        <h1 className=' text-blue-500 text-3xl font-extrabold mb-4'>III | The mission </h1>
        <h3 className=' text-start text-xl text-white'>III provides a home for Invertis’s thriving community of innovators & entrepreneurs, supporting all who pursue ideas with a passion for world-changing impact.</h3>

      </div>
    </div>
  )
}

export default CardBig
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function CardBig() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className=' w-[80%] h-[400px] bg-slate-600 sm:flex justify-center m-auto p-8 gap-10 bg-gradient-to-tl from-blue-500 to-transparent via-blue-300 shadow-lg rounded-lg'>
      <div className=' hidden sm:flex justify-center items-center' data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="600">
        <img className=' sm:mt-6' src="./area.jpg" alt="" />
      </div>
      <div className=' sm:hidden flex justify-center items-center' data-aos="zoom-out" data-aos-easing="linear"
        data-aos-duration="600">
        <img className=' sm:mt-6' src="./area.jpg" alt="" />
      </div>
      <div className=' hidden sm:flex justify-center flex-col text-center font-sans' data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="600">
        <h1 className=' text-blue-500 sm:mt-0 mt-4 text-xl sm:text-3xl font-extrabold mb-4'>III | The mission </h1>
        <h3 className=' sm:text-start text-center sm:text-xl text-sm text-white'>III provides a home for Invertis’s thriving community of innovators & entrepreneurs, supporting all who pursue ideas with a passion for world-changing impact.</h3>

      </div>
      <div className=' sm:hidden flex justify-center flex-col text-center font-sans' data-aos="zoom-out" data-aos-easing="linear"
        data-aos-duration="600">
        <h1 className=' text-blue-500 sm:mt-0 mt-4 text-xl sm:text-3xl font-extrabold mb-4'>III | The mission </h1>
        <h3 className=' sm:text-start text-center sm:text-xl text-sm text-white'>III provides a home for Invertis’s thriving community of innovators & entrepreneurs, supporting all who pursue ideas with a passion for world-changing impact.</h3>

      </div>
    </div>
  )
}

export default CardBig
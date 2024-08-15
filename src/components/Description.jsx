import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Description() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className=' w-full sm:h-[700px] h-[600px] bg-white space-x-20 '>
      <div className="heading flex justify-center mt-[220px] " data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="600" >
        <h1 className=' mt-8 sm:mt-0 shadow-xl p-3 sm:p-10  sm:tracking-widest font-sans font-extrabold text-3xl sm:text-[70px] text-black rounded-xl'>What is <span className=' text-blue-600'>IIIF</span></h1>
      </div>
      <div className=' sm:flex gap-8 mt-10 sm:mt-20'>
        <div className=" flex justify-center items-center sm:w-[1100px] w-[90%] font-semibold sm:text-xl text-sm text-start ">
          <div className='hidden sm:flex sm:ml-[100px] text-center sm:text-left' data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="600">
            <h1>More than just “a building”, iHQ is the beating heart of the innovation & entrepreneurship (I&E) community at MIT.
              It’s the culmination of a decade of careful planning, painstaking reconstruction, and thoughtful community-building. Located in the heart of Kendall Square, “the most innovative square mile on the planet”, iHQ creates the opportunity for world-changing impact not only at MIT but throughout the Greater Boston innovation ecosystem and much further afield. </h1>
          </div>
          <div className='flex justify-center sm:hidden sm:ml-[100px] ml-[-50px] text-start p-1 sm:text-left' data-aos="zoom-in" data-aos-easing="linear"
            data-aos-duration="600">
            <h1>More than just “a building”, iHQ is the beating heart of the innovation & entrepreneurship (I&E) community at MIT.
              It’s the culmination of a decade of careful planning, painstaking reconstruction, and thoughtful community-building. Located in the heart of Kendall Square, “the most innovative square mile on the planet”, iHQ creates the opportunity for world-changing impact not only at MIT but throughout the Greater Boston innovation ecosystem and much further afield. </h1>
          </div>
        </div>
        <div className="img hidden sm:flex sm:mr-[120px] sm:ml-[50px] mr-12 mt-8 sm:mt-0" data-aos="fade-left" data-aos-easing="linear"
          data-aos-duration="600">
          <img className=' w-[850px]' src="./mit.png" alt="" />
        </div>
        <div className="img flex ml-[-30px] sm:hidden sm:mr-[120px] sm:ml-[50px] w-[90%] mt-8 sm:mt-0" data-aos="zoom-out" data-aos-easing="linear"
          data-aos-duration="600">
          <img className=' w-[1250px]' src="./mit.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Description
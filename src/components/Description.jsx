import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import desc_img from '../assets/descrip_img.jpg'
import './Hero.css'

function Description() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className=' sm:h-[700px] h-[600px] bg-white space-x-20 '>
      <div className="heading sm:w-[600px] w-[60%] sm:ml-[30%] ml-[80px]  flex shadow-xl  rounded-lg justify-center mt-[260px] " data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="600" >
        <h1 className=' mt-8 sm:mt-0  p-3 sm:p-10  sm:tracking-wide font-sans font-extrabold text-3xl sm:text-[60px] text-gray-600'>Introducing</h1>
        <img className=' sm:ml-[-40px] ml-[-18px] sm:w-28 w-20 sm:h-24 h-14 mt-9 sm:mt-4' src="./incub-logo.png" alt="" />
      </div>
      <div className=' sm:flex gap-8 mt-10 sm:mt-20'>
        <div className=" flex justify-center items-center sm:w-[1100px] w-[90%] font-semibold sm:text-xl text-sm text-start ">
          <div className='hidden sm:flex sm:ml-[100px] justify-text text-center sm:text-left' data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="600">
            <h1 className=' justify-text'>III is not merely a building; it is the vibrant core of the innovation and entrepreneurship (I&E) community at Invertis. This space represents the result of years of meticulous planning, extensive reconstruction, and national community-building. Situated in the heart of Invertis University Bareilly, known as "the most innovative place in the state," III fosters opportunities for transformative impact, not just at Invertis, but across the Indian innovation ecosystem and beyond. </h1>
          </div>
          <div className='flex justify-center justify-text sm:hidden sm:ml-[100px] ml-[-50px] text-start p-1 sm:text-left' data-aos="zoom-in" data-aos-easing="linear"
            data-aos-duration="600">
            <h1 className=' justify-text'>III is not merely a building; it is the vibrant core of the innovation and entrepreneurship (I&E) community at Invertis. This space represents the result of years of meticulous planning, extensive reconstruction, and national community-building. Situated in the heart of Invertis University Bareilly, known as "the most innovative place in the state," III fosters opportunities for transformative impact, not just at Invertis, but across the Indian innovation ecosystem and beyond. </h1>
          </div>
        </div>
        <div className=" shadow-2xl img hidden sm:flex sm:mr-[120px] sm:ml-[50px] mr-12 mt-8 sm:mt-0" data-aos="fade-left" data-aos-easing="linear"
          data-aos-duration="600">
          <img className=' w-[850px]' src={desc_img} alt="" />
        </div>
        <div className=" shadow-lg img flex ml-[-30px] sm:hidden sm:mr-[120px] sm:ml-[50px] w-[90%] mt-8 sm:mt-0" data-aos="zoom-out" data-aos-easing="linear"
          data-aos-duration="600">
          <img className=' w-[1250px]' src={desc_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Description
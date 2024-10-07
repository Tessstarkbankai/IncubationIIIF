import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Hero.css'

function SubSection({text}) {
  useEffect(() => {
    Aos.init();
 }, [])
  return (
  
  // <div className=' h-[240px] flex justify-center relative'>
  //   <img src="./SubSec.png" alt="" />
  //   <div></div>
  // <div className='absolute inset-0 bg-gray-900 opacity-60'></div>
  // <h1 className='flex text-4xl tracking-widest font-bold items-center text-white' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">{text}</h1>
  // </div>

  <div className=' cont h-[240px] flex justify-center relative'>
    <img className=' absolute w-full h-[240px]' src="./SubSec.png" alt="" />
    <div className='absolute inset-0 bg-gray-900 opacity-70'></div>
    <h1 className='flex text-3xl tracking-widest font-bold items-center text-white' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">{text}</h1>
  </div>

    
  )
}

export default SubSection
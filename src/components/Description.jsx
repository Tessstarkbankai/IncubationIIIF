import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Description() {
  useEffect(() => {
    Aos.init();
 }, [])
  return (
    <div className=' w-full h-[700px] bg-white space-x-20 '>
      <div className="heading flex justify-center mt-[220px] " data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="600" >
        <h1 className=' shadow-xl p-4 tracking-widest font-sans font-extrabold text-[70px] text-black rounded-xl'>What is <span className=' text-blue-600'>IIIF</span></h1>
      </div>
      <div className=' flex gap-8 mt-20'>
        <div className=" flex items-center text w-[1100px] font-semibold text-xl text-start ">
      <div className=' ml-[100px]' data-aos="fade-right" data-aos-easing="linear"
    data-aos-duration="600">
          <h1>More than just “a building”, iHQ is the beating heart of the innovation & entrepreneurship (I&E) community at MIT.
            It’s the culmination of a decade of careful planning, painstaking reconstruction, and thoughtful community-building. Located in the heart of Kendall Square, “the most innovative square mile on the planet”, iHQ creates the opportunity for world-changing impact not only at MIT but throughout the Greater Boston innovation ecosystem and much further afield. </h1>
            </div>
        </div>
        <div className="img mr-[120px] ml-[50px]"  data-aos="fade-left" data-aos-easing="linear"
    data-aos-duration="600">
          <img className=' w-[850px]' src="./mit.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Description
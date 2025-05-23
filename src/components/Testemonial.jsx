import React, { useEffect } from 'react'
import ShineBorder from "@/components/magicui/shine-border";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Hero.css'

function Testemonial({image,Description,post,name}) {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <ShineBorder
      className="relative flex sm:h-[500px] h-[620px] m-auto w-[80%] flex-col mb-40 items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className=' flex sm:flex-row flex-col justify-center p-4 sm:gap-[100px] gap-2' data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="600">
        <img className='m-auto sm:m-0 w-[200px] sm:w-[450px] sm:h-[420px] h-[180px] ' src={image} alt="" />
      <div className=" sm:mt-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-black to-blue-300/80 bg-clip-text text-center sm:text-4xl text-xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10" data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="600">
        <span className=' whitespace-pre-wrap bg-gradient-to-b from-black to-blue-300/90 bg-clip-text'>By {post}</span>
        <div className='justify-text sm:text-xl text-sm  sm:mt-11 mt-4 ' >{Description}

</div>
      <div className=' sm:text-[20px] text-[18px] font-semibold mt-8 sm:mr-8 text-right'>{name}</div>
      </div>
      </div>
    </ShineBorder>
  )
}

export default Testemonial
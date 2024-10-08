import React from 'react'
import videobg from '../assets/video.mp4'
import video from '../assets/IncubVideo.mp4'
import './Hero.css'

function Hero() {
  return (
    <div className=' flex justify-center sm:h-[700px] items-center font-sans overflow-hidden'>
      <div className=' absolute w-full  sm:h-[840px] top-[120px] bg-red-50'>
        <video src={video} autoPlay loop muted className=' inset-0 w-full h-full object-cover'></video>
      </div>
      <div className=" text-white  flex flex-col absolute top-[120px] w-[100%] sm:h-[840px] h-[57vw] justify-center items-center bg-black opacity-55 ">
        <h1 className="text-center sm:text-8xl text-2xl tracking-wider font-extrabold font-sans sm:mt-[-280px] md:mt-[-350px] lg:mt-[-400px] xl:mt-[-250px]">Invertis Innovation &</h1>
        <h1 className="text-center sm:text-8xl sm:mx-4 text-2xl tracking-widest font-extrabold font-sans sm:mt-[-10px] md:mt-[-5px] lg:mt-[-2px] xl:mt-[15px]">Incubation</h1>
        <h3 className="text-center sm:text-2xl mt-5 text-yellow-300 font-semibold tracking-tight">This is the home for the thriving community of Invertis' Innovators & Entrepreneurs.</h3>
      </div>
    </div>
  )
}

export default Hero
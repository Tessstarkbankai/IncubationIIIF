import React from 'react'
import videobg from '../assets/video.mp4'
import './Hero.css'

function Hero() {
  return (
    <div className=' flex justify-center sm:h-[700px] items-center font-sans'>
      <div className=' absolute w-full h-[170px] sm:h-[700px] top-[120px] bg-red-50'>
        <video src={videobg} autoPlay loop muted className=''></video>
      </div>
      <div className=" text-white  flex flex-col absolute top-[120px] w-[100%] sm:h-[855px] h-[210px] justify-center items-center bg-black opacity-55 ">
        <h1 className=' sm:text-[75px] font-extrabold font-sans sm:mt-[-350px]'>Invertis Innovation & Incubation </h1>
        <h3 className=' sm:text-[25px] text-yellow-300 text-center'>This is the home for Inverti's thriving community of innovators & entrepreneurs.</h3>
      </div>
    </div>
  )
}

export default Hero
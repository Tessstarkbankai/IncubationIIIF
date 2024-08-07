import React from 'react'
import videobg from '../assets/video.mp4'
import './Hero.css'

function Hero() {
  return (
    <div className=' flex justify-center h-[700px] items-center font-sans'>
      <div className='overlayA'>
        <video src={videobg} autoPlay loop muted className=' object-cover'></video>
      </div>
      <div className=" text-white  flex flex-col absolute top-[120px] w-[100%] h-[855px] justify-center items-center bg-black opacity-55 ">
        <h1 className=' text-[75px] font-extrabold font-sans mt-[-350px]'>Invertis Innovation & Incubation </h1>
        <h3 className=' text-[25px] text-yellow-300'>This is the home for Inverti's thriving community of innovators & entrepreneurs.</h3>
      </div>
    </div>
  )
}

export default Hero
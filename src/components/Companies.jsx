import React from 'react'
import Marquee from 'react-fast-marquee'

function Companies() {
  return (
    <>
    <h1 className=' text-3xl font-extrabold font-sans text-center tracking-widest mb-2'>OUR PARTNERS</h1>
    <div className=' w-[190px] h-1 bg-blue-600 m-auto mb-4'></div>
    <Marquee speed={200} autoFill={false} gradient={true} pauseOnHover={true} gradientWidth={400} className=' mt-10 mb-[90px]'>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l1.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l2.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l3.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l4.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l6Q.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l7.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l8.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l3.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l4.jpg" alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src="./l1.jpg" alt="" />
        </div>
    </Marquee>
    </>
  )
}

export default Companies
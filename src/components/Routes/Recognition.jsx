import React from 'react'
import SubSection from '../SubSection'
import startinUP from '../../assets/startinUP.png'
function Recognition() {
  return (
    <>
    <div className=' h-[90vh]'>
      <SubSection text={'Recognition'}/>
      {/* <div className=' sm:flex overflow-hidden '>
        <div className='ml-20 w-[500px] sm:p-[50px] sm:ml-12'>
          <img src="./msme.jpg" alt="" />
        </div>
        <div className=' text-gray-600 text-xl p-[70px]'>
          <h1 className=' sm:text-2xl text-blue-600 font-semibold pb-4'>Recognition of Incubator centre of Invertis University “Invertis Innovation Incubator Foundation (IIIF) by Ministry of Science & Technology, GOI</h1>
          <h2>Invertis University Institute of Engineering & Technology has been recognized as Business Incubator (BI)/host Institution (HI) for implementation of the Scheme “Support for Entrepreneurial & management development of SMEs through incubator by Ministry of Micro, Small and Medium Enterprises, Government of India</h2>
        </div>
      </div>
    </div>
    <div>
      <div className=' sm:flex overflow-hidden '>
        <div className='ml-20 w-[500px] sm:p-[50px] sm:ml-12'>
          <img src="./sceince-tech-logo.jpg" alt="" />
        </div>
        <div className=' text-gray-600 text-xl p-[70px]'>
          <h1  className=' sm:text-2xl text-blue-600 font-semibold pb-4'>Recognition of Incubator centre of Invertis University “Invertis Innovation Incubator Foundation (IIIF) by Ministry of Science & Technology, GOI</h1>
          <h2>Invertis University Institute of Engineering & Technology has been recognized as Business Incubator (BI)/host Institution (HI) for implementation of the Scheme “Support for Entrepreneurial & management development of SMEs through incubator by Ministry of Micro, Small and Medium Enterprises, Government of India</h2>
        </div>
      </div> */}
      <div className=' flex justify-center px-16 items-center gap-10 mt-44 m-auto text-center text-4xl text-gray-500'> 
        <div className="img">
          <img src={startinUP} alt="" />
        </div>
        <div className="h1">
          <h1>Recognition of Invertis Innovation & Incubation Center by Start in UP</h1>
        </div>
      </div>
    </div>
    
    </>

    
  )
}

export default Recognition
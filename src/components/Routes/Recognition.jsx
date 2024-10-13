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
      <div className=' sm:flex justify-center px-16 items-center gap-10 mt-52 m-auto text-center text-4xl text-gray-500'> 
        <div className="img mb-2 flex justify-center mt-[-60px]">
          <img src={startinUP} className='' alt="" />
        </div>
        <div className="h1 sm:mt-[-60px] mt-10 text-left sm:text-center  sm:text-4xl text-lg" style={{ textAlign: 'justify' }}>
          <h1>Recognition of Invertis Innovation & Incubation Centre by StartinUP.</h1>
          <div className="btn">
           <a href="./downloadFor.pdf" download><button className=' transition ease-in-out text-[20px] border-2 rounded-md p-1 mt-4 text-orange-400 hover:text-blue-500'>Download PDF</button></a> 
          </div>
        </div>
      </div>
    </div>
    
    </>

    
  )
}

export default Recognition
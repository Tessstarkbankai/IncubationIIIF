import React from 'react'
import SubSection from '../SubSection'

function MissionVision() {
  return (
    <div>
      <SubSection text={'Mission & Vision'}/>
      <div className=' sm:px-[200px] px-[50px] py-[30px] sm:py-[60px]'>
       <h1 className=' text-3xl text-blue-600 font-bold'>Mission</h1>
       <h3 className=' text-xl text-gray-600 py-8'>Empower the next generation of entrepreneurs to solve local challenges by turning innovative ideas into successful startups. We foster collaboration among students, faculty, alumni, and local industries to drive impactful change.</h3>
       </div>
       <div className='sm:px-[200px] px-[50px] py-[20px] sm:py-[10px] pb-11'>
       <h1 className=' text-3xl text-blue-600 font-bold'>Vision</h1>
       <h3 className=' text-xl text-gray-600 py-8'>Empower aspiring entrepreneurs to launch successful ventures with minimal risk through a supportive, resource-rich platform.</h3>
       </div>
    </div>
  )
}

export default MissionVision
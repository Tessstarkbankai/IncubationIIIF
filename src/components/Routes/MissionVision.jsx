import React from 'react'
import SubSection from '../SubSection'

function MissionVision() {
  return (
    <div>
      <SubSection text={'Mission & Vision'}/>
      <div className=' px-[200px] py-[70px]'>
       <h1 className=' text-3xl text-blue-600 font-bold'>Mission</h1>
       <h3 className=' text-xl text-gray-600 py-8'>The mission of CIIF is to promote entrepreneurship among students and faculty members via mentoring, networking, education, funding and incubation. CIIF’s focus is to create a lively and sustainable startup ecosystem on University campus for nurturing and enrichment of Innovation and Entrepreneurship.</h3>
       </div>
       <div className=' px-[200px] pb-11'>
       <h1 className=' text-3xl text-blue-600 font-bold'>Vision</h1>
       <h3 className=' text-xl text-gray-600 py-8'>We are dedicated to fostering innovation and entrepreneurship amongst students, faculty members and other aspirants for establishment and growth of technology businesses to meet economic growth of our communities..</h3>
       </div>
    </div>
  )
}

export default MissionVision
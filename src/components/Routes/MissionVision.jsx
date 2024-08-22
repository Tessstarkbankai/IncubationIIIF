import React from 'react'
import SubSection from '../SubSection'

function MissionVision() {
  return (
    <div>
      <SubSection text={'Mission & Vision'}/>
      <div className=' sm:px-[200px] px-[50px] py-[30px] sm:py-[60px]'>
       <h1 className=' text-3xl text-blue-600 font-bold'>Mission</h1>
       <h3 className=' text-xl text-gray-600 py-8'>Invertis Innovation and Incubation Foundation is dedicated to cultivating a vibrant entrepreneurial spirit among students. By offering comprehensive programs and resources, we aim to inspire and equip them to pursue entrepreneurship as a fulfilling career path. Our focus lies in fostering a campus environment that nurtures innovative ideas and empowers students to transform them into sustainable, student-led startups. Through mentorship, workshops, and practical support, we strive to create a thriving entrepreneurial ecosystem that drives economic growth and societal impact. </h3>
       </div>
       <div className='sm:px-[200px] px-[50px] py-[20px] sm:py-[10px] pb-11'>
       <h1 className=' text-3xl text-blue-600 font-bold'>Vision</h1>
       <h3 className=' text-xl text-gray-600 py-8'>Invertis Innovation and Incubation Foundation is committed to fostering a thriving ecosystem within the campus community that nurtures innovation and empowers startups. By providing the necessary support and resources, we aim to cultivate a culture of entrepreneurship that drives economic growth and contributes to nation-building. Our focus is on empowering young minds to transform their innovative ideas into successful ventures, thereby creating a positive impact on society.</h3>
       </div>
    </div>
  )
}

export default MissionVision
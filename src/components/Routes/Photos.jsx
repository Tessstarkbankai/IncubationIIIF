// Build Patner Colab Page


import holland from '../../assets/Events_Photos/holland_banner.jpeg'
import hollandStu from '../../assets/Events_Photos/holland_student.jpeg'
import ipr from '../../assets/Events_Photos/IPR.jpeg'
import iprStu from '../../assets/Events_Photos/IPR_student.jpeg'
import creative from '../../assets/Events_Photos/creative.png'
import creativeStud from '../../assets/Events_Photos/creativeStudent.jpeg'
import jobseek from '../../assets/Events_Photos/jobseek.jpeg'
import jobseekStu from '../../assets/Events_Photos/jobseekstudent.jpeg'
import startup from '../../assets/Events_Photos/startup.jpeg'
import startupStu from '../../assets/Events_Photos/startup_student.jpeg'

import img2 from '../../assets/About_image.jpg'

import Photo from "../Photo";
import React from 'react'
import SubSection from '../SubSection';

function Photos() {
  return (
    <>
      <SubSection text={"Photos & Videos"}/>
    <div className=' sm:px-56 sm:py-24 py-12 flex justify-center  flex-wrap gap-5'>
      <Photo image={holland} />
      <Photo image={hollandStu} />
      <Photo image={ipr} />
      <Photo image={iprStu} />
      <Photo image={creative} />
      <Photo image={creativeStud} />
      <Photo image={jobseek} />
      <Photo image={jobseekStu} />
      <Photo image={startup} />
      <Photo image={startupStu} />

    </div>
    </>
  )
}

export default Photos

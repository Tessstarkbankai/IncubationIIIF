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
import chance from '../../assets/Event_Photos/chace.JPG'
import cpodium from '../../assets/Event_Photos/cpodium.JPG'
import guest from '../../assets/Event_Photos/guests.JPG'
import iside from '../../assets/Event_Photos/iside.JPG'
import machine from '../../assets/Event_Photos/machine.JPG'
import parthpodium from '../../assets/Event_Photos/pathsirpodium.JPG'
import parth from '../../assets/Event_Photos/pnice.JPG'
import prize from '../../assets/Event_Photos/prize.JPG'
import trophy from '../../assets/Event_Photos/trophy.JPG'
import vr from '../../assets/Event_Photos/vrf.JPG'

import Photo from "../Photo";
import React from 'react'
import SubSection from '../SubSection';

function Photos() {
  return (
    <>
      <SubSection text={"Photos & Videos"} />
      <div className=' sm:px-56 sm:py-24 py-12 flex justify-center  flex-wrap gap-5'>
        <h1 className='text-center sm:text-left inline w-full font-bold text-xl'>Inauguration Ceremony of Invertis Innovation & Incubation</h1>
        <Photo image={chance}  />
        <Photo image={cpodium}  />
        <Photo image={guest}  />
        <Photo image={parthpodium}  />
        {/* <Photo image={parth}  /> */}
        <Photo image={prize}  />
        <Photo image={iside}  />
        <Photo image={vr}  />
        <Photo image={machine}  />
        <h1 className='text-center sm:text-left inline w-full font-bold text-xl'>Seminars and Industrial Visits</h1>
        <Photo image={holland} />
        <Photo image={hollandStu} />
        <Photo image={ipr}/>
        <Photo image={iprStu}  />
        <Photo image={creative} />
        <Photo image={creativeStud}  />
        <Photo image={jobseek} />
        <Photo image={jobseekStu} />
        <Photo image={startup} />
        <Photo image={startupStu}   />
      </div>
    </>
  )
}

export default Photos

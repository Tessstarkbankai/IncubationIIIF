// Build Patner Colab Page


import holland from '../../assets/Event_Photos/Pchema.jpg'
import hollandStu from '../../assets/Event_Photos/Aethra.jpg'
import ipr from '../../assets/Event_Photos/Cheema.jpg'
import iprStu from '../../assets/Event_Photos/handshake.jpg'
import creative from '../../assets/Event_Photos/Shark.jpg'
import creativeStud from '../../assets/Event_Photos/Shark3.jpg'
import jobseek from '../../assets/Event_Photos/all.JPG'
import jobseekStu from '../../assets/Event_Photos/us.png'
import startup from '../../assets/Events_Photos/startup.jpeg'
import startupStu from '../../assets/Events_Photos/startup_student.jpeg'
import chance from '../../assets/Events_Photos/chancellor.JPG'
import cpodium from '../../assets/Event_Photos/cpodium.JPG'
import guest from '../../assets/Event_Photos/guests.JPG'
import iside from '../../assets/Event_Photos/iside.JPG'
import machine from '../../assets/Event_Photos/machine.JPG'
import parthpodium from '../../assets/Event_Photos/pathsirpodium.JPG'
import parth from '../../assets/Event_Photos/pnice.JPG'
import prize from '../../assets/Event_Photos/prize.JPG'
import trophy from '../../assets/Event_Photos/trophy.JPG'
import vr from '../../assets/Event_Photos/vrf.JPG'
import conference from '../../assets/StartUp_Day/conf.jpg';
import smart_board from '../../assets/StartUp_Day/smart_board.jpg';
import imgg from '../../assets/StartUp_Day/IMG_2813.jpg';
import student from '../../assets/StartUp_Day/student_sitting.jpg';




import Photo from "../Photo";
import React from 'react'
import SubSection from '../SubSection';

function Photos() {
  return (
    <>
      <SubSection text={"Photos & Videos"} />
      <div className=' sm:px-40 sm:py-24 py-12 flex justify-center  flex-wrap gap-5'>
        <h1 className='text-center sm:text-left inline w-full font-bold text-xl'>Inauguration Ceremony of Invertis Innovation & Incubation</h1>
        <Photo image={chance}   />
        <Photo image={cpodium} />
        <Photo image={guest}  />
        <Photo image={parthpodium}  />
        {/* <Photo image={parth}  /> */}
        <Photo image={prize}  />
        <Photo image={iside}  />
        <Photo image={vr}  />
        <Photo image={machine}  />
        <h1 className='text-center sm:text-left inline w-full font-bold text-xl'>Shark Tank Invertis</h1>
        <Photo image={holland} />
        <Photo image={hollandStu} />
        <Photo image={ipr}/>
        <Photo image={iprStu}  />
        <Photo image={creative} />
        <Photo image={creativeStud}  />
        <Photo image={jobseek} />
        <Photo image={jobseekStu} />
        <h1 className='text-center sm:text-left inline w-full font-bold text-xl'>National Start Up Day</h1>
        <Photo image={conference} />
        <Photo image={smart_board} />
        <Photo image={imgg} />
        <Photo image={student} />
      </div>
    </>
  )
}

export default Photos

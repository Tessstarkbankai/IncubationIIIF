import React from 'react'
import './Hero.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function GridComponent() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (

    <div className="grid-container sm:mt-0 mt-12" data-aos="zoom-in-up" data-aos-easing="linear"
      data-aos-duration="600" >
      <div className="grid-item" >
        <div className="icon">📁</div>
        <h3>STRUCTURED MENTORING PROGRAM</h3>
        <p>Mentoring significantly boosts a company's chances of success. We grasp the journey and provide guidance tailored to each step.</p>
      </div>
      <div className="grid-item bg-[#f2f2f2] text-blue-500 font-bold ">
        <div className="icon">🎯</div>
        <h3>EMPHASIS ON STUDENT STARTUPS</h3>
        <p>The idea is to encourage innovation and creativity there is no time and age to build an idea, so you can start early.</p>
      </div>
      <div className="grid-item">
        <div className="icon">🏭</div>
        <h3>EMPHASIS ON INDUSTRY NETWORK</h3>
        <p>The aim is to cultivate ongoing and lasting collaboration between major corporations and cutting-edge technology ventures.</p>
      </div>
      <div className="grid-item bg-[#f2f2f2] text-blue-500 font-bold ">
        <div className="icon">💸</div>
        <h3>SEED FUNDING SUPPORT</h3>
        <p>The incubator offers seed funding to assist startups in developing their business ideas, creating prototypes, conducting market research, and covering initial expenses.</p>
      </div>
      <div className="grid-item">
        <div className="icon">📍</div>
        <h3>SUBSIDIZED INCUBATION SPACE</h3>
        <p>We support your startup's creation, development, and design by offering office space where you and your team can collaborate and work together as a unified group.
        </p>
      </div>
      <div className="grid-item bg-[#f2f2f2] text-blue-500 font-bold">
        <div className="icon">🚀</div>
        <h3>TARGETED ACCELERATION PROGRAM</h3>
        <p>We nurture the growth and development of entrepreneurial talent in youth. Our acceleration program provides young startups with the tools and skills they need to succeed.</p>
      </div>
    </div>
  )
}

export default GridComponent
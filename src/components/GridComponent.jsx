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
  
    <div className="grid-container" data-aos="zoom-in-up" data-aos-easing="linear"
    data-aos-duration="600" >
      <div className="grid-item" >
        <div className="icon">📁</div>
        <h3>STRUCTURED MENTORING PROGRAM</h3>
        <p>Mentoring increases companies odds of success. We understand the journey and advise accordingly.</p>
      </div>
      <div className="grid-item bg-[#f2f2f2] text-blue-500 font-bold ">
        <div className="icon">🎯</div>
        <h3>FOCUS ON STUDENT STARTUPS</h3>
        <p>The idea is to encourage innovation and creativity there is no time and age to build an idea, so you can start early.</p>
      </div>
      <div className="grid-item">
        <div className="icon">🏭</div>
        <h3>FOCUS ON INDUSTRY NETWORK</h3>
        <p>The notion is to foster continuous and sustained engagement between large corporates and innovative technology ventures.</p>
      </div>
      <div className="grid-item bg-[#f2f2f2] text-blue-500 font-bold ">
        <div className="icon">💸</div>
        <h3>PROVISION OF SEED FUND</h3>
        <p>Incubator provides seed funding to help startups in developing their business idea, create a prototype, conduct market research, and cover initial expenses.</p>
      </div>
      <div className="grid-item">
        <div className="icon">📍</div>
        <h3>PROVISION OF SUBSIDIZED INCUBATION SPACE</h3>
        <p>We help your startup to create, develop and design by providing an office space, where you and your team can brainstorm and work together as one unit.</p>
      </div>
      <div className="grid-item bg-[#f2f2f2] text-blue-500 font-bold">
        <div className="icon">🚀</div>
        <h3>FOCUSED ACCELERATION PROGRAM</h3>
        <p>We help the growth and development of entrepreneurial talent in youth. Acceleration program equips young startups with the tools and skills.</p>
      </div>
    </div>
  )
}

export default GridComponent
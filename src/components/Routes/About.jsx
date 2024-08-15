import React, { useEffect } from 'react'
import SubSection from '../SubSection'
import Aos from 'aos'
import 'aos/dist/aos.css'


function About() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <SubSection text={"About IIIF"} />
      <div className=' sm:flex justify-around gap-11 h-full p-[80px]'>
        <div className='' data-aos="fade-right" data-aos-easing="linear"
          data-aos-duration="600">
          <img className='mb-10 sm:mb-0 sm:w-[4000px] w-[3500px]' src="./about.jpg" alt="" />
        </div>
        <div className='hidden sm:flex '>
          <h2 className=' text-xl text-gray-600' data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="600">INVERTIS University aims to cultivate an innovative environment where students and faculty can explore their potential and transform research into real-world solutions. Faculty members actively engage in research and knowledge sharing, while students develop entrepreneurial ventures to address societal challenges.
            Despite significant R&D efforts in cutting-edge areas, the university recognizes the gap between research and commercialization, often due to industry disinterest in futuristic technologies. To bridge this divide, INVERTIS proposes to encourage faculty and students to establish companies and assume leadership roles.
            The university seeks to create an ecosystem where students and alumni can maximize their potential, contributing to societal progress through skill development and entrepreneurial endeavors. By integrating technology and creativity, INVERTIS aims to foster an entrepreneurial culture that drives knowledge growth, economic prosperity, and job creation.
          </h2>
        </div>
        <div className='sm:hidden flex '>
          <h2 className=' text-lg  text-gray-600' data-aos="zoom-in" data-aos-easing="linear"
            data-aos-duration="600">INVERTIS University aims to cultivate an innovative environment where students and faculty can explore their potential and transform research into real-world solutions. Faculty members actively engage in research and knowledge sharing, while students develop entrepreneurial ventures to address societal challenges.
            Despite significant R&D efforts in cutting-edge areas, the university recognizes the gap between research and commercialization, often due to industry disinterest in futuristic technologies. To bridge this divide, INVERTIS proposes to encourage faculty and students to establish companies and assume leadership roles.
            
          </h2>
        </div>
      </div>
    </>
  )
}

export default About
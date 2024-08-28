import React, { useEffect } from 'react'
import SubSection from '../SubSection'
import Aos from 'aos'
import 'aos/dist/aos.css'
import about_image from '../../assets/About_image.jpg'


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
          <img className=' p-2 mb-10 sm:mb-0 sm:w-[4300px] w-[3500px]' src={about_image} alt="" />
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
      <h1 className=' text-xl sm:text-3xl font-extrabold font-sans text-center sm:tracking-widest mb-2 z-10 relative'>Vision & Mission</h1>
      <div className=' w-[110px] sm:w-[190px] h-1 bg-blue-600 m-auto mb-4 z-10 relative'></div>
      <div className=' sm:px-[200px] px-[50px] py-[30px] sm:py-[20px]'>
        <h1 className=' text-3xl text-blue-600 font-bold'>Vision</h1>
        <h3 className=' text-xl text-gray-600 py-4'>Empowering aspiring entrepreneurs to launch successful ventures with minimal risk through a supportive and resource-rich platform.</h3>
      </div>
      <div className='sm:px-[200px] px-[50px] py-[10px] sm:py-[10px] pb-11'>
        <h1 className=' text-3xl text-blue-600 font-bold'>Mission</h1>
        <h3 className=' text-xl text-gray-600 py-8'>The Incubation Centre's mission is to empower the next generation of entrepreneurs to solve local challenges by transforming innovative ideas into successful startups. We foster collaboration among students, faculty, alumni, and local industries to drive impactful change.</h3>
      </div>
      
    </>
  )
}

export default About

// The Incubation Centre's mission is to empower the next generation of entrepreneurs to solve local challenges by transforming innovative ideas into successful startups. We foster collaboration among students, faculty, alumni, and local industries to drive impactful change.
import React, { useEffect } from 'react'
import SubSection from '../SubSection'
import Aos from 'aos'
import 'aos/dist/aos.css'
import about_image from '../../assets/About_image.jpg'
import '../Hero.css'


function About() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <SubSection text={"About III"} />
      <div className=' sm:flex justify-around gap-11 h-full p-[80px]'>
        <div className='' data-aos="fade-right" data-aos-easing="linear"
          data-aos-duration="600">
          <img className=' sm:mt-10 scale-105 p-2 mb-10 sm:mb-0 sm:w-[7300px] w-[3500px]' src={about_image} alt="" />
        </div>
        <div className='hidden sm:flex '>
          <h2 className=' justify-text text-lg text-gray-600' data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="600">Welcome to Invertis Innovation and Incubation <br />

            At Invertis Innovation and Incubation Foundation (IIIF), we believe that great ideas deserve to thrive. Our mission is to foster a dynamic ecosystem where innovators, entrepreneurs, and visionaries can turn their groundbreaking concepts into reality. Whether you're a budding entrepreneur, a seasoned innovator, or an organization with a vision, we’re here to provide you with the support, infrastructure, and expertise needed to scale new heights.
            
            With cutting-edge facilities, expert mentorship, and a collaborative environment, we specialize in bridging the gap between ideation and market success. From IT consulting and product development to Smart Manufacturing, HealthTech, and Sustainable Solutions, we are committed to solving real-world problems with creativity and precision.
            
            At IIIF, innovation knows no boundaries. We invite startups, researchers, industry professionals, and thought leaders to join hands with us. Together, we can drive progress, nurture talent, and create solutions that have a lasting impact. Whether it’s through access to our industry-grade labs, incubation support, or global networking opportunities, we are here to help you innovate, build, and succeed.
            
            Let’s collaborate, innovate, and create a future that inspires. Connect with us today to explore how IIIF can turn your vision into reality!
          </h2>
        </div>
        <div className='sm:hidden flex '>
          <h2 className= ' justify-text text-lg  text-gray-600' data-aos="zoom-in" data-aos-easing="linear"
            data-aos-duration="600">Welcome to Invertis Innovation and Incubation <br />

            At Invertis Innovation and Incubation Foundation (IIIF), we believe that great ideas deserve to thrive. Our mission is to foster a dynamic ecosystem where innovators, entrepreneurs, and visionaries can turn their groundbreaking concepts into reality. Whether you're a budding entrepreneur, a seasoned innovator, or an organization with a vision, we’re here to provide you with the support, infrastructure, and expertise needed to scale new heights.
            
            With cutting-edge facilities, expert mentorship, and a collaborative environment, we specialize in bridging the gap between ideation and market success. From IT consulting and product development to Smart Manufacturing, HealthTech, and Sustainable Solutions, we are committed to solving real-world problems with creativity and precision.
            
            At IIIF, innovation knows no boundaries. We invite startups, researchers, industry professionals, and thought leaders to join hands with us. Together, we can drive progress, nurture talent, and create solutions that have a lasting impact. Whether it’s through access to our industry-grade labs, incubation support, or global networking opportunities, we are here to help you innovate, build, and succeed.
            
            Let’s collaborate, innovate, and create a future that inspires. Connect with us today to explore how IIIF can turn your vision into reality!
          </h2>
        </div>
      </div>
      <h1 className=' text-xl sm:text-3xl font-extrabold font-sans text-center sm:tracking-widest mb-2 z-10 relative'>Vision & Mission</h1>
      <div className=' w-[110px] sm:w-[190px] h-1 bg-blue-600 m-auto mb-4 z-10 relative'></div>
      <div className=' sm:px-[200px] px-[50px] py-[30px] sm:py-[20px]'>
        <h1 className=' text-3xl text-blue-600 font-bold'>Vision</h1>
        <h3 className=' text-xl text-gray-600 py-4'>Empower aspiring entrepreneurs to launch successful ventures with minimal risk through a supportive, resource-rich platform.</h3>
      </div>
      <div className='sm:px-[200px] px-[50px] py-[10px] sm:py-[10px] pb-11'>
        <h1 className=' text-3xl text-blue-600 font-bold'>Mission</h1>
        <h3 className=' text-xl text-gray-600 py-8'>
        Empower the next generation of entrepreneurs to solve local challenges by turning innovative ideas into successful startups. We foster collaboration among students, faculty, alumni, and local industries to drive impactful change.</h3>
      </div>
      
    </>
  )
}

export default About

// The Incubation Centre's mission is to empower the next generation of entrepreneurs to solve local challenges by transforming innovative ideas into successful startups. We foster collaboration among students, faculty, alumni, and local industries to drive impactful change.
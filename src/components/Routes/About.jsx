import React from 'react'
import SubSection from '../SubSection'

function About() {
  return (
    <>
      <SubSection text={"About IIIF"}/>
    <div className=' flex justify-around gap-11 h-full p-[80px]'>
      <div className=''>
        <img className='' width={'4000px'}  src="./about.jpg" alt="" />
      </div>
      <div>
        <h2 className=' text-xl text-gray-600'>Entrepreneurship culture is of key importance to Chitkara University. With the vision “To promote entrepreneurial spirit amongst youth, researchers, engineers and society at large by promoting cutting edge technology & non -technology start-ups which will lead to economic and social development of the country” Chitkara University has opened its first incubator “Chitkara Innovation Incubator Foundation (CIIF)” in the year 2013 which provided a platform to the budding startups, innovators & entrepreneurs of the region.

On October 30, 2015, CIIF got registered as a company under section-8 of the Company Act. A month later CIIF got recognition as a Technology Business Incubator from, DST, Govt. of India. Currently, we have over 3 incubators in the Tricity and around 120 startups raised and mentored by CIIF in the last 5 years.

Startups incubated with CIIF are from diverse fields like Agritech, Healthtech, Edtech, SAAS, Fintech etc</h2>
      </div>
    </div>
    </>
  )
}

export default About
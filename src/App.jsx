import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Description from './components/Description'
import CardBig from './components/CardBig'
import Services from './components/Services'
import GridComponent from './components/GridComponent'
import Students from './components/Students'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Companies from './components/Companies'
import About from './components/Routes/About'
import MissionVision from './components/Routes/MissionVision'
import GoveningCouncil from './components/Routes/GoveningCouncil'
import Advisory from './components/Routes/Advisory'
import Team from './components/Routes/Team'
import Recognition from './components/Routes/Recognition'
import Testemonial from './components/Testemonial'
import parthSir from './assets/Governing/parth_sir4.jpg'
import TalhaSir from './assets/Governing/talhaSirOffice.jpg'
import Photos from './components/Routes/Photos'
import Patners from './components/Routes/Patners'
import chancellorSir from './assets/ChancellorSir.jpg'
import IncubationProg from './components/Routes/IncubationProg'
import Development from './components/Routes/Development'
import Growth from './components/Routes/Growth'
import Funding from './components/Routes/Funding'
import { Target } from 'lucide-react'
import Patents from './components/Routes/Patent'
import Sucess from './components/Routes/Success'
import Success from './components/Routes/Success'
import Videos from './components/Routes/Videos'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Hero />
              <Description />
              <Testemonial image={chancellorSir} post={"Hon'ble Chancellor Sir"} Description={"At Invertis Innovation and Incubation, we are nurturing innovation to empower the next generation of entrepreneurs. Our mission is to provide essential resources, mentorship, and a vibrant ecosystem that transforms ideas into impactful businesses on both local and global scales. Our commitment is to support aspiring entrepreneurs every step of the way, ensuring they have the tools and guidance needed to succeed in today’s competitive landscape. Join us on this journey to unlock the potential of innovation and bring their visionary ideas to life."} name={"Dr. Umesh Gautam"}/>
              <Testemonial image={parthSir} post={"Executive Director"} Description={"Invertis Innovation and Incubation is our commitment to create a dynamic space where creativity meets opportunity. Our mission is to cultivate a culture of entrepreneurship, guiding start-ups through every stage, from initial concept to successful execution. By offering world-class support, III helps innovators turn their vision into reality, contributing to sustainable development and economic growth."} name={"Mr. Parth Gautam"}/>
              <Testemonial image={TalhaSir} post={"Director Industry Partnerships "} Description={"Invertis Innovation and Incubation embodies our vision of a vivacious platform where entrepreneurial spirit embellishes. Through collaboration, mentorship, and access to critical resources, we empower students and startups to overcome challenges and achieve success. Together, we will build ventures that create meaningful impact and enhance our innovation ecosystem."} name={"Mohd Talha Khan"}/>
              <Companies/>
              <CardBig />
              <Services />
              <GridComponent />
              <Students />
              <Footer />
            </>
          }/>
          <Route path='/AboutIIF' element={<><Navbar/><About /><Footer/></>} />
          <Route path='/MissionVision' element={<><Navbar/><MissionVision /><Footer/></>} />
          <Route path='/GoveningCouncil' element={<><Navbar/><GoveningCouncil /><Footer/></>} />
          <Route path='/Advisory' element={<><Navbar/><Advisory /><Footer/></>} />
          <Route path='/Team' element={<><Navbar/><Team /><Footer/></>} />
          <Route path='/Recognition' element={<><Navbar/><Recognition /><Footer/></>} />
          <Route path='/Photos' element={<><Navbar/><Photos /><Footer/></>} />
          <Route path='/Patners' element={<><Navbar/><Patners /><Footer/></>} />
          <Route path='/IncubationProgram' element={<><Navbar/><IncubationProg /><Footer/></>} />
          <Route path='/Development' element={<><Navbar/><Development /><Footer/></>} />
          <Route path='/Growth' element={<><Navbar/><Growth /><Footer/></>} />
          <Route path='/Funding' element={<><Navbar/><Funding/><Footer/></>} />
          <Route path='/Target' element={<><Navbar/><Target /><Footer/></>} />
          <Route path='/Patents' element={<><Navbar/><Patents /><Footer/></>} />
          <Route path='/Success' element={<><Navbar/><Success/><Footer/></>} />
          <Route path='/Videos' element={<><Navbar/><Videos /><Footer/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

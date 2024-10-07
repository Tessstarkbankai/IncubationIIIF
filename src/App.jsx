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
              <Testemonial image={chancellorSir} post={"Chancellor"} Description={" I am proud to emphasize the vital role our Incubation Center plays in empowering students to turn ideas into startups. With expert guidance, resources, and a collaborative environment, students can accelerate their entrepreneurial journey, transforming creativity into real-world ventures."} name={"Dr. Umesh Gautam"}/>
              <Testemonial image={parthSir} post={"Chairman"} Description={"I am incredibly proud of our incubation center for fostering innovation and entrepreneurship among our students.Let's continue to create an environment where ideas flourish and businesses thrive."} name={"Mr. Parth Gautam"}/>
              <Testemonial image={TalhaSir} post={"Vice Chairman"} Description={"We are committed to creating an inclusive and supportive environment where every entrepreneur feels valued and empowered. Our doors are always open for mentorship, guidance, and support."} name={"Mr. Mohd. Talha Khan"}/>
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

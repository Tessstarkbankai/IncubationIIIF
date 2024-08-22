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
import TalhaSir from './assets/Governing/Talha_Sir1.jpg'




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
              <Testemonial image={parthSir} post={"Chairman"} Description={"I am incredibly proud of our incubation center for fostering innovation and entrepreneurship among our students. Your dedication to nurturing young talent is truly inspiring. Let's continue to create an environment where ideas flourish and businesses thrive."}/>
              <Testemonial image={TalhaSir} post={"Vice Chairman"} Description={"We are committed to creating an inclusive and supportive environment where every entrepreneur feels valued and empowered. Our doors are always open for mentorship, guidance, and support."}/>
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





        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

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
              <Testemonial/>
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

import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'
import parthSir from '../../assets/Governing/parth_sir4.jpg'
import tallahSir from '../../assets/Governing/mohd-talha.jpg'
import ashutosh from '../../assets/Governing/pradhanSir.jpg'
import Jitnedra from '../../assets/Governing/jitendra_prashari.jpg'





function GoveningCouncil() {
  return (
    <div>
      <SubSection text={"Governing Council"}/>
      <div className=' flex justify-center flex-wrap'>
      <Card img={parthSir} name={"Mr. Parth Gautam"} dept={"Executive Director"}/>
      <Card img={tallahSir} name={"Mr. Mohd Talha Khan"} dept={"Director Industry Partnership"}/>
      <Card img={ashutosh} name={"Mr. Ashutosh Pradhan"} dept={"Deputy Registrar"}/>
      <Card img={Jitnedra} name={"Mr. Jitendra Parashari"} dept={"Mr. Jitendra Parashari"}/>
    
      </div>
      
    </div>
  )
}

export default GoveningCouncil
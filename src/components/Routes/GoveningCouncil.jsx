import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'
import parthSir from '../../assets/Governing/parth_sir4.jpg'
import tallahSir from '../../assets/Governing/talhaSirOffice.jpg'
import ashutosh from '../../assets/Governing/pradhanSir.jpg'
import Jitnedra from '../../assets/Governing/jitendra_prashari.jpg'
import shuklaSir from '../../assets/shuklaSir.jpg'
import manishSir from '../../assets/manishSir.jpg'
import jns from '/jns.jpg'





function GoveningCouncil() {
  return (
    <div>
      <SubSection text={"Governing Council"}/>
      <div className=' overflow-hidden flex justify-center flex-wrap'>
      <Card img={parthSir} name={"Mr. Parth Gautam"} dept={"Chairman"}/>
      <Card img={tallahSir} name={"Mr. Mohd Talha Khan"} dept={"Vice Chairman"}/>
      <Card img={ashutosh} name={"Mr. Ashutosh Pradhan"} dept={"Member Secretary"}/>
      <Card img={shuklaSir} name={"Dr. R.K. Shukla"} dept={"Executive Member"}/>
      <Card img={manishSir} name={"Dr. Manish Gupta"} dept={"Executive Member"}/>
      <Card img={jns} name={"Dr. Jitendra Nath Srivastava"} dept={"Executive Member"}/>
      <Card img={Jitnedra} name={"Mr. Jitendra Parashari"} dept={"Executive Member"}/>

    
      </div>
      
    </div>
  )
}

export default GoveningCouncil
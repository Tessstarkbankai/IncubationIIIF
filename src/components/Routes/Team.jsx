import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'
import archana from '../../assets/Team/Archana.jpeg'
import avdesh from '../../assets/Team/AvadeshSir.jpg'
import bhandari from '../../assets/Team/BhandariSir.jpeg'
import prashant from '../../assets/Team/PrashantSir.jpeg'
import vikash from '../../assets/Team/VikashSir.jpeg'



function Team() {
  return (
    <div>
      <SubSection text={"Team"} />
      <div className=' overflow-hidden flex justify-center flex-wrap'>
      <Card img={bhandari} name={"Mr. Parth Gautam"} dept={"Executive Director"}/>
      <Card img={prashant} name={"Mr. Mohd Talha Khan"} dept={"Director Industry Partnership"}/>
      <Card img={vikash} name={"Mr. Ashutosh Pradhan"} dept={"Deputy Registrar"}/>
      <Card img={archana} name={"Mr. Jitendra Parashari"} dept={"Mr. Jitendra Parashari"}/>
      <Card img={avdesh} name={"Mr. Jitendra Parashari"} dept={"Mr. Jitendra Parashari"}/>

      </div>

    </div>
  )
}

export default Team
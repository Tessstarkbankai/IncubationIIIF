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
      <Card img={bhandari} name={"Dr. Rajeev Singh Bhandari"} dept={"Associate Professor, BBA"}/>
      <Card img={prashant} name={"Dr. Prashant Kumar Singh"} dept={"Assistant Professor, ME"}/>
      <Card img={vikash} name={"Dr. Viksit Tripathi"} dept={"Associate Professor, MBA"}/>
      <Card img={archana} name={"Dr. Archana Saxena"} dept={"Associate Professor,Computer Appliocation"}/>
      <Card img={avdesh} name={"Dr. Avadhesh kumar Sharma"} dept={"Department of Education"}/>

      </div>

    </div>
  )
}

export default Team
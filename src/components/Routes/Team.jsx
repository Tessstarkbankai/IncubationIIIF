import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'
import purnima from '../../assets/Team/purnimaMam.jpg'
import avdesh from '../../assets/Team/AvadeshSir.jpg'
import bhandari from '../../assets/Team/BhandariSir.jpeg'
import prashant from '../../assets/Team/PrashantSir.jpeg'
import vikash from '../../assets/Team/VikashSir.jpeg'
import ayushi from '../../assets/Team/ayushi.jpg'
import muskan from '../../assets/Team/muskan_mam.jpg'



function Team() {
  return (
    <div>
      <SubSection text={"Team"} />
      <div className=' overflow-hidden flex justify-center flex-wrap'>
      <Card img={avdesh} name={"Dr. Avadhesh kumar Sharma"} dept={"Incubation Manager"}/>
      <Card img={ayushi} name={"Ms. Ayushi Agarwal"} dept={"Associate"}/>
      <Card img={muskan} name={"Ms. Muskan Kasaudhan"} dept={"Associate"}/>
      <Card img={bhandari} name={"Dr. Rajeev Singh Bhandari"} dept={"Associate Professor, BBA"}/>
      <Card img={prashant} name={"Dr. Prashant Kumar Singh"} dept={"Assistant Professor, ME"}/>
      <Card img={vikash} name={"Dr. Viksit Tripathi"} dept={"Associate Professor, MBA"}/>
      <Card img={purnima} name={"Mrs. Purnima Awasthi"} dept={"Department of Computer Science & Engineering"}/>

      </div>

    </div>
  )
}

export default Team
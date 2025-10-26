import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'
import purnima from '../../assets/Team/purnimaMam.jpg'
import avdesh from '../../assets/Team/AvadeshSir.jpg'
import bhandari from '../../assets/Team/BhandariSir.jpeg'
import prashant from '../../assets/Team/PrashantSir.jpeg'
import vikash from '../../assets/Team/VikashSir.jpeg'
import ayushi from '../../assets/Team/ayushi.jpg'
// import muskan from '../../assets/Team/muskan_mam.jpg'
import me from '../../assets/Team/me_2.jpg'
import muskan from '../../assets/Team/Muskan.webp'

import aqsa from '../../assets/Team Students/aqsa.jpg'
import pranay from '../../assets/Team Students/pranay.jpg'
import arnav from '../../assets/Team Students/arnav.jpg'
import ansh from '../../assets/Team Students/ansh.jpg'
import atul from '../../assets/Team Students/atul.jpg'
import shivam from '../../assets/Team Students/shivam.jpg'



function Team() {
  return (
    <div>
      <SubSection text={"Team"} />
      <div className=' overflow-hidden flex justify-center flex-wrap'>
      <Card img={avdesh} name={"Dr. Avadhesh kumar Sharma"} dept={"Incubation Manager"}/>
      {/* <Card img={ayushi} name={"Ms. Ayushi Agarwal"} dept={"Associate"}/> */}
      {/* <Card img={muskan} name={"Ms. Muskan Kasaudhan"} dept={"Associate"}/> */}
      <Card img={bhandari} name={"Dr. Rajeev Singh Bhandari"} dept={"Associate Professor, BBA"}/>
      <Card img={prashant} name={"Dr. Prashant Kumar Singh"} dept={"Assistant Professor, ME"}/>
      <Card img={vikash} name={"Dr. Viksit Tripathi"} dept={"Associate Professor, MBA"}/>
      <Card img={purnima} name={"Mrs. Purnima Awasthi"} dept={"Department of Computer Science & Engineering"}/>
      <Card img={me} name={"Mr. Ayush Rai"} dept={"Convenor, Student Committee & Developer"}/>
      {/* ayush rai */}
      </div>
      <h1 className=' text-3xl font-bold text-center '>Incubation Student Team</h1>
      <div className=' overflow-hidden flex justify-center flex-wrap'>
      <Card img={aqsa} name={"Aqsa"} dept={"Media Team"}/>
      {/* <Card img={ayushi} name={"Ms. Ayushi Agarwal"} dept={"Associate"}/> */}
      <Card img={pranay} name={"Pranay"} dept={"Media Team"}/>
      <Card img={arnav} name={"Arnav"} dept={"Event Deam"}/>
      <Card img={ansh} name={"Ansh"} dept={"Tech Team"}/>
      <Card img={atul} name={"Atul"} dept={"Tech Team"}/>
      {/* <Card img={shivam} name={"Mrs. Purnima Awasthi"} dept={"Tech Team"}/> */}
      {/* <Card img={me} name={"Mr. Ayush Rai"} dept={"Convenor, Student Committee & Developer"}/> */}
      {/* ayush rai */}
      </div>
    </div>
  )
}

export default Team
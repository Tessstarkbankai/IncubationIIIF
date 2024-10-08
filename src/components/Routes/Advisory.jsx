import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'
import Alok from '../../assets/Advisory/Alok.jpg'
import Cheema from '../../assets/Advisory/cheemaSir.jpg'
import Harish from '../../assets/Advisory/Harish.jpeg'
import Syris from '../../assets/Advisory/Syris.jpeg'
import Vasim from '../../assets/Advisory/vasimJi.jpg'
import rahulNaidu from '../../assets/rahulnaidu.jpeg'




function Advisory() {
  return (
    <div>
      <SubSection text={"Advisory Board"}/>
      <div className=' overflow-hidden flex justify-center flex-wrap'>
      <Card img={Cheema} name={"Mr. HS Cheema"} dept={"Founder Cheema Boilers Limited"}/>
      {/* <Card img={Syris} name={"Dr. Syrish Raghuyal"} dept={"Director at Positech International Pvt. Ltd."}/> */}
      <Card img={Vasim} name={"Mr. Vasim Akram Rana"} dept={"Founder & CTO @ Tech Superior Consulting"}/>
      <Card img={rahulNaidu} name={"Mr. M. Rahul Naidu "} dept={"Director at Dysmech Consultancy Services Pvt. Ltd."}/>
      <Card img={Alok} name={"Mr. Alok Pandey"} dept={"CEO, AIC IIT Delhi"}/>
      </div>
      
    </div>
  )
}

export default Advisory
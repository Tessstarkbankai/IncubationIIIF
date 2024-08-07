import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'

function GoveningCouncil() {
  return (
    <div>
      <SubSection text={"Governing Council"}/>
      <div className=' flex justify-center flex-wrap'>
      <Card img={'./jns.jpg'} name={"Jitnedra Nath Shrivastva"} dept={"Computer Science & Engineering"}/>
      <Card img={'./jns.jpg'} name={"Jitnedra Nath Shrivastva"} dept={"Computer Science & Engineering"}/>
      <Card img={'./jns.jpg'} name={"Jitnedra Nath Shrivastva"} dept={"Computer Science & Engineering"}/>
      <Card img={'./jns.jpg'} name={"Jitnedra Nath Shrivastva"} dept={"Computer Science & Engineering"}/>
      <Card img={'./jns.jpg'} name={"Jitnedra Nath Shrivastva"} dept={"Computer Science & Engineering"}/>
      <Card img={'./jns.jpg'} name={"Jitnedra Nath Shrivastva"} dept={"Computer Science & Engineering"}/>
      </div>
      
    </div>
  )
}

export default GoveningCouncil
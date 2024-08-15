import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'

function Team() {
  return (
    <div>
      <SubSection text={"Team"}/>
      <div className=' overflow-hidden flex justify-center flex-wrap'>
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

export default Team
import React from 'react'
import SubSection from '../SubSection'
import Card from '../Card'

function Advisory() {
  return (
    <div>
      <SubSection text={"Advisory Board"}/>
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

export default Advisory
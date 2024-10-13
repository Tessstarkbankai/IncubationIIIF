import React from 'react'
import SubSection from '../SubSection'
import Shark from '../../assets/Events_Photos/shark1.png'
import Shark1 from '../../assets/Events_Photos/shark2.png'

import EventAdd from '../EventAdd'

function IncubationProg() {
  return (
    <>
    <div className=''>
      <SubSection text={'Incubation Programs'}/>
      <EventAdd image={Shark} text={"Shark Tank is an exciting event where students present innovative ideas and compete for the chance to turn their concepts into reality. In the first phase of the event, students submitted their creative ideas, showcasing a wide range of concepts across various fields. These submissions were then carefully reviewed by a panel of experienced mentors, who evaluated each idea based on its originality, feasibility, and potential impact. After thorough deliberation, the mentors selected the most promising ideas, which were then advanced to the second phase of the competition."} heading={"Shark Tank Invertis - Idea Generation"} />

      <EventAdd image={Shark1} text={"In the second phase of the Shark Tank event at Invertis, shortlisted candidates had the unique opportunity to engage with real-life industrialists, business professionals, and experts from various fields who visited the Invertis Innovation and Incubation Center to mentor the candidates. These experienced mentors provided invaluable guidance, offering insights drawn from their own entrepreneurial journeys. Through interactive sessions and one-on-one discussions, participants gained a deeper understanding of critical topics related to startups, such as market analysis, business strategy, and effective pitching techniques. This phase of the event empowered students with practical knowledge and helped them refine their ideas to prepare for the next steps in their entrepreneurial ventures. "} heading={"Shark Tank Invertis - Mentorship"} />
      
    </div>
    
    </>

  )
}

export default IncubationProg
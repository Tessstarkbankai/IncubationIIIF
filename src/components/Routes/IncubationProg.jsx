import React from 'react'
import SubSection from '../SubSection'
import Shark from '../../assets/Events_Photos/shark1.png'
import Shark1 from '../../assets/Events_Photos/shark2.png'
import startupday from '../../assets/EventsAdd/nationalstartup.jpg';
import buisness from '../../assets/EventsAdd/businessdev.jpg';
import forum from '../../assets/EventsAdd/forum.png';


import EventAdd from '../EventAdd'
import { Link } from 'react-router-dom'

function IncubationProg() {
  return (
    <>
    <div className=''>
      <SubSection text={'Incubation Programs'}/>
      <EventAdd image={Shark} text={"Shark Tank is an exciting event where students present innovative ideas and compete for the chance to turn their concepts into reality. In the first phase of the event, students submitted their creative ideas, showcasing a wide range of concepts across various fields. These submissions were then carefully reviewed by a panel of experienced mentors, who evaluated each idea based on its originality, feasibility, and potential impact. After thorough deliberation, the mentors selected the most promising ideas, which were then advanced to the second phase of the competition."} heading={<Link to='/VideoCards'>"Shark Tank Invertis - Idea Generation" <br />(Date:- 1 October 2024)</Link>} />

      <EventAdd image={Shark1} text={"In the second phase of the Shark Tank event at Invertis, shortlisted candidates had the unique opportunity to engage with real-life industrialists, business professionals, and experts from various fields who visited the Invertis Innovation and Incubation Center to mentor the candidates. These experienced mentors provided invaluable guidance, offering insights drawn from their own entrepreneurial journeys. Through interactive sessions and one-on-one discussions, participants gained a deeper understanding of critical topics related to startups, such as market analysis, business strategy, and effective pitching techniques. This phase of the event empowered students with practical knowledge and helped them refine their ideas to prepare for the next steps in their entrepreneurial ventures. "} heading={<Link to='/VideoCards'>"Shark Tank Invertis - Mentorship" <br /> (Date:- 3 October 2024)</Link>} />

      <EventAdd image={Shark1} text={"In the second phase of the Shark Tank event at Invertis, shortlisted candidates had the unique opportunity to engage with real-life industrialists, business professionals, and experts from various fields who visited the Invertis Innovation and Incubation Center to mentor the candidates. These experienced mentors provided invaluable guidance, offering insights drawn from their own entrepreneurial journeys. Through interactive sessions and one-on-one discussions, participants gained a deeper understanding of critical topics related to startups, such as market analysis, business strategy, and effective pitching techniques. This phase of the event empowered students with practical knowledge and helped them refine their ideas to prepare for the next steps in their entrepreneurial ventures. "} heading={<Link to='/VideoCards'>"Shark Tank Invertis - Final Pitch" <br />(Date:- 15 October 2024)</Link>} />
      <EventAdd image={startupday} text={"On National Startup Day, the incubation center hosted an inspiring event featuring Mr. Rahul Naidu, Director of DCS Pvt Ltd. Mr. Naidu delivered an insightful talk, sharing his experiences and valuable advice on entrepreneurship and innovation. His speech motivated aspiring entrepreneurs and provided them with practical strategies to navigate the startup ecosystem. The event was a great success, fostering a spirit of collaboration and growth among attendees. "} heading={<Link to='/VideoCards'>"National StartUp Day " <br />(Date:- 16 January 2025)</Link>} />
      <EventAdd image={buisness} text={"The incubation center recently hosted a dynamic business development workshop led by Mr. Ravi Kumar, a renowned Brand Management expert. Mr. Kumar shared his extensive knowledge on brand building and effective business strategies, providing attendees with actionable insights to enhance their startups. The workshop was highly interactive, allowing participants to engage directly with Mr. Kumar and gain personalized advice. This event significantly contributed to the entrepreneurial growth and development of all who attended."} heading={<Link to='/VideoCards'>"Business Devlopment Workshop" <br />(Date:- 10 March 2025)</Link>} />
      <EventAdd image={forum} text={"The incubation center recently organized an insightful workshop on funding, led by Mr. Shani Chaudhary. As an expert in startup financing, Mr. Chaudhary provided attendees with comprehensive knowledge on securing funding for their ventures. He covered various funding options, strategies for pitching to investors, and tips for managing finances effectively. The workshop was highly engaging, offering participants the opportunity to ask questions and receive tailored advice. This event was instrumental in equipping entrepreneurs with the tools needed to successfully navigate the funding landscape. "} heading={<Link to='/VideoCards'>"Investor Ready" <br />(Date:- 15 Feburary 2025)</Link>} />

    </div>
    
    </>

  )
}

export default IncubationProg
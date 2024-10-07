import React from 'react'
import SubSection from '../SubSection'
import Patner from '../Patner'
import microsoft from '../../assets/PatnerImage/microsoft.png'
import adobe from '../../assets/PatnerImage/adobe.png'
import ibm from '../../assets/PatnerImage/ibm.png'
// import ibm from '../../assets/PatnerImage/ibm.png'
import ansys from '../../assets/PatnerImage/ansys.png'
import dassault from '../../assets/PatnerImage/dassault.png'
import nidm from '../../assets/PatnerImage/nidm.jpeg'
import dcs from '../../assets/PatnerImage/dcs.png'
import vaave from '../../assets/PatnerImage/vaave.png'
import jards from '../../assets/PatnerImage/jards.jpeg'
import mastercam from '../../assets/PatnerImage/mastercam.png'
import linkedin from '../../assets/PatnerImage/linkedin.png'
import ptc from '../../assets/PatnerImage/ptc.png'
import yif from '../../assets/PatnerImage/yif.png'













import ShimmerButton from "@/components/magicui/shimmer-button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'




function Patners() {
  return (
    <>
    <SubSection text={"Our Partners"}/>
    <div className=' flex gap-2 py-14 sm:px-32 flex-wrap justify-center text-center '>
      <Patner image={microsoft} name={"Microsoft Partner Network "}/>
      <Patner image={ibm} name={"IBM"}/>
      <Patner image={adobe} name={"Adobe"}/>
      <Patner image={ansys} name={"Ansys, Inc."}/>
      <Patner image={dassault} name={"Dassault Systèmes"}/>
      <Patner image={nidm} name={"NIDM"}/>
      <Patner image={dcs} name={"DCS"}/>
      <Patner image={vaave} name={"Vaave"}/>
      <Patner image={jards} name={"JARDS"}/>
      <Patner image={mastercam} name={"Mastercam"}/>
      <Patner image={linkedin} name={"LinkedIn"}/>
      <Patner image={ptc} name={"PTC Inc."}/>
      <Patner image={yif} name={"Young India Foundation"}/>

    </div>
    <div className='py-40 w-full bg-blue-300/20 shadow-lg'>
      <h1 className=' mb-12 text-gray-600 font-extrabold text-4xl text-center'>We Work With the Best Patners</h1>
      <div className="z-10 flex h-[60px] items-center justify-center">
          <a target='blank' href="https://forms.gle/9ScwfUjZbzrBkhraA"><ShimmerButton className=" hover:scale-150 transition-all duration-300 ease-in-out shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Be Our Partner
            </span>
          </ShimmerButton>
          </a>
        </div>
    </div>
    </>
  )
}

export default Patners
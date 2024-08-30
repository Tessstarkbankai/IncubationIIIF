import React from 'react'
import Marquee from 'react-fast-marquee'
import microsoft from '../assets/PatnerImage/microsoft.png'
import adobe from '../assets/PatnerImage/adobe.png'
import ibm from '../assets/PatnerImage/ibm.png'
// import ibm from '../../assets/PatnerImage/ibm.png'
import ansys from '../assets/PatnerImage/ansys.png'
import dassault from '../assets/PatnerImage/dassault.png'
import nidm from '../assets/PatnerImage/nidm.jpeg'
import dcs from '../assets/PatnerImage/dcs.png'
import vaave from '../assets/PatnerImage/vaave.png'
import jards from '../assets/PatnerImage/jards.jpeg'
import mastercam from '../assets/PatnerImage/mastercam.png'
import linkedin from '../assets/PatnerImage/linkedin.png'
import ptc from '../assets/PatnerImage/ptc.png'
import yif from '../assets/PatnerImage/yif.png'

function Companies() {
  return (
    <>
    <div className='sm:mt-0 mt-[-100px]'>
    <h1 className=' text-xl sm:text-3xl font-extrabold font-sans text-center tracking-widest mb-2'>OUR PARTNERS</h1>
    <div className=' w-[140px] sm:w-[190px] h-1 bg-blue-600 m-auto mb-4'></div>
    <Marquee speed={200} autoFill={false} gradient={true} pauseOnHover={true} gradientWidth={200} className=' mt-10 mb-[90px]'>
        <div className=' w-[250px] ml-[70px]'>
          <img src={microsoft} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={ibm} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={adobe} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={ansys} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={dassault} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={nidm} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={dcs} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={vaave} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={jards} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={mastercam} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={linkedin} alt="" />
        </div>
         <div className=' w-[250px] ml-[70px]'>
          <img src={ptc} alt="" />
        </div>
        <div className=' w-[250px] ml-[70px]'>
          <img src={yif} alt="" />
        </div>
    </Marquee>
    </div>
    </>
  )
}

export default Companies
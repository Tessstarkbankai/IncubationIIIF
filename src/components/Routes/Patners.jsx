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
import aqin from '../../assets/startups/Aqin.png'
import cladbe from '../../assets/startups/cladbe.jpg'
import darshan from '../../assets/startups/darshan.png'
import ecochar from '../../assets/startups/ecochar.jpg'
import fovty from '../../assets/startups/fovty.jpg'
import invitation from '../../assets/startups/invitation.png'
import kalpit from '../../assets/startups/kalpit.jpg'
import ucyber from '../../assets/startups/ucyber.jpg'
import clothing from '../../assets/startups/clothingvibe.png'
import octocult from '../../assets/startups/octocult logo.jpeg'
import nearbix from '../../assets/startups/NearBix.png'







const partners = [
  {
    category: "Knowledge Partners",
    data: [
      { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
      { name: "UltraTech Cement", logo: "https://th.bing.com/th/id/OIP.SqQrQq4T2JRS9eTBddBNxQHaEN?rs=1&pid=ImgDetMain" },
      { name: "JARDS", logo: "https://jards.in/wp-content/uploads/2021/05/JARDS-LOGO3-1-1024x412.png" },
      { name: "Business Standard", logo: "https://www.themediaant.com/blog/wp-content/uploads/2021/09/business-standard-logo.png" },
      { name: "DCS", logo: "https://th.bing.com/th/id/OIP.mRob0FoyrOqFQTUA5rIS8wAAAA?pid=ImgDet&w=164&h=164&c=7&dpr=1.5" },
      { name: "Institute of Company Secretaries of India", logo: "https://media.glassdoor.com/sqll/526672/the-institute-of-company-secretaries-of-india-squarelogo-1475064988847.png" },
      { name: "CESIM", logo: "https://www.cesim.com/hs-fs/hubfs/cesimlogo.png?width=462&name=cesimlogo.png" },
      { name: "Vaave", logo: "https://www.vaave.com/media/logo-black.png" },
      { name: "Shape my skills by Ducat", logo: "https://th.bing.com/th/id/OIP.shbieuaKaovD31MOtMmORAHaDt?rs=1&pid=ImgDetMain" },
      { name: "NIDM (National Institute of Disaster Management)", logo: "https://th.bing.com/th?id=OIP.eCr8UbHQzlES3GfJvDZJ4gHaDm&w=349&h=169&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Infosys Springboard", logo: "https://th.bing.com/th?id=OIP.u9H0rrSvh_1M2QzisiaOYQAAAA&w=191&h=117&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Livingstone College, USA", logo: "https://th.bing.com/th?id=OIP.Z1MpELZqJavwf-dJrAnPtgAAAA&w=186&h=183&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Energy Swaraj Foundation", logo: "https://th.bing.com/th?id=OIP.5kAJ6reYEdDBdoeqxDkORgHaG4&w=259&h=240&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Istanbul Gedik University, Turkiye", logo: "https://th.bing.com/th?id=OIP.KTN7emixJSDb1yR8uJMAvgAAAA&w=159&h=159&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Istanbul Gelisim University, Turkiye", logo: "https://th.bing.com/th?id=OIP.e4oLtMlznaVhO68skyouXwHaHa&w=249&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Istanbul Medipol University, Turkey", logo: "https://th.bing.com/th/id/OIP.4mQCmiBrLyxGMngU78TW7QHaCP?w=280&h=105&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
      { name: "Istanbul University, Turkiye", logo: "https://th.bing.com/th/id/OIP.vPsx87aqyWQt3v_kBgC9XAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
      { name: "UP Council of Sugarcane Research", logo: "https://th.bing.com/th/id/OIP.pzqDDNbQAaBiPiWLgSCkiwAAAA?rs=1&pid=ImgDetMain" },
      { name: "Virtual Lab nodal centre, IIT Roorkee", logo: "https://th.bing.com/th/id/OIP.1Pm6DtRMxUdt0-o88GXvoQAAAA?w=293&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    ],
  },
  {
    category: "Certification Partners",
    data: [
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "Adobe", logo: "https://th.bing.com/th?id=OIP.10iTkgrDM76aXqCxm2HhfwHaEK&w=333&h=187&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    ],
  },
  {
    category: "Technology Providers",
    data: [
      { name: "PTC", logo: "https://th.bing.com/th?id=OIP.ijKiy6l9ogjcoBDqD-ZI3gHaEK&w=333&h=187&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Dassault Systèmes", logo: "https://th.bing.com/th?id=OIP.AU4ec1NYZ7eBBYK77VQQbAAAAA&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
      { name: "Mastercam", logo: "https://th.bing.com/th/id/OIP.Ks3MvWF69iiRnjRuFR-H7AHaBe?rs=1&pid=ImgDetMain" },
      { name: "Ansys", logo: "https://th.bing.com/th?id=OIP.PoLFY3C2b9tx1VrC0BIJmQHaCT&w=349&h=108&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2" },
    ],
  },
  {
    category: "Incubated Startups Partners",
    data: [
      { name: "Eco Char", logo: ecochar },
      { name: "Kalpit Infotech", logo: kalpit },
      { name: "Aqin", logo: aqin },
      { name: "Cladbe", logo: cladbe },
      { name: "Ucyber Digital", logo: cladbe },
      { name: "Clothing Vibe", logo: clothing },
      { name: "OctoCult Services", logo: octocult },
      { name: "NearBix", logo: nearbix },
      { name: "fovty", logo: fovty },
      { name: "Darshan Niti", logo: darshan },
      { name: "InvitaionWala", logo: invitation },
    ],
  },
];

const Patners = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Our Partners</h1>
      {partners.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.data.map((partner, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 object-contain mb-2"
                />
                <p className="text-center font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Patners;

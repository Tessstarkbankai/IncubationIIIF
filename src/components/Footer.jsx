import React from 'react'

function Footer() {
  return (
    <div className=' h-[400px] bg-gradient-to-r from-blue-100 to-blue-200 flex justify-center gap-14' >
      <div className="logo">
        <img src="./incub-logo.png" width={'360px'} className=' ml-[-120px] mt-[40px]' alt="" />
      </div>
      <div className="contact ml-[10px] w-[350px] mt-[30px] leading-10 font-sans text-lg text-blue-600">
        <span className=' text-2xl  text-blue-800 font-bold'>Contact Us</span>
        <br />
        Physical Address
        292 Main Street | MIT Bldg. E38
        Floors 3-7
        Cambridge, MA 02142
        Building Hours: 9:00 AM – 6:00 PM
        Students may register for after-hours access.
        <br />
        <br />
        Mailing Address
        400 Main Street
        Bldg. E38 – Mailroom 349
        Cambridge, MA 02142
      </div>
      <div className="about ml-[90px] w-[350px] mt-[30px] leading-10 font-sans text-lg text-blue-600">
      <span className=' text-2xl text-blue-800 font-bold'>This Website</span>
      <br />

      III is Powered By
        <img src="logo_inv.svg" width={'230px'} className=' mt-4' alt="" />
        <br />
        <br />
        Mailing Address
        400 Main Street
        Bldg. E38 – Mailroom 349
        Cambridge, MA 02142
      </div>
    </div>
  )
}

export default Footer
import React from 'react'

function Card({img,name,dept}) {
  return (
    <div className=' p-[70px]'>
        <div className="card w-[350px] h-[450px] rounded-lg bg-[#f2f2f2]">
          <div className="img ">
           <img className=' p-2 h-[360px] w-[360px] ' src={img} alt="" />
          </div>
          <div className="text mt-3">
            <h1 className=' text-blue-600 hover:text-black text-2xl text-center font-semibold'>{name}</h1>
            <h2 className=' text-center'>{dept}</h2>
          </div>
        </div>
      </div>
  )
}

export default Card
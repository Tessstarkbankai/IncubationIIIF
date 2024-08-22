// Build Patner Colab Page


import img1 from '../../assets/descrip_img.jpg'
import img2 from '../../assets/About_image.jpg'

import Photo from "../Photo";
import React from 'react'
import SubSection from '../SubSection';

function Photos() {
  return (
    <>
      <SubSection text={"Photos & Videos"}/>
    <div className=' px-56 py-24 flex justify-center  flex-wrap gap-5'>
      <Photo image={img1} />
      <Photo image={img2} />
      <Photo image={img1} />
      <Photo image={img2} />
      <Photo image={img1} />
      <Photo image={img1} />
      <Photo image={img1} />
      <Photo image={img2} />



    </div>
    </>
  )
}

export default Photos

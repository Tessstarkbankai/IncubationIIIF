
import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function Photos({image,text}) {
  return (
    <div>
      
      <div>
      <Dialog>
      <DialogTrigger asChild>
        <div className="img flex justify-start rounded-lg overflow-hidden border border-gray-200 
         transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
          <img src={image} className=' object-cover w-[250px] h-[300px]' alt="" />
          <div className="text">
          <p className=' text-lg text-center'>{text}</p>
        </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[925px] object-fill">
        <img src={image} className=' object-fill' alt="" />
      </DialogContent>
    </Dialog>
      </div>
    </div>
  )
}

export default Photos
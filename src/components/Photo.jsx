
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


function Photos({image}) {
  return (
    <div>
      
      <div>
      <Dialog>
      <DialogTrigger asChild>
        <div className="img">
          <img src={image} className=' w-[250px] h-[250px]' alt="" />
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
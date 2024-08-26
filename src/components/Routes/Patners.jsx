import React from 'react'
import SubSection from '../SubSection'
import Patner from '../Patner'
import desc from '/l3.jpg'
import p2 from '/l4.jpg'
import p3 from '/l5.jpg'
import p4 from '/L7.jpg'
import p5 from '/L8.jpg'
import p6 from '/l1.jpg'
import p7 from '/l6Q.jpg'

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
    <SubSection text={"Our Patners"}/>
    <div className=' flex gap-2 py-14 sm:px-32 flex-wrap justify-center '>
      <Patner image={desc} name={"Ayush Industries"}/>
      <Patner image={p2} name={"Ayush Industries"}/>
      <Patner image={p3} name={"Ayush Industries"}/>
      <Patner image={p4} name={"Ayush Industries"}/>
      <Patner image={p5} name={"Ayush Industries"}/>
      <Patner image={p6} name={"Ayush Industries"}/>
      <Patner image={p7} name={"Ayush Industries"}/>
    </div>
    <div className='py-40 w-full bg-blue-300/20 shadow-lg'>
      <h1 className=' mb-12 text-gray-600 font-extrabold text-4xl text-center'>We Work With the Best Patners</h1>
      <div className="z-10 flex h-[60px] items-center justify-center">
          <a target='blank' href="https://forms.gle/PVyN8w3XRwaws1m8A"><ShimmerButton className=" hover:scale-150 transition-all duration-300 ease-in-out shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Be Our Patner
            </span>
          </ShimmerButton>
          </a>
        </div>
    </div>
    </>
  )
}

export default Patners
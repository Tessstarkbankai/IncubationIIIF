import React, { useState } from 'react'

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

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




function Navbar() {


  return (
    <div className=' flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-200
 border-b-4 h-[120px]'>
      <div className="logo ml-4 sm:ml-[70px] ">
        <Link to='/'><img src="./incub-logo.png" alt="logo" className=' cursor-pointer mt-2 sm:h-[130px] h-[100px] sm:w-[200px] w-[150px] ' /></Link>
      </div>
      <div className=' flex sm:hidden mr-10'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <svg className=' mt-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="50" viewBox="0 0 48 48">
              <linearGradient id="9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1" x1="12.066" x2="34.891" y1=".066" y2="22.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stop-color="#3bc9f3"></stop><stop offset=".85" stop-color="#1591d8"></stop></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1)" d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"></path><linearGradient id="9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2" x1="12.066" x2="34.891" y1="12.066" y2="34.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stop-color="#3bc9f3"></stop><stop offset=".85" stop-color="#1591d8"></stop></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2)" d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"></path><linearGradient id="9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3" x1="12.066" x2="34.891" y1="24.066" y2="46.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stop-color="#3bc9f3"></stop><stop offset=".85" stop-color="#1591d8"></stop></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3)" d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"></path>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">

            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger><div className="z-10 flex mt-3 mb-3 h-[10px] items-center justify-center">
                  <a target='blank' href="https://forms.gle/EKjLujYzjmbFr5ZG6"><ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Join Our Communtiy
                    </span>
                  </ShimmerButton>
                  </a>
                </div></DropdownMenuSubTrigger>

                <DropdownMenuSubTrigger>About</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem><Link to='/AboutIIF' className=' hover:text-blue-600 '>About IIIF</Link></DropdownMenuItem>
                    {/* <DropdownMenuItem><Link to='/MissionVision' className=' hover:text-blue-600   '>Mission & Vision</Link></DropdownMenuItem> */}
                    <DropdownMenuItem><Link to='/GoveningCouncil' className=' hover:text-blue-600  '>Governing Council</Link> </DropdownMenuItem>
                    <DropdownMenuItem><Link to='/Advisory' className=' hover:text-blue-600  '>Advisory Board team</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to='/Team' className='  hover:text-blue-600  '>Team</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to='/Recognition' className=' hover:text-blue-600 '>Recognition</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to='/Patners' className=' hover:text-blue-600 mb-2 '>Our Patners</Link></DropdownMenuItem>

                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Program</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Incubation Program</DropdownMenuItem>

                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Scheme</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Devlopment</DropdownMenuItem>
                    <DropdownMenuItem>Funding</DropdownMenuItem>
                    <DropdownMenuItem>Growth</DropdownMenuItem>
                    <DropdownMenuItem>Target</DropdownMenuItem>

                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Event</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem><Link to='/Photos' className=' hover:text-blue-600 mb-2 '>Photos</Link></DropdownMenuItem>
                    <DropdownMenuItem>Videos</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Empact</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Patents</DropdownMenuItem>
                    <DropdownMenuItem>Sucess Stories</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>



      <div className="hidden sm:flex nav-items  list-none gap-10 mr-[70px] font-bold hover:cursor-pointer text-blue-400  text-2xl font-sans cursor-pointer ">

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-sans font-bold text-lg'>About</NavigationMenuTrigger>
              <NavigationMenuContent className=' text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <Link to='/AboutIIF' className='list  hover:text-blue-600 mb-2'>About IIIF</Link>
                {/* <Link to='/MissionVision' className=' list  hover:text-blue-600 mb-2   '>Mission & Vision</Link> */}
                <Link to='/GoveningCouncil' className=' list  hover:text-blue-600 mb-2 '>Governing Council</Link>
                <Link to='/Advisory' className=' list  hover:text-blue-600 mb-2 '>Advisory Board team</Link>
                <Link to='/Team' className=' list  hover:text-blue-600 mb-2 '>Team</Link>
                <Link to='/Recognition' className=' list  hover:text-blue-600 mb-2 '>Recognition</Link>
                <Link to='/Patners' className=' list  hover:text-blue-600 mb-2 '>Our Partners</Link>

              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-bold text-lg'>Programs</NavigationMenuTrigger>
              <NavigationMenuContent className=' ml-4 text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <li className='  list  hover:text-blue-600 mb-2   '>Incubation Program</li>
                {/* <li className='  list  hover:text-blue-600 mb-2   '>Women Devlopment</li>
                <li className='  list  hover:text-blue-600 mb-2   '>Tech Devlopment</li> */}

              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-bold text-lg'>Scheme</NavigationMenuTrigger>
              <NavigationMenuContent className=' text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <li className=' list  hover:text-blue-600 mb-2   '>Devlopment</li>
                <li className=' list  hover:text-blue-600 mb-2   '>Funding</li>
                <li className=' list  hover:text-blue-600  mb-2  '>Growth</li>
                <li className='  list  hover:text-blue-600 mb-2  '>Target</li>


              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-bold text-lg' >Events</NavigationMenuTrigger>
              <NavigationMenuContent className='  text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <Link to='/Photos' className=' list  hover:text-blue-600 mb-2 '>Photos</Link>
                <li className='  list  hover:text-blue-600  mb-2 '>Videos</li>


              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-bold text-lg'>Impact</NavigationMenuTrigger>
              <NavigationMenuContent className=' text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <li className='  list  hover:text-blue-600 mb-2   '>Patent Filled</li>
                <li className='  list  hover:text-blue-600 mb-2  '>Sucess Stories</li>


              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="z-10 flex h-[60px] items-center justify-center">
          <a target='blank' href="https://forms.gle/EKjLujYzjmbFr5ZG6"><ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Join Our Communtiy
            </span>
          </ShimmerButton>
          </a>
        </div>



      </div>
    </div>

  )
}

export default Navbar
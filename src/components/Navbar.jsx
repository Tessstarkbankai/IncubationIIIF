import React from 'react'

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



function Navbar() {
  return (
    <div className=' flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-200
 border-b-4 h-[120px]'>
      <div className="logo ml-[70px] ">
       <Link to='/'><img src="./incub-logo.png" alt="logo" className=' cursor-pointer mt-2 h-[130px] w-[200px] ' /></Link>
      </div>
      <div className="nav-items flex list-none gap-10 mr-[70px] font-bold hover:cursor-pointer text-blue-400  text-2xl font-sans cursor-pointer ">

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-sans font-bold text-lg'>About</NavigationMenuTrigger>
              <NavigationMenuContent className=' text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <Link to='/AboutIIF' className='list  hover:text-blue-600 mb-2'>About IIIF</Link>
                <Link to='/MissionVision' className=' list  hover:text-blue-600 mb-2   '>Mission & Vision</Link>
                <Link to='/GoveningCouncil' className=' list  hover:text-blue-600 mb-2 '>Governing Council</Link>
                <Link to='/Advisory' className=' list  hover:text-blue-600 mb-2 '>Advisory Board team</Link>
                <Link to='/Team' className=' list  hover:text-blue-600 mb-2 '>Team</Link>
                <Link to='/Recognition' className=' list  hover:text-blue-600 mb-2 '>Recognization</Link>

              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-blue-500 font-bold text-lg'>Programs</NavigationMenuTrigger>
              <NavigationMenuContent className=' ml-4 text-gray-500 mb-2 flex mt-3 justify-center flex-col border-t border-gray-300'>

                <li className='  list  hover:text-blue-600 mb-2   '>Faculty devlopment</li>
                <li className='  list  hover:text-blue-600 mb-2   '>Women Devlopment</li>
                <li className='  list  hover:text-blue-600 mb-2   '>Tech Devlopment</li>

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

                <li className=' list  hover:text-blue-600 mb-2   '>photos</li>
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



      </div>
    </div>

  )
}

export default Navbar
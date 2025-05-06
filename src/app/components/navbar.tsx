'use client';
import Link from 'next/link';
import Flag from '../flag/page'
import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { PiGridFour } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { TbListCheck } from "react-icons/tb";
import { LiaDatabaseSolid } from "react-icons/lia";
import { LiaChartBarSolid } from "react-icons/lia";
import { FiGift } from "react-icons/fi";
import { VscCalendar } from "react-icons/vsc";
import { LiaClipboard } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { PiGridNine } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";

export const Navbar = () => {
    console.log("Navbar component");
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
            }
    
return <div className='mx-auto' >
        <div className=''>
        <div className="lg:flex flex mx-auto space-x-4 mt-5 sm: flex flex mx-auto space-x-30 mt-5 ">
          <p className="font-bold text-xl ml-10">
            <span className="text-blue-600">Dash</span>Stack
          </p>
          <div className="ig:flex ">
            <button onClick={toggleMenu} className="text-black ig:flex focus:outline-none">
              <div className="space-y-1 ">  
                <div className="w-6.5 h-0.5 bg-black rounded-md"></div>
                <div className="w-6.5 h-0.5 bg-black rounded-md"></div>
                <div className="w-6.5 h-0.5 bg-black rounded-md"></div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation (visible on large screens)
          <div className="hidden lg:flex space-x-4">
            <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">About</a>
            <a href="#" className="text-black">Services</a>
            <a href="#" className="text-black">Contact</a>
          </div>
                

          {/* Mobile Dropdown Menu*/}
          <div className={` ${isOpen ? 'block' : 'hidden'} mt-1`}>
            <div className="flex flex-col space-y-1">
              <a href="#" className="text-black">Home</a>
              <a href="#" className="text-black">About</a>
              <a href="#" className="text-black">Services</a>
              <a href="#" className="text-black">Contact</a>
            </div>
          </div>
                
          <form className='w-[500px] relative -ml-[100px] -mt-[10px]'>
            <div className='relative'>
              <input type='search' placeholder='Search' className='w-80 p-2 rounded-full bg-gray-100'/>
              <button className='absolute right-45 top-1/2 -translate-y-1/2 p-4 '>
                <IoIosSearch />
              </button>
            </div>
          </form>
                
          <div className='relative ml-100'>
            <button className='absolute right-5 top-1/2 -translate-y-1/2 p-4 cursor-pointer'>
              <BsFillBellFill />
            </button>
            <div className='absolute right-7 top-1 -translate-y-1/2 rounded-xl w-4 h-4 bg-red-500 text-white'><span className='ml-1'>3</span></div>
          </div>
          <Flag />
        </div>


        <p className='text-base ml-15 mt-3'>Dashboard</p>
        <div className='ml-11 mt-5' >

          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <PiGridFour  />
            </button>
            <p className='ml-8'>Products</p>
          </div>

          <div className='mt-2 text-black
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <FaRegHeart />
            </button>
            <Link href="/" className= 'ml-8'>
            Favorites
            </Link>
          </div>

          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <HiOutlineChatAlt2  />
            </button>
            <p className='ml-8'>Inbox</p>
          </div>
        
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <TbListCheck   />
            </button>
            <p className='ml-8'>Order Lists</p>
          </div>

          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <LiaDatabaseSolid />
            </button>
            <Link href="/productstock" className='ml-8'>Product Stock</Link>
          </div> 
        </div>

        <hr className='w-70 border border-gray-200 mt-8' />

        <div className='ml-11 mt-3' >
          <p className=' text-gray-500'>PAGES</p>
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <FiGift />
            </button>
            <p className='ml-8'>Pricing</p>
          </div>

          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <VscCalendar />
            </button>
            <p className='ml-8'>Calendar</p>
          </div>

          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <LiaClipboard />
            </button>
            <p className='ml-8'>To-Do</p>
          </div>
        
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <TbListCheck />
            </button>
            <p className='ml-8'>Contact</p>
          </div>

          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <LiaDatabaseSolid />
            </button>
            <p className='ml-8'>Invoice </p>
          </div>
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
             <LiaChartBarSolid />
            </button>
            <p className='ml-8'>UI Elements</p>
          </div>
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <GoPerson />
            </button>
            <p className='ml-8'>Team</p>
          </div>
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
               <PiGridNine />
            </button>
            <p className='ml-8'>Table</p>
          </div>
 
        </div>

        <hr className='w-70 border border-gray-200 mt-8' />

        <div className='ml-11 mt-10' >
          <div className='mt-2
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <LuSettings />
            </button>
            <p className='ml-8'>Settings</p>
          </div>
          <div className='mt-2 mb-20
            hover:bg-blue-600 p-2 -ml-[10px] rounded-md transition-colors w-40 hover:text-white'>
            <button className='absolute mt-1 '>
              <LuSettings />
            </button>
            <Link href="/login" className='ml-8'>Logout</Link>
          </div>
        </div>
        </div>
    </div>
}

export default Navbar
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/16/solid'
import NavLink from "./NavLinks";
import MenuOverlay from './MenuOverlay'
function Navbar() {
    const [navbarOpen,setNavabarOpen]=useState(false)
    const navLinks = [
        {
          title: "About",
          path: "about",
        },
        {
          title: "Projects",
          path: "projects",
        },
        {
          title: "Contact",
          path: "contact",
        },
      ];
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#2a1757] bg-opacity-90'>
    <div className='flex flex-wrap items-center mx-auto px-4  md:justify-center mt-4'>
        
        <div className="mobile-menu md:hidden ">
{!navbarOpen ?(
<button onClick={()=>setNavabarOpen(true)} className='text-white px-3 py-3 border border-slate-200 rounded'><Bars3Icon className='w-5 h-5'/></button>
)
:
<button onClick={()=>setNavabarOpen(false)} className='text-white px-3 py-3 border border-slate-200 rounded'><XMarkIcon className='w-5 h-5'/></button>
}        
</div>
        <div className="menu hidden md:block md:w-auto id=navbar ">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}

            </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        
    </nav>
  )
}

export default Navbar
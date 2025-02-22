import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { PROFILE } from '../assets/constant.js'

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header className='flex px-7 py-3 justify-between'>
            <h1 className='text-dark-primary text-center text-4xl font-medium'>{PROFILE.NAME}</h1>
            <nav className='hidden md:block'>
                <ul className='flex'>
                    <li className='px-3 py-4 text-base'><a href="/#hero" className="hover:text-dark-secondary">Home</a></li>
                    <li className='px-3 py-4 text-base'><a href="/#about" className="hover:text-dark-secondary">About</a></li>
                    <li className='px-3 py-4 text-base'><a href="/#experience" className="hover:text-dark-secondary">Experience</a></li>
                    <li className='px-3 py-4 text-base'><a href="/#project" className="hover:text-dark-secondary">Project</a></li>
                    <li className='px-3 py-4 text-base'><a href="/#contact" className="hover:text-dark-secondary">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className='block md:hidden absolute top-10 left-0 bg-dark-secondary w-full h-full mt-7 max-h-64 h-3/6'>
                <ul className='flex flex-col'>
                    <li className='w-full h-full text-center text-white'><a href="/#about">About</a></li>
                    <li className='w-full h-full text-center text-white'><a href="/#experience">Experience</a></li>
                    <li className='w-full h-full text-center text-white'><a href="/#project">Project</a></li>
                    <li className='w-full h-full text-center text-white'><a href="/#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <IoMdMenu />
            </button>
        </header>
    )
}

export default Header


import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='text-white flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
            <ul className='hidden md:flex'>

                <li className='p-4'>Home</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>

            </ul>
            <div className='md:hidden' onClick={handleNav}>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul className={nav ? " bg-[#000300] ease-in-out duration-500 md:hidden fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 " : "left-[-100%] top-20 md:hidden fixed ease-in-out duration-500"}>

                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>Resources</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4 '>Contact</li>

            </ul>



        </div>
    )
}

export default Navbar
import React, { useState } from 'react';
import logo from '../../Assets/Logo/Logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose, AiOutlineContacts, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { BsBriefcase } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { GrBlog } from 'react-icons/gr'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='flex justify-between items-center lg:mt-5 mt-2'>
            <div>
                <img className='md:w-40 md:h-16 w-20 h-8 ' src={logo} alt="logo" />
            </div>
            {/* **** this div will only visible in large and medium device ***  */}
            <div className='md:block hidden'>
                <ul className='flex gap-5 text-lg font-light uppercase'>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Home</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>About Me</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Portfolio</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Skills</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Blog</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Contact</li>
                </ul>
            </div>
            {/* **** this div will only visible in small device ***  */}
            <div className={menuOpen === false ? `md:hidden block duration-300 absolute translate-y-[250px] bottom-0 w-11/12` : `md:hidden block absolute translate-y-[0px] duration-300  bottom-0 w-11/12`}>
                <ul className='grid gap-3 grid-cols-3 text-center bg-white w-full pt-5 pb-10 px-8 rounded-t-lg'>
                    <li className='text-2xl border border-gray-700 hover:bg-gray-200 rounded-md p-2 flex justify-center items-center'><AiOutlineHome /></li>
                    <li className='text-2xl border border-gray-700 hover:bg-gray-200 rounded-md p-2 flex justify-center items-center'><AiOutlineUser /></li>
                    <li className='text-2xl border border-gray-700 hover:bg-gray-200 rounded-md p-2 flex justify-center items-center'><BsBriefcase /></li>
                    <li className='text-2xl border border-gray-700 hover:bg-gray-200 rounded-md p-2 flex justify-center items-center'><GiSkills /></li>
                    <li className='text-2xl border border-gray-700 hover:bg-gray-200 rounded-md p-2 flex justify-center items-center'><GrBlog /></li>
                    <li className='text-2xl border border-gray-700 hover:bg-gray-200 rounded-md p-2 flex justify-center items-center'><AiOutlineContacts /></li>
                </ul>
            </div>

            <div className='md:hidden block'>
                {
                    menuOpen === false ?
                        <HiOutlineMenuAlt3 onClick={() => setMenuOpen(!menuOpen)} className='w-7 h-7 cursor-pointer hover:scale-105 ' /> :
                        <AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} className='w-7 h-7 cursor-pointer hover:scale-105 ' />
                }
            </div>
        </div>
    );
};

export default Navbar;
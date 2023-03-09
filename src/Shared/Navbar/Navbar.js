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
        <div className='flex justify-between items-center md:pt-5 pb-1 pt-3 z-30  ' style={{background: "#EBEBEB"}}>
            <div>
                <img className='md:w-40 md:h-16 w-20 h-8 ' src={logo} alt="logo" />
            </div>
            {/* **** this div will only visible in large and medium device ***  */}
            <div className='md:block hidden'>
                <ul className='flex gap-5 text-lg font-light uppercase'>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Home</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>About Me</li>
                    <a href="#portfolio" className='hover:font-normal cursor-pointer text-gray-900'>Portfolio</a>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Skills</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Blog</li>
                    <li className='hover:font-normal cursor-pointer text-gray-900'>Contact</li>
                </ul>
            </div>
            {/* **** this div will only visible in small device ***  */}
            {/* <div className={menuOpen === false ? `md:hidden block duration-300 left-[72px] absolute w-11/12` : `md:hidden block absolute duration-300 w-11/12`}> */}
            <div className={`md:hidden block duration-300 shadow-2xl shadow-amber-300 ${!menuOpen ? "top-[-150px]":"top-[50px]"} absolute w-11/12`}>

                <ul className='grid gap-1 grid-cols-3 text-center bg-white p-2 rounded-xl'>
                    <li className='text-xs font-semibold gap-1 border border-gray-700 hover:bg-gray-200 rounded-md p-1 flex justify-center items-center'><AiOutlineHome />Home</li>
                    <li className='text-xs font-semibold gap-1 border border-gray-700 hover:bg-gray-200 rounded-md p-1 flex justify-center items-center'><AiOutlineUser />About</li>
                    <li className='text-xs font-semibold gap-1 border border-gray-700 hover:bg-gray-200 rounded-md p-1 flex justify-center items-center'><BsBriefcase />Projects</li>
                    <li className='text-xs font-semibold gap-1 border border-gray-700 hover:bg-gray-200 rounded-md p-1 flex justify-center items-center'><GiSkills />Skills</li>
                    <li className='text-xs font-semibold gap-1 border border-gray-700 hover:bg-gray-200 rounded-md p-1 flex justify-center items-center'><GrBlog />Blogs</li>
                    <li className='text-xs font-semibold gap-1 border border-gray-700 hover:bg-gray-200 rounded-md p-1 flex justify-center items-center'><AiOutlineContacts />Contact</li>
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
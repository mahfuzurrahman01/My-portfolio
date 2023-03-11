import React, { useState } from 'react';
import gif from '../../Assets/gif/my-gif.gif'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsLightbulb } from 'react-icons/bs';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { motion } from 'framer-motion'
const Hero = () => {
    const [lightMode, setLightMode] = useState(false)
    return (
        <div>
            <div className='flex md:flex-row flex-col-reverse md:gap-10 gap-5 justify-center items-center md:mt-14 mt-5'>
                <div className='md:w-[55%] w-11/12 overflow-hidden'>
                    <p className='lg:text-xl md:text-lg text-gray-500 font-mono'>Hi, my name is </p>
                    <motion.h1
                        className='overflow-hidden font-sans lg:text-6xl text-4xl md:text-5xl font-extrabold text-gray-700 my-2' initial={{ x: "-110%", opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}>
                        Mafuzur Rahman.
                    </motion.h1>
                    <motion.h1 className='font-sans lg:text-5xl text-2xl md:text-4xl font-extrabold text-gray-400 my-2'
                        initial={{ x: "-110%", opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.7, duration: 0.7 }}>
                        I love to build the web app.
                    </motion.h1>
                    <div className='border p-2 lg:mt-5 mt-2  rounded-xl text-justify bg-gray-200  hover:bg-rose-200 hover:bg-gradient-to-tl hover:from-yellow-200 duration-500 cursor-pointer'>
                        <p>As a frontend developer, I am dedicated to crafting beautiful, functional, and intuitive user interfaces that engage and delight users.My approach to development is collaborative and user-centered, ensuring that the end result meets your needs and satisfies your users. I am constantly expanding my knowledge and skills to stay up-to-date with the latest trends and best practices in the industry.</p>
                        <p className='border p-2 lg:mt-5 mt-2  rounded-xl text-justify bg-gray-200  hover:bg-gray-200 duration-300 cursor-pointer'>By the way I love to build the frontend with ReactJs. And the combination of react and tailwind CSS is always satisfying for me!!</p>
                    </div>
                    <div className='inline-block'>
                        <p className='flex justify-center items-center gap-1 border border-gray-400 text-gray-700 px-5 ml-2 cursor-pointer hover:bg-gray-400 hover:text-white duration-300 mt-3 py-2 rounded-lg hover:shadow-lg hover:shadow-amber-300'>Hire me <IoPaperPlaneOutline /></p>
                    </div>

                </div>

                <div className='md:w-[45%] w-11/12 flex flex-col items-center relative md:mt-0 mt-6'>

                    {
                        lightMode && <div className='absolute md:w-96 w-72 h-5 shadow-xl shadow-amber-300 duration-300' style={{ backgroundColor: "#EBEBEB" }}>
                        </div>
                    }
                    <img src={gif} alt="" className={`w-full md:h-96 duration-300 ${!lightMode ? 'saturate-100' : 'saturate-200'}`} />
                    <div className='flex justify-center items-center gap-4 duration-500'>
                        {
                            !lightMode ? <p onClick={() => setLightMode(!lightMode)} className='duration-300 flex justify-center items-center gap-1 border border-gray-400 text-gray-700 px-5 ml-2 cursor-pointer text-xs hover:bg-gray-400 hover:text-white mt-0 py-2 rounded-lg '>Turn on light <BsLightbulb className='text-amber-500' /></p> : <p onClick={() => setLightMode(!lightMode)} className=' flex justify-center items-center gap-1 border border-gray-400 text-gray-700 px-5 ml-2 cursor-pointer hover:bg-gray-400 hover:text-white duration-300 mt-0 py-2 rounded-lg text-xs'>Turn off light <AiOutlinePoweroff /></p>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
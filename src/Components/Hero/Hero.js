import React from 'react';
import gif from '../../Assets/gif/my-gif.gif'
import { CiUser } from 'react-icons/ci'
import { IoPaperPlaneOutline } from 'react-icons/io5'
const Hero = () => {
    return (
        <div>
            <div className='flex gap-5 justify-center items-center mt-14'>
                <div className='w-[55%]'>
                    <p className='text-xl text-gray-500 font-mono'>Hi, my name is </p>
                    <h1 className='font-sans text-6xl font-extrabold text-gray-700 my-2'>Mafuzur Rahman.</h1>
                    <h1 className='font-sans text-5xl font-extrabold text-gray-400 my-2 '>I love to build the web app.</h1>
                    <p className='border p-2 mt-5  rounded-xl text-justify hover:bg-gray-200 duration-300 hover:scale-105 cursor-pointer'> As a frontend developer, I am dedicated to crafting beautiful, functional, and intuitive user interfaces that engage and delight users.My approach to development is collaborative and user-centered, ensuring that the end result meets your needs and satisfies your users. I am constantly expanding my knowledge and skills to stay up-to-date with the latest trends and best practices in the industry.
                    </p>
                    <div className='inline-block'>
                        <p className='flex justify-center items-center gap-1 border border-gray-400 text-gray-700 px-5 ml-2 cursor-pointer hover:bg-gray-400 hover:text-white duration-300 mt-3 py-2 rounded-lg '>Hire me <IoPaperPlaneOutline /></p>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <img src={gif} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
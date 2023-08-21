/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";
import { BsGithub } from 'react-icons/bs';
import { TbBrandGithub } from 'react-icons/tb';
import { AiOutlineLink } from 'react-icons/ai';
import css from './ProjectCard.css'

const ProjectCard = ({ projects }) => {

    console.log(projects[0])
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className='flex flex-col justify-center items-center mt-7 w-full bg-gray-100 md:p-10 p-2 rounded-lg'>
               
            {
                projects?.map(project => <div key={project.id} className={`flex ${project.id % 2 === 0 ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col'} justify-center items-center md:gap-10 gap-10 w-full`}>
                    <div className="flex flex-col lg:w-[40%] w-full md:p-6 p-3 md:space-y-6 space-y-1 overflow-hidden rounded-lg shadow-md bg-gray-900 bg-gradient-to-tl from-gray-600 text-gray-100">
                        <div className="flex space-x-4">
                            <img alt="" src={project?.logo} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <p rel="noopener noreferrer" href="#" className="text-sm font-semibold">{project?.type}</p>
                                <span className="text-xs text-gray-400">{project?.date}</span>
                            </div>
                        </div>
                        <div className={`${project?.size === "banner" ? "w-full lg:mt-0 mt-2 image-scroll-banner rounded": "w-full image-scroll rounded"}`} style={{ backgroundImage: `url(${project?.image})` }}>

                        </div>
                    </div>
                    <div className='text-lg text-gray-700 lg:w-[60%] w-full lg:mb-0 mb-5'>
                        <p className='md:text-4xl uppercase text-3xl lg:mt-7 mt-0 p-2 font-bold text-gray-600  md:mb-5 mb-1 inline-block'>{project?.name}</p>
                        <p className='text-justify p-2 md:text-lg text-sm'>{project?.description}</p>
                        <div className='my-5 flex lg:justify-start justify-center gap-5 items-center'>
                            <a href={project?.gitHubClient} rel="noreferrer" target="_blank" className='flex flex-col justify-center items-center '>
                                <BsGithub className='text-2xl text-center' />
                                <p className='text-sm font-semibold'>Frontend</p>
                            </a>
                            {
                                project?.gitHubServer && <a rel="noreferrer" target="_blank" href={project?.gitHubServer} className='flex flex-col justify-center items-center '>
                                    <TbBrandGithub className='text-2xl text-center' />
                                    <p className='text-sm font-semibold'>Backend</p>
                                </a>
                            }

                            <a rel="noreferrer" target="_blank" href={project?.live} className='flex flex-col justify-center items-center '>
                                <AiOutlineLink className='text-2xl text-center' />
                                <p className='text-sm font-semibold'>Live</p>
                            </a>

                        </div>
                    </div>
                </div>)
            }


        </motion.div>
    );
};

export default ProjectCard;



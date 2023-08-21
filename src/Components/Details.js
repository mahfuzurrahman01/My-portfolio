import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard/ProjectCard';
import { AiOutlineHome } from 'react-icons/ai';

const Details = () => {
    const projects = useLoaderData()
    const id = projects.id;
    const [allProjects, setAllProjects] = useState([])
    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [])

    const project = allProjects.find(x => x.id === id)


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-11/12 mx-auto min-h-screen'
        >
       
            <div className='w-11/12 mx-auto  relative'>
            <Link title='go home' to='/' className='lg:text-xl text-lg absolute lg:top-10 top-8 lg:left-5 left-2 lg:w-8 w-6 lg:h-8 h-6 bg-gray-600 text-gray-100 rounded-full flex justify-center items-center'><AiOutlineHome/></Link>
                <h1 className='lg:text-6xl md:text-5xl text-3xl pt-5 font-bold text-gray-500 border-b-4 md:pb-5 pb-2 w-1/2 mx-auto border-gray-400 text-center'>{project?.title}</h1>
                <p className='mt-5 lg:text-lg md:text-lg text-xs text-gray-500 font-serif text-center w-11/12 mx-auto'>{project?.description}</p>
            </div>
            {
                project?.projects?.length > 0 && <div
                    className='lg:w-[90%] w-[95%] mx-auto'>
                    <ProjectCard projects={project.projects} />
                </div>
            }
        </motion.div>
    );
};

export default Details;
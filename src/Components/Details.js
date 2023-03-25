import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion";

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
    console.log(project)
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center items-center gap-5 w-11/12 mx-auto min-h-screen'
        >
            <h1 className='text-5xl font-bold text-gray-500 text-center'>{project?.title}</h1>
        </motion.div>
    );
};

export default Details;
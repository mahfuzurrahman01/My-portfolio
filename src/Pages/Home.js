import React from 'react';

import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { motion } from "framer-motion";
import Navbar from '../Shared/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Portfolio from '../Components/Portfolio/Portfolio';
import Skills from '../Components/Skills/Skills';
import Testimonials from '../Components/testimonials/Testimonials';
import Contact from '../Components/Contact/Contact';
import { AiOutlineArrowUp } from 'react-icons/ai';

const spinner = <CirclesWithBar
    height="110"
    width="110"
    color="#46556b"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    outerCircleColor=""
    innerCircleColor=""
    barColor=""
    ariaLabel='circles-with-bar-loading'
/>

const Home = () => {
    const [loading, setLoading] = useState(true)
    const localStorageItem = localStorage.getItem('loaded')

    useEffect(() => {
        if (localStorageItem === "true") {
            setLoading(false)
        }
    }, [localStorageItem])

    useEffect(() => {

        if (localStorageItem !== "true") {
            const subscript = setTimeout(() => {
                setLoading(false)
                localStorage.setItem("loaded", true)
            }, 5000);
        }

    }, [localStorageItem])


    return (
        <div id='home'>
            <div className="lg:w-4/5 w-11/12 m-auto">
                {
                    loading && localStorageItem !== "true" && <motion.div className="min-h-screen flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {spinner}
                    </motion.div>
                }
                {
                    !loading &&
                    <motion.div
                    className='relative'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* <a href='#home' className='lg:bottom-10 bottom-7 fixed lg:right-10 right-6 bg-gray-600 w-7 h-7 rounded-full flex justify-center items-center text-gray-100'><AiOutlineArrowUp/></a > */}
                        <Navbar />
                        <Hero />
                        <About />
                        <Portfolio />
                        <Skills />
                        <Contact/>
                    </motion.div>
                }

            </div>

        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import { GrCertificate, GrUserExpert } from 'react-icons/gr';
import Title from '../../Shared/Title';
import metaLogo from '../../Assets/Logo/meta.png'
import udemyLogo from '../../Assets/Logo/udemy.png'
import phLogo from '../../Assets/Logo/ph.png'
import calcitelogo from '../../Assets/Logo/calcitex.png'
import zeigenLogo from '../../Assets/Logo/zeigen-logo.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    const [state, setState] = useState(true)
    return (
        <div id='about' className='md:pt-10 pt-5'>
            <Title name={'About Me'} />

            <div className='text-center flex justify-center items-center md:gap-10 gap-5 text'>
                <p onClick={() => setState(true)} className={`flex justify-center items-center gap-2 ${state ? "border-b-2 border-gray-500" : "border-b-2 border-transparent"} text-gray-700 px-5  cursor-pointer duration-300 hover:bg-gray-300 mt-3 py-2 rounded-lg`}>Experience <GrUserExpert /> </p>
                <p onClick={() => setState(false)} className={`flex justify-center items-center gap-2 ${!state ? "border-b-2 border-gray-500" : "border-b-2 border-transparent"} text-gray-700 px-5  cursor-pointer duration-300 hover:bg-gray-300 mt-3 py-2 rounded-lg`}>Certificate <GrCertificate /> </p>

            </div>

            

            {/*====================== this section is for experience ========================= */}

            {
                state && <section className=" text-gray-700 md:mt-5 mt-2" data-aos="zoom-in" data-aos-duration="1500">
                    <div className="g:px-5 px-1 py-12 mx-auto lg:w-[90%] w-[96%]">
                        <div className="grid gap-4 lg:mx-4 mx-1 sm:grid-cols-12">
                            <div className="col-span-12 sm:col-span-3">
                                <div className="text-center sm:text-left md:mb-14 mb-7 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-slate-500">
                                    <h3 className="text-3xl font-semibold">Experiences</h3>
                                    <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Job / Freelancing</span>
                                </div>
                            </div>
                            <div className="relative col-span-12 md:px-4 px-2 space-y-6 sm:col-span-9">
                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-slate-500">
                                        <div className='flex justify-between items-center'>
                                            <h3 className="text-xl font-semibold tracking-wide">Front-end Developer at Zeigen</h3>
                                            <img src={zeigenLogo} alt="meta-logo" className='w-20 h-7 mr-1' />
                                        </div>
                                        <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2023 - present</time>
                                        <p className="mt-3 md:text-lg text-sm md:text-left text-justify"> For the past 1 year, I've been instrumental in shaping the user experience at Zeigen, contributing to their website and recently delving into mobile development with their React Native team. I'm currently driven by building an innovative app utilizing React Native, aiming to positively impact the lives of millions of young people.Zeigen is a health care service providing website.It is designed to promote and sell healthcare services provided by doctors and other medical professionals, such as consultations, appointments, and test lists. </p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-slate-500">
                                        <div className='flex justify-between items-center'>
                                            <h3 className="text-xl font-semibold tracking-wide">ReactJs Developer at CalciteX</h3>
                                            <img src={calcitelogo} alt="meta-logo" className='w-16 h-5 mr-1' />
                                        </div>
                                        <time className="text-xs tracking-wide uppercase text-gray-400">Dec 2022 - Jan 2023</time>
                                        <p className="mt-3 md:text-lg text-sm md:text-left text-justify">I've done my internship from calciteX as a reactJs developer.It was 2 months of internship program.Where my main task was to build the UI with React and make reusable components.In this period I've build 3 CRM website UI with reactJs and work on some existing projects also.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

 {/* ============== this section is for Certificate ================  */}
 {
                !state && <section data-aos="zoom-in" data-aos-duration="1500" className="text-gray-700 md:mt-5 mt-2">
                    <div className="lg:px-5 px-1 py-12 mx-auto lg:w-[90%] w-[96%]">
                        <div className="grid gap-4 lg:mx-4 mx-1 sm:grid-cols-12">
                            <div className="col-span-12 sm:col-span-3">
                                <div className="text-center sm:text-left md:mb-14 mb-7 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-slate-500">
                                    <h3 className="text-3xl font-semibold">Certificates</h3>
                                    <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Achievements / courses</span>
                                </div>
                            </div>
                            <div className="relative col-span-12 md:px-4 px-2 space-y-6 sm:col-span-9 ">
                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700 ">
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-slate-500 ">
                                        <div className='flex justify-between items-center '>
                                            <h3 className="text-xl font-semibold tracking-wide">Complete Web Development (MERN)</h3>
                                            <img src={phLogo} alt="meta-logo" className='w-16 h-12 mr-1' />
                                        </div>
                                        <time className="text-xs tracking-wide uppercase text-gray-400">Dec 2022</time>
                                        <p className="mt-3 md:text-lg text-sm md:text-left text-justify">Throughout this course, I have gained invaluable knowledge and skills in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I've learned how to create dynamic user interfaces, integrate APIs, manage databases and deploy the site</p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-slate-500">
                                        <div className='flex justify-between items-center'>
                                            <h3 className="text-xl font-semibold tracking-wide">Learn CSS3 In-Depth</h3>
                                            <img src={udemyLogo} alt="meta-logo" className='w-20 h-7 mr-1' />
                                        </div>
                                        <time className="text-xs tracking-wide uppercase text-gray-400">Nov 2022</time>
                                        <p className="mt-3 md:text-lg text-sm md:text-left text-justify">From this course I've learned CSS3 deeply.And get familiar with css Box model, flex box, selector and many more deeply.And explore how they works in browser.</p>
                                        {/* <a className='underline text-blue-700' href="https://www.udemy.com/certificate/UC-d4261603-aba6-4718-98cc-d7b6a8108d72/">
                                            Link
                                        </a> */}

                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-slate-500">
                                        <div className='flex justify-between items-center'>
                                            <h3 className="text-xl font-semibold tracking-wide">Introduction to Front-End Development</h3>
                                            <img src={metaLogo} alt="meta-logo" className='w-20 h-6 mr-1' />
                                        </div>
                                        <time className="text-xs tracking-wide uppercase text-gray-400">Sep 2022</time>
                                        <p className="mt-3 md:text-lg text-sm md:text-left text-justify">From this course I've learned about the different types of web developers and the roles and responsibilities of front-end, back-end, and full-stack developers. I've take a first look at the core technologies of HTML, CSS, and Javascript and explore the concepts that underpin how the internet works.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

        </div>
    );
};

export default About;
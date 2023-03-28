import React from 'react';
import Title from '../../Shared/Title';
import html from '../../Assets/Logo/HTML.png'
import css from '../../Assets/Logo/css.png'
import js from '../../Assets/Logo/js.png'
import ts from '../../Assets/Logo/ts.png'
import next from '../../Assets/Logo/Next.png'
import react from '../../Assets/Logo/react.png'
import mongo from '../../Assets/Logo/mongo.png'
const Skills = () => {
    return (
        <div id="skills" className='md:pt-10 pt-2'>
            <Title name={"Skills"} />
            <div className='flex justify-center items-center lg:w-3/4 md:11/12 w-full md:py-5 py-2 mx-auto flex-wrap gap-4'>
                <div data-aos="fade-right" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={html} alt="" className='w-11/12 h-11/12' />
                </div>
                <div data-aos="fade-down" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={css} alt="" className='w-11/12 h-11/12' />
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={js} alt="" className='w-11/12 h-11/12' />
                </div>
                <div data-aos="fade-left" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={ts} alt="" className='w-11/12 h-11/12' />
                </div>
                <div data-aos="fade-right" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={next} alt="" className='w-11/12 h-11/12' />
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={react} alt="" className='w-11/12 h-11/12' />
                </div>
                <div data-aos="fade-left" data-aos-duration="700" className='md:w-52 md:h-44 w-24 h-16 rounded-lg flex justify-center items-center p5 bg-gray-100 hover:scale-105 duration-300 shadow-lg shadow-gray-300'>
                    <img src={mongo} alt="" className='w-11/12 h-11/12' />
                </div>
            </div>
        </div>
    );
};

export default Skills;
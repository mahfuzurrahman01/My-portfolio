import Title from '../../Shared/Title';
import {  CiGlobe, CiMonitor, CiViewTimeline } from 'react-icons/ci'
import { useEffect, useState } from 'react';
import bg2 from '../../Assets/background/bg2.jpg'
import bg3 from '../../Assets/background/bg3.jpg'
import bg4 from '../../Assets/background/bg4.jpg'
import PrimaryButton from '../../Shared/Button/PrimaryButton';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    const [projects,setProjects] = useState([])
    // this state will define the cover of categories items on portfolio section when hover this state will change and with this change the cover will seen or hidden
    const [cover, setCover] = useState(0)

    const mouseEnterHandle = (num) => {
        if (num === 1) {
            setCover(1)
        } else if (num === 2) {
            setCover(2)
        } else if (num === 3) {
            setCover(3)
        } else if (num === 4) {
            setCover(4)
        } else if (num === 5) {
            setCover(5)
        } else if (num === 6) {
            setCover(6)
        }
    }
    const mouseLeaveHandle = () => {
        setCover(0)
    }


    return (
        <div id='portfolio' className='lg:pt-10 pt-5'
        >
            <Title name={"Projects"} />
            <div className='flex justify-center items-center gap-6 flex-wrap'>

                {/* ==========================================================
                =========================== Frontend section =================
                ============================================================== */}
                <div data-aos="zoom-in-right" data-aos-duration="1000" onMouseEnter={() => mouseEnterHandle(1)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-600 bg-gradient-to-tl from-slate-300 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 1 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"Step inside the world of e-commerce! Here, you'll find a collection of my favorite projects that showcase the power of online shopping. Take a peek and see what's possible!"</p>
                            <Link to='/projectsDetails/1'><PrimaryButton name="Explore" /></Link>
                        </div>
                    </div>
                    <CiMonitor className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>FRONTEND </p>
                </div>

                {/* ==========================================================
                =========================== Full stack section =================
                ============================================================== */}

                <div data-aos="zoom-in" data-aos-duration="1000" onMouseEnter={() => mouseEnterHandle(2)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-600 bg-gradient-to-tl from-slate-300 rounded-lg flex justify-center items-center h-72'>
          
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 2 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"In this section, you'll find my favorite projects that showcase my experience related to Business website. Come take a look and see how I can help bring your business to the next level!"</p>
                            <Link to='/projectsDetails/2'><PrimaryButton name="Explore" /></Link>
                        </div>
                    </div>
                    <CiGlobe className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>Full stack</p>
                </div>

                {/* ==========================================================
                =========================== Real life section =================
                ============================================================== */}

                <div data-aos="zoom-in-left" data-aos-duration="1000" onMouseEnter={() => mouseEnterHandle(3)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-600 bg-gradient-to-tl from-slate-300 rounded-lg flex justify-center items-center h-72'>
          
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 3 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"Explore the art of storytelling with my blogging projects! In this section, you'll find a selection of my recent blogging website that I have build with reactJs Come discover the power of words!"</p>
                            <Link to='/projectsDetails/3'><PrimaryButton name="Explore" /></Link>
                        </div>
                    </div>
                    <CiViewTimeline className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>Real Life</p>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
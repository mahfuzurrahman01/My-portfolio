import Title from '../../Shared/Title';
import { CiDeliveryTruck, CiShoppingCart, CiViewList } from 'react-icons/ci'
import { useState } from 'react';
import bg1 from '../../Assets/background/bg1.jpg'
import bg2 from '../../Assets/background/bg2.jpg'
import bg3 from '../../Assets/background/bg3.jpg'
import bg4 from '../../Assets/background/bg4.jpg'
import bg5 from '../../Assets/background/bg5.jpg'
import bg6 from '../../Assets/background/bg6.jpg'
import PrimaryButton from '../../Shared/Button/PrimaryButton';
const Portfolio = () => {
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
            <Title name={"Portfolio"} />
            <div className='flex justify-center items-center gap-6 flex-wrap'>
                {/* There will be 6 main categories of my projects  */}
                {/* ==========================================================
                =========================== E-commerce section =================
                ============================================================== */}
                <div onMouseEnter={() => mouseEnterHandle(1)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-900 bg-gradient-to-tl from-slate-500 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 1 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"Step inside the world of e-commerce! Here, you'll find a collection of my favorite projects that showcase the power of online shopping. Take a peek and see what's possible!"</p>
                            <PrimaryButton name="Explore" />
                        </div>
                    </div>
                    <CiShoppingCart className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>E-commerce</p>
                </div>

                {/* ==========================================================
                =========================== Business section =================
                ============================================================== */}

                <div onMouseEnter={() => mouseEnterHandle(2)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-900 bg-gradient-to-tl from-slate-500 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 2 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"In this section, you'll find my favorite projects that showcase my experience related to Business website. Come take a look and see how I can help bring your business to the next level!"</p>
                            <PrimaryButton name="Explore" />
                        </div>
                    </div>
                    <CiDeliveryTruck className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>B2C</p>
                </div>

                {/* ==========================================================
                =========================== Blogging section =================
                ============================================================== */}

                <div onMouseEnter={() => mouseEnterHandle(3)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-900 bg-gradient-to-tl from-slate-500 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 3 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"Explore the art of storytelling with my blogging projects! In this section, you'll find a selection of my recent blogging website that I have build with reactJs Come discover the power of words!"</p>
                            <PrimaryButton name="Explore" />
                        </div>
                    </div>
                    <CiViewList className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>Blogging</p>
                </div>
                <div onMouseEnter={() => mouseEnterHandle(1)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-900 bg-gradient-to-tl from-slate-500 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 1 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"Step inside the world of e-commerce! Here, you'll find a collection of my favorite projects that showcase the power of online shopping. Take a peek and see what's possible!"</p>
                            <PrimaryButton name="Explore" />
                        </div>
                    </div>
                    <CiShoppingCart className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>E-commerce</p>
                </div>

                {/* ==========================================================
                =========================== Business section =================
                ============================================================== */}

                <div onMouseEnter={() => mouseEnterHandle(2)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-900 bg-gradient-to-tl from-slate-500 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 2 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"In this section, you'll find my favorite projects that showcase my experience related to Business website. Come take a look and see how I can help bring your business to the next level!"</p>
                            <PrimaryButton name="Explore" />
                        </div>
                    </div>
                    <CiDeliveryTruck className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>B2C</p>
                </div>

                {/* ==========================================================
                =========================== Blogging section =================
                ============================================================== */}

                <div onMouseEnter={() => mouseEnterHandle(3)} onMouseLeave={mouseLeaveHandle} className='md:w-[32%] w-full flex-col relative overflow-hidden bg-gray-900 bg-gradient-to-tl from-slate-500 rounded-lg flex justify-center items-center h-72'>
                    {/* This div will work as cover  */}
                    <div className={`absolute  bg-gradient-to-tl from-yellow-300 p-5 flex justify-center items-center duration-500 w-full h-72 ${cover === 3 ? "top-0" : "top-[-100%]"}`} style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-gray-400 text-white p-2 bg-opacity-60 rounded-lg text-lg text-center'>
                            <p>"Explore the art of storytelling with my blogging projects! In this section, you'll find a selection of my recent blogging website that I have build with reactJs Come discover the power of words!"</p>
                            <PrimaryButton name="Explore" />
                        </div>
                    </div>
                    <CiViewList className='w-16 h-16 text-slate-200' />
                    <p className='text-4xl font-light uppercase text-white p-5'>Blogging</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
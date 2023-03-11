import React from "react";
import gif from '../../Assets/gif/my-gif2.gif'
import handIcon from '../../Assets/icons/wave.png'
const Screen = ({ setIntro, intro }) => {
    return (
        <div className="w-full bg-black min-h-screen flex flex-col justify-center items-center">
            <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-5 gap-3 md:px-16 px-0">
                <div className="md:w-[50%] w-[97%] p-5 bg-gray-400 bg-opacity-40 rounded-lg">
                    <div className="flex items-center gap-2">
                        <p className="text-2xl font-semibold text-white">Hey there,</p>
                        <img src={handIcon} className="md:w-10 md:h-10 w-7 h-7" alt="" />
                    </div>
                    <p className="text-white font-light text-lg">"Welcome to my portfolio! Thank you for taking the time to check out my work. If you're interested in hiring me for your next project, please don't hesitate to reach out to me via the contact section. Your feedback and opinions are important to me, so if you have any reviews or advice you'd like to share, please feel free to include them in your message. Thanks again for visiting my portfolio, and I look forward to hearing from you!"</p>

                    <div className="flex justify-between items-center">
                        <address className="text-amber-300 p-2">
                            <p>Md. Mafuzur Rahman</p>
                            <p>React.Js Developer at Zeigen</p>
                        </address>
                        <button className="md:mt-3 mt-2 border border-gray-200 hover:bg-gray-500 hover:bg-gradient-to-r hover:from-slate-200 duration-300 rounded-lg lg:px-5 md:px-2 px-5 py-1 text-white hover:text-gray-800" onClick={() => setIntro(!intro)}>Let's go!</button>
                    </div>
                </div>
                <div className="md:w-[50%] w-[97%]">
                    <img src={gif} alt="" className="w-full duration-300" />
                </div>
            </div>

        </div>
    );
};

export default Screen;
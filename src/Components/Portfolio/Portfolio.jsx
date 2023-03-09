import React, { useState } from 'react';
import image from '../../Assets/projects/remove.png'
import Title from '../../Shared/Title';
const Portfolio = () => {

    return (
        <div id='portfolio'  className='p-5'>

            <Title  name={"Portfolio"} />
            <div className='flex justify-center items-center gap-6 flex-wrap'>
                <div className="card w-[23rem] bg-base-100 hover:shadow-lg hover:shadow-amber-300 duration-300 hover:scale-105">
                    <figure><img src={image} alt="Shoes" className='bg-gray-500 bg-gradient-to-r from-slate-900' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Cleaning service
                            <div className="badge bg-slate-400 bg-gradient-to-r from-slate-900  border-0 text-white">Full stack</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur labore quaerat sit optio unde a quas, error, odio eius corporis</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Details</div>
                            <div className="badge badge-outline">Live Preview</div>
                        </div>
                    </div>
                </div>

                <div className="card w-[23rem] bg-base-100 hover:shadow-lg hover:shadow-amber-300 duration-300 hover:scale-105">
                    <figure><img src={image} alt="Shoes" className='bg-gray-500 bg-gradient-to-r from-slate-900' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Urban Furniture
                            <div className="badge bg-slate-400 bg-gradient-to-r from-slate-900  border-0 text-white">Full stack</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur labore quaerat sit optio unde a quas, error, odio eius corporis</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-[23rem] bg-base-100 hover:shadow-lg hover:shadow-amber-300 duration-300 hover:scale-105">
                    <figure><img src={image} alt="Shoes" className='bg-gray-500 bg-gradient-to-r from-slate-900' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            D-Quiz
                            <div className="badge bg-slate-400 bg-gradient-to-r from-slate-900  border-0 text-white">Full stack</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur labore quaerat sit optio unde a quas, error, odio eius corporis</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-[23rem] bg-base-100 hover:shadow-lg hover:shadow-amber-300 duration-300 hover:scale-105">
                    <figure><img src={image} alt="Shoes" className='bg-gray-500 bg-gradient-to-r from-slate-900' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            D-Quiz
                            <div className="badge bg-slate-400 bg-gradient-to-r from-slate-900  border-0 text-white">Full stack</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur labore quaerat sit optio unde a quas, error, odio eius corporis</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-[23rem] bg-base-100 hover:shadow-lg hover:shadow-amber-300 duration-300 hover:scale-105">
                    <figure><img src={image} alt="Shoes" className='bg-gray-500 bg-gradient-to-r from-slate-900' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            D-Quiz
                            <div className="badge bg-slate-400 bg-gradient-to-r from-slate-900  border-0 text-white">Full stack</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur labore quaerat sit optio unde a quas, error, odio eius corporis</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
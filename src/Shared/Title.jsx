import React from 'react';

const Title = ({name}) => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-center text-xl text-gray-700 font-light border-b-4 shadow-lg cursor-pointer bg-gray-200 hover:shadow-amber-300 border-gray-500 px-5 py-1 my-10 uppercase duration-300'>{name}</h1>
        </div>
    );
};

export default Title;




import React from 'react';

const PrimaryButton = ({ name }) => {
    return (
        <button className='text-amber-400 hover:bg-rose-300 hover:bg-gradient-to-r hover:from-yellow-300  duration-300 mt-1 rounded-lg px-4 border border-yellow-200 hover:border-amber-300 hover:text-white '>{name}</button>
    );
};

export default PrimaryButton;
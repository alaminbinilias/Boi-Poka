import React from 'react';

import BookImg from '../../Images/pngwing 1.png'

const Banner = () => {
    return (
        <div className='bg-[#f2f2f2] mt-4 py-10 rounded-2xl mx-2 lg:mx-0'>
            <div className='lg:flex items-center justify-evenly px-5 lg:px-20'>
                <div>
                    <h3 className='font-semibold text-[1.7rem] text-center lg:font-bold lg:text-left lg:text-[3.9rem] text-wrap'>Books to freshen up your bookshelf</h3>
                    <button className='bg-[#22bf0a] font-bold text-white px-5 py-3 rounded-md mt-6 cursor-pointer mx-auto justify-center w-full mb-4 lg:w-auto'>View The List</button>
                </div>
                <div>
                    <img className='w-[20rem] mx-auto lg:w-xl' src={BookImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
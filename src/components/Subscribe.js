import React from 'react';
import electrician from '../assets/electrician.png'

const Subscribe = () => {
    return (
        <div className='block md:flex items-center rounded-lg justify-evenly mx-0 md:mx-10 my-5 md:my-10 p-5 md:p-10 bg-secondary'>
            <div>
                <img className='w-32 mx-auto pt-10 md:w-72' src={electrician} alt="" />
            </div>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold text-black my-5'>Get the latest news from our company through your mail!</h1>

                <input className='w-1/2 md:w-2/4  placeholder-gray-400 text-black outline-none font-semibold px-5 py-3 rounded-l-xl' type="email" placeholder='Enter Your Email' required />

                <button type='submit' className='bg-slate-800 text-white border border-accent hover:bg-transparent hover:text-accent font-semibold px-5 py-3 rounded-r-xl '>Subscribe</button>
            </div>

        </div>
    );
};

export default Subscribe;
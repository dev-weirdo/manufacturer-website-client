import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-secondary my-8 py-8 w-11/12 md:w-2/3 mx-auto rounded-lg'>
            <p className='text-3xl text-accent font-bold text-center mb-2'>Give us your feedback</p>
            <div className='w-4/5 md:w-2/5 flex flex-col mx-auto my-3'>
                <input placeholder='Your email' className='  mb-2 rounded-lg px-2 py-1 outline-none' type="email" />
                <textarea className='mb-2 rounded-lg p-2 outline-none' placeholder='Your feedback...' name="" id="" cols="10" rows="5"></textarea>
                <button className='bg-slate-900 hover:bg-slate-800 text-white w-2/5 md:w-1/5 mx-auto rounded-lg px-2 py-1' type='submit'>Submit</button>
            </div>
        </div>
    );
};

export default Feedback;
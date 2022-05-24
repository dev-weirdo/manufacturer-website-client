import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <InfinitySpin color="white" />
        </div>
    );
};

export default Loader;
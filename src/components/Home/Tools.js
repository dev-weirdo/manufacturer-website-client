import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Loader';
import Tool from './Tool';

const Tools = () => {

    const { isLoading, data } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loader></Loader>;
    }

    return (
        <div className='w-full my-8'>
            <div className='text-center'>
                <p className='text-3xl md:text-5xl text-white my-7'>Available Tools</p>
            </div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.slice(0, 6).map(tool => <Tool tool={tool} key={tool._id}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [quan, setQuan] = useState(0);
    const { id } = useParams();
    const { isLoading, data } = useQuery('tool', () => fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json()
        ))


    if (isLoading) {
        return <button className='btn loading text-center'>Loading</button>
    }
    const { name, img, desc, availablequan, minordquan } = data;


    return (
        <div className="hero min-h-screen bg-base-100 text-neutral">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={name}></img>
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{desc}</p>
                    <p>Available Quantity: {availablequan} Pcs</p>
                    <div className='flex items-center'>
                        <label htmlFor="orderquan">Quantity</label>
                        <div className='ml-3'>
                            <input className='bg-slate-400 px-1 py-2' type="text" name="orderquab" id="orderquan" onChange={(e) => setQuan(e.target.orderquan.value)} value={quan} />
                        </div>
                    </div>
                    <button className="btn btn-secondary text-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
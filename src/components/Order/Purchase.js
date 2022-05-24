import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const { isLoading, data } = useQuery('tool', () => fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json()
        ))


    if (isLoading) {
        return <button className='btn loading text-center'>Loading</button>
    }
    const { name, img, desc, availablequan, minordquan } = data;

    const handleOrder = (e) => {
        e.preventDefault();

        const email =

            fetch('http://localhost:5000/orders')
    }



    return (
        <div className="hero min-h-screen bg-base-100 text-neutral">
            <div className="hero-content flex-col lg:flex-row md:w-3/6">
                <div className='w-full'>
                    <p className='my-5 text-4xl text-center'>{name}</p>
                    <img src={img} className="mx-auto w-full md:max-w-sm rounded-lg shadow-2xl" alt={name}></img>
                    <p className='mt-5 text-xl text-center'>{desc}</p>
                </div>
                <form onSubmit={handleOrder} className='w-full'>
                    <div>
                        <label className='label' htmlFor="name">Name</label>
                        <div>
                            <input className='w-full input input-bordered px-1 py-2' type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="email">Email</label>
                        <div>
                            <input className='w-full input input-bordered px-1 py-2' type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="availableQuan">Available Quantity</label>
                        <div>
                            <input className='w-full input input-bordered px-1 py-2' type="text" name="availableQuan" id="availableQuan" value={availablequan} disabled />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="minOrdQuan">Minimum Order Quantity</label>
                        <div>
                            <input className='w-full input input-bordered px-1 py-2' value={minordquan} disabled type="text" name="minOrdQuan" id="minOrdQuan" />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="quantity">Quantity</label>
                        <div>
                            <input className='w-full input input-bordered px-1 py-2' type="text" name="quantity" id="quantity" />
                        </div>
                    </div>
                    <button type='submit' className="btn btn-secondary text-accent sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary w-full my-5">Order</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;
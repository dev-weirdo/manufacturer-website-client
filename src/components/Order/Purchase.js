import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();
    const { isLoading, data } = useQuery('tool', () => fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()))


    if (isLoading) {
        return <button className='btn loading'></button>
    }
    const { name, img, desc, availablequan, minordquan } = data;

    setQuantity(minordquan);


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={name}></img>
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{desc}</p>
                    <p>Available Quantity: {availablequan} Pcs</p>
                    <div>
                        <label htmlFor="orderquan">Quantity</label>
                        <div>
                            {/* <button onClick={() => setQuantity(quantity - 1)}>Dec</button> */}
                            <input type="number" name="orderquab" id="orderquan" value={quantity} />
                            {/* <button onClick={() => setQuantity(quantity + 1)}>Inc</button> */}
                        </div>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
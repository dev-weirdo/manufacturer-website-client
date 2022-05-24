import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {

    const navigate = useNavigate();

    const { _id, name, img, desc, availablequan, minordquan, price } = tool;
    const handlePurchase = (id) => {
        navigate(`tools/${id}`)
    }

    return (
        <div className="mx-auto card w-full md:w-96 bg-neutral shadow-xl my-5">
            <figure className="p-10">
                <img src={img} alt="Shoes" className="rounded-xl h-48 w-96" />
            </figure>
            <div className="card-body items-center text-center text-accent">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <p>Available Quantity: {availablequan} Pcs</p>
                <p>Minimum Order: {minordquan} Pcs</p>
                <p>Price: ${price}/pp</p>
                <div className="card-actions">
                    <button onClick={() => handlePurchase(_id)} className="btn btn-secondary text-accent">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
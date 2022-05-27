import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();

    const [tool, setTool] = useState({});
    const [quan, setQuan] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                setTool(data);
                setQuan(data.minordquan);
            })
    }, [id])


    const { name, img, desc, availablequan, minordquan, price } = tool;
    const totalPrice = (quan * price).toFixed(2);

    const handleOrder = (e) => {
        e.preventDefault();

        const email = user?.email;
        const userName = user?.displayName;
        const toolName = name;
        const quantity = e.target.quantity.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const order = { email, userName, toolName, quantity, address, phone, totalPrice };

        if (quantity < minordquan) {
            return toast.warn(`Order quantity should be equal or greater than ${minordquan}`)
        }
        else if (quantity > availablequan) {
            return toast.warn(`Order quantity should be equal or less than ${availablequan}`)
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order Placed!')
                }
            })

        e.target.reset();
    }

    const handleQuanDec = () => {
        setQuan(quan - 1);
    }

    const handleQuanInc = () => {
        setQuan(quan + 1);
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
                            <input className='w-full input input-bordered px-2 py-3' type="text" name="name" id="name" disabled value={user?.displayName} />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="email">Email</label>
                        <div>
                            <input className='w-full input input-bordered px-2 py-3' type="email" name="email" disabled id="email" value={user?.email} />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="availableQuan">Available Quantity</label>
                        <div>
                            <input className='w-full input input-bordered px-2 py-3' type="text" name="availableQuan" id="availableQuan" value={availablequan} disabled />
                        </div>
                    </div>
                    {/* <div>
                        <label className='label' htmlFor="minOrdQuan">Minimum Order Quantity</label>
                        <div>
                            <input className='w-full input input-bordered px-2 py-2' value={minordquan} disabled type="text" name="minOrdQuan" id="minOrdQuan" />
                        </div>
                    </div> */}
                    <div>
                        <label className='label' htmlFor="quantity">Quantity</label>
                        <div className='flex'>
                            <button disabled={quan === minordquan ? true : false} className='btn btn-secondary' onClick={handleQuanDec}>-</button>
                            <input className='w-3/6 input input-bordered px-2 py-3 text-center' type="number" name="quantity" id="quantity" value={quan} disabled />
                            <button disabled={quan === availablequan ? true : false} className='btn btn-secondary' onClick={handleQuanInc}>+</button>
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="price">Total Price: (${price}/PP)</label>
                        <div>
                            <input className='w-full input input-bordered px-2 py-3' type="number" name="price" id="price" disabled value={`${totalPrice}`} />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="address">Address</label>
                        <div>
                            <input className='w-full input input-bordered px-2 py-3' type="text" name="address" id="address" required />
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="phone">Phone</label>
                        <div>
                            <input className='w-full input input-bordered px-2 py-3' type="tel" name="phone" id="phone" placeholder='+8801234567891' required />
                        </div>
                    </div>
                    <button type='submit' className="btn btn-secondary text-accent sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary w-full my-5">Order</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;
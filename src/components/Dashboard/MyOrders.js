import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        )
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user, orders])


    const handleOrderDelete = (id) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Tool</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{order.toolName}</td>
                                        <td>{order.quantity}</td>
                                        <td>${order.totalPrice}</td>
                                        <td><button onClick={() => handleOrderDelete(order._id)} className='btn btn-error'>DELETE</button></td>
                                        <td>{<Link className='btn btn-success btn-xl text-accent' to={`/dashboard/payment/${order._id}`}>PAY</Link>}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div >
            }
        </div >
    );
};

export default MyOrders;
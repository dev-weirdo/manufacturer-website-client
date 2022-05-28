import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,
            {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Product deleted successfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
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
                            <th>TX ID</th>
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
                                    <td>{!order?.paid && <button onClick={() => handleOrderDelete(order._id)} className='btn btn-error'>DELETE</button>}</td>
                                    <td>{order?.paid ? <p className='text-lg text-green-500'>Paid</p>
                                        :
                                        <Link className='btn btn-success btn-xl text-accent' to={`/dashboard/payment/${order._id}`}>PAY</Link>
                                    }</td>
                                    <td>{order?.txId && <p className='text-lg text-green-500'>{order?.txId}</p>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default MyOrders;
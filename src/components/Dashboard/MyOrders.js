import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user])


    const handleOrderDelete = (id) =>

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
                                        <td>{order.totalPrice}</td>
                                        <td><button onClick={handleOrderDelete(order._id)} className='btn btn-error'>DELETE</button></td>
                                        <td><button className='btn btn-success'>PAY</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
    };

    export default MyOrders;
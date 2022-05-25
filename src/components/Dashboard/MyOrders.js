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
    }, [user, orders])


    const handleOrderDelete = (id) => {
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
                                        <td>
                                            <label htmlFor="my-modal" className="btn modal-button btn-error">DELETE</label>
                                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box max-w-sm px-0 py-7">
                                                    <h3 className="font-bold text-lg text-center">Are you sure?</h3>
                                                    <div className="modal-action flex justify-evenly">
                                                        <label htmlFor="my-modal" className="btn btn-secondary">Cancel</label>
                                                        <label onClick={() => handleOrderDelete(order._id)} htmlFor="my-modal" className="btn btn-warning">Yes</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td><button onClick={handleOrderDelete(order._id)} className='btn btn-error'>DELETE</button></td> */}
                                        <td> <button className='btn btn-success'>PAY</button></td>
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
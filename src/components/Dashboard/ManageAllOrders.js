import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../Loader';

const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch('http://localhost:5000/allorders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }

    const handleAdminDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/allorders/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Product deleted successfully')
                    }
                    refetch()
                })
        }

    }
    const handleShipment = (id) => {
        fetch(`http://localhost:5000/allorders/${id}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Shipped the order')
                }
            })

    }
    return (
        <div className='my-5'>
            <h1 className='text-3xl text-accent font-semibold mb-8'>Total Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th className='text-xl'>User email</th>
                            <th className='text-xl'>user name</th>
                            <th className='text-xl'>order</th>
                            <th className='text-xl'>quantity</th>
                            <th className='text-xl'>delete</th>
                            <th className='text-xl'>payment</th>
                            <th className='text-xl'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} className='text-green-200 text-xl'>
                                <th>{index + 1}</th>
                                <td> {order.email}</td>
                                <td> {order.userName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity} Pcs</td>
                                <td> {!order.paid && <button onClick={() => handleAdminDeleteOrder(order._id)} className='btn btn-error'>Delete</button>}</td>
                                <td>
                                    {!order.paid ? <button className='text-white'>Not paid</button> : <span className='text-white'>Paid</span>}
                                </td>
                                <td>
                                    {!order.paid ? <span></span> :
                                        <>
                                            {order.status === "shipped"
                                                ?
                                                <h1 className='text-success'>Shipped</h1>
                                                :
                                                <button onClick={() => handleShipment(order._id)} className='text-accent btn btn-secondary'>Pending</button>}
                                        </>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default ManageAllOrders;
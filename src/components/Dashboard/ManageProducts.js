import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools])

    const handleProductDelete = (id) => {
        const agree = window.confirm('Are you sure?');
        if (agree) {
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Product deleted successfully')
                        const remaining = tools.filter(tool => tool._id !== id);
                        setTools(remaining);
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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool) =>
                                <tr key={tool?._id}>
                                    <td><img className='w-20 rounded-md' src={tool?.img} alt="" /></td>
                                    <td>{tool?.name}</td>
                                    <td>{tool?.availablequan}</td>
                                    <td>${tool?.minordquan}</td>
                                    <td>${tool?.price}</td>
                                    <td><button onClick={() => handleProductDelete(tool._id)} className='btn btn-error'>DELETE</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default ManageProducts;
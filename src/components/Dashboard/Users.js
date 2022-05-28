import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://radiant-castle-94572.herokuapp.com/users',
            {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setUsers(data))
    })

    const makeAdmin = (email) => {
        fetch(`https://radiant-castle-94572.herokuapp.com/users/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You are not allowed to make an admin')
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`User ${email} is now an admin`)
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl text-center text-white my-8'>Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} className='btn btn-secondary btn-xl text-accent'>Make Admin</button>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
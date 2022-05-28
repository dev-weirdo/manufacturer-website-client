import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const userMenu = <>
        <li><Link to='/dashboard'>My Profile</Link></li>
        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
    </>
    const adminMenu = <>
        <li><Link to='/dashboard'>My Profile</Link></li>
        <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link></li>
        <li><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
        <li><Link to='/dashboard/users'>Make admin</Link></li>
        <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
    </>

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        admin ? adminMenu : userMenu
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
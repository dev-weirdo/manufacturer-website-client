import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const navItem =
        <>
            {
                user && <li><Link to='/dashboard'>Dashboard</Link></li>
            }
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            {user ?
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost outline-none m-1"><UserCircleIcon className='w-10'></UserCircleIcon></label>
                    <ul tabIndex="0" className="dropdown-content mt-3 menu p-2 shadow bg-base-100 rounded-box w-56">
                        <li><p className='font-bold'>{user?.displayName}</p></li>
                        <li><button className='btn btn-secondary text-accent mx-auto' onClick={handleSignOut}>Logout</button></li>
                    </ul>
                </div>
                :
                <li><Link to='/login'>Login</Link></li>}
        </>
    return (
        <div className="md:px-10 navbar bg-base-100 text-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">ElecTools</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <>
                {
                    user && <div className='navbar-end md:hidden'>
                        <label htmlFor="my-drawer-2" className="btn btn-secondary text-accent drawer-button lg:hidden">Dashboard</label>
                    </div>
                }
            </>
        </div>
    );
};

export default Header;
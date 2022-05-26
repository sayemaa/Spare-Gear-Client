import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>

        }
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
        <li className='lg:hidden'>{user ?
            <div className='flex items-center'>
                <p>{user?.displayName}</p>
                <button className="btn btn-ghost" onClick={logout} >Sign Out</button>
            </div>
            : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className='bg-base-100'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-primary normal-case text-xl">Spare Gear</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className='hidden lg:block'>
                        {
                            user ?
                                <div className='flex items-center'>
                                    <p className='text-lg text-primary'>{user?.displayName}</p>
                                    <button className="btn btn-ghost" onClick={logout} >Sign Out</button>
                                </div>
                                :
                                <Link to="/login" className="btn">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
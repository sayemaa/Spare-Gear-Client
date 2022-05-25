import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gray-100 px-10">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                    {/* Both */}
                    <li><Link to="/dashboard">My Profile</Link></li>

                    {/* User */}
                    {!admin && <>
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        <li><Link to="/dashboard/addReview">Add a Review</Link></li>
                    </>}

                    {/* Admin */}
                    {admin && <>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
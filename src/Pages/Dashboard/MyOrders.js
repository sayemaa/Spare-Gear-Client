import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user, navigate])

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-primary mb-5 text-center mt-10'>My Orders</h2>
            <Table className="table w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Name</Th>
                        <Th>Order</Th>
                        <Th>Quantity</Th>
                        <Th>Price</Th>
                        <Th>Payment</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        orders.map((order, index) => <Tr>
                            <Th>{index + 1}</Th>
                            <Td>{order.name}</Td>
                            <Td>{order.productName} </Td>
                            <Td>{order.totalOrder}</Td>
                            <Td>${order.totalPrice}</Td>
                            <Td>{(!order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                {(order.paid) ? <span className='text-success'>Paid</span> : <button className='btn ml-2 btn-xs btn-error'>Cancel</button>}
                            </Td>
                        </Tr>)
                    }
                </Tbody>
            </Table>
        </div>
    );
};

export default MyOrders;
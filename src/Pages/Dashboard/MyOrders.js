import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import OrderCancelModal from './OrderCancelModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://spare-gear-server.onrender.com/orders?email=${user?.email}`, {
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
    }, [user, navigate, orders])

    const handleCancel = (id) => {
        const url = `https://spare-gear-server.onrender.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining);
            })
    }

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
                        orders.map((order, index) => <Tr key={index}>
                            <Th>{index + 1}</Th>
                            <Td>{order.name}</Td>
                            <Td>{order.productName} </Td>
                            <Td>{order.totalOrder}</Td>
                            <Td>${order.totalPrice}</Td>
                            <Td>
                                {
                                    (order.paid) &&
                                    <div>
                                        <p><span className='text-neutral'>Pending..</span></p>
                                        <p>Transaction Id: <br /><span className='text-orange-500'>{order.transactionId}</span></p>
                                    </div>
                                }
                                {
                                    (!order.paid && !order.shipped) &&
                                    <div>
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className='btn btn-xs btn-success'>Pay</button>
                                        </Link>
                                        <label onClick={() => setOrderId(order._id)} htmlFor="order-cancel-modal" className="btn modal-button btn-error btn-xs ml-2">Cancel</label>
                                    </div>
                                }
                                {
                                    (order.shipped && !order.paid) &&
                                    <div>
                                        <p><span className='text-success font-medium'>Shipped</span></p>
                                        <p>Transaction Id: <br /><span className='text-orange-500'>{order.transactionId}</span></p>
                                    </div>
                                }
                            </Td>
                        </Tr>)
                    }
                </Tbody>
            </Table>
            {
                orderId && <OrderCancelModal
                    orderId={orderId}
                    handleCancel={handleCancel}
                />
            }
        </div>
    );
};

export default MyOrders;
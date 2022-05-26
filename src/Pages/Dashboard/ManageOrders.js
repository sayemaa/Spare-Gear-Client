import { useState } from 'react';
import { useQuery } from 'react-query';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Loading from '../Shared/Loading';
import ManageOrderCancelModal from './ManageOrderCancelModal';


const ManageOrders = () => {
    const [orderId, setOrderId] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://enigmatic-tundra-01772.herokuapp.com/allOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    const handleShipped = (id) => {
        const paid = false;
        fetch(`https://enigmatic-tundra-01772.herokuapp.com/shipped/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ paid })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }

    const handleCancel = (id) => {
        const url = `https://enigmatic-tundra-01772.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }

    return (
        <div className='max-w-5xl mx-auto mb-32'>
            <h2 className='text-2xl font-bold text-primary mb-5 text-center mt-10'>Manage All Orders</h2>
            <Table className="table w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Email</Th>
                        <Th>Order</Th>
                        <Th>Price</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        orders.map((order, index) => <Tr key={index}>
                            <Th>{index + 1}</Th>
                            <Td>{order.email} </Td>
                            <Td>{order.productName}</Td>
                            <Td>${order.totalPrice}</Td>
                            <Td>
                                {
                                    order.paid &&
                                    <div>
                                        <p>Pending..</p>
                                        <button onClick={() => handleShipped(order._id)} className='btn btn-xs'>Ship</button>
                                    </div>
                                }
                                {
                                    order.shipped && <p className='font-semibold text-success'>Shipped</p>
                                }
                                {
                                    !order.paid && !order.shipped &&
                                    <div>
                                        <p className='m-1 text-error font-semibold'>Unpaid</p>
                                        <label onClick={() => setOrderId(order._id)} htmlFor="manage-order-cancel-modal" className="btn modal-button btn-error btn-xs ml-2">Cancel</label>
                                    </div>
                                }
                            </Td>
                        </Tr>)
                    }
                </Tbody>
            </Table>
            {
                orderId && <ManageOrderCancelModal
                    orderId={orderId}
                    handleCancel={handleCancel}
                />
            }
        </div>
    );
};

export default ManageOrders;
import { useQuery } from 'react-query';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Loading from '../Shared/Loading';


const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
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
        console.log(id)
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
                            <Td><button onClick={() => handleShipped(order._id)} className='btn btn-xs'>Ship</button></Td>
                        </Tr>)
                    }
                </Tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;
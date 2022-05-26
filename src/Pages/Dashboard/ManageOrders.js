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

    return (
        <div className='max-w-5xl mx-auto mb-32'>
            <h2 className='text-2xl font-bold text-primary mb-5 text-center mt-10'>Manage All Orders</h2>
            <Table className="table w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Order</Th>
                        <Th>Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        orders.map((order, index) => <Tr key={index}>
                            <Th>{index + 1}</Th>
                            <Td>{order.name}</Td>
                            <Td>{order.email} </Td>
                            <Td>{order.productName}</Td>
                            <Td>${order.totalPrice}</Td>
                        </Tr>)
                    }
                </Tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;
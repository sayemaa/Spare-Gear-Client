import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://spare-gear-server.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-primary mb-5 mt-10 text-center'>Make Admin</h2>
            <Table className="table w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Email</Th>
                        <Th>Admin Role</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                        />)
                    }
                </Tbody>
            </Table>
        </div>
    );
};

export default MakeAdmin;
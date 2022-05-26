import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import useParts from '../../hooks/useParts';
import ManageProductsDeleteModal from './ManageProductsDeleteModal';

const ManageProducts = () => {
    const [products, setProducts] = useParts();
    const [productId, setProductId] = useState(null);

    const handleDelete = (id) => {
        const url = `https://enigmatic-tundra-01772.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining);
            })
    }

    return (
        <div className='max-w-5xl mx-auto mb-32'>
            <h2 className='text-2xl font-bold text-primary mb-5 text-center mt-10'>Manage Products</h2>
            <Table className="table w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Name</Th>
                        <Th>Price</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        products.map((product, index) => <Tr key={product._id}>
                            <Th>{index + 1}</Th>
                            <Td>{product.name}</Td>
                            <Td>${product.price} </Td>
                            <Td><label onClick={() => setProductId(product._id)} htmlFor="manage-modal" className="btn modal-button btn-error btn-xs">Delete</label> </Td>
                        </Tr>)
                    }
                </Tbody>
            </Table>
            {
                productId && <ManageProductsDeleteModal
                    productId={productId}
                    handleDelete={handleDelete}
                />
            }
        </div>
    );
};

export default ManageProducts;
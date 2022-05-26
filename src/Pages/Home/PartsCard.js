import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ product }) => {
    const { _id, name, description, price, img, minQuantity, availableQuantity } = product;
    const navigate = useNavigate();

    const handlePlaceOrder = id => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-2 mb-3">
            <figure><img src={img} className='h-64 p-6' alt="parts" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='text-xl my-2 font-medium'>Price: ${price}</p>
                <p>{description.slice(0, 99)}</p>
                <p className='font-medium text-lg'>Available Quantity: {availableQuantity}</p>
                <p className='font-medium text-lg'>Minimum Order: {minQuantity}</p>
                <div className="card-actions justify-center mt-5 mb-2">
                    <button onClick={() => handlePlaceOrder(_id)} className="btn btn-primary text-white">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ parts }) => {
    const { _id, name, description, price, img } = parts;
    const navigate = useNavigate();

    const handlePlaceOrder = id => {
        navigate(`/parts/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-2">
            <figure><img src={img} className='h-64 p-6' alt="parts" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='text-xl my-2'>Price: ${price}</p>
                <p>{description.slice(0, 99)}</p>
                <div className="card-actions justify-center mt-5">
                    <button onClick={() => handlePlaceOrder(_id)} className="btn btn-error text-white">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;
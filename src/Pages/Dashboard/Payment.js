import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-primary my-5'>Payment: {id}</h2>
        </div>
    );
};

export default Payment;
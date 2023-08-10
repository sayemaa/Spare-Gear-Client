import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2K3EADgtfBsgR37n7N948OHnwAeutsuVix2qI7itHaS2UgfGuoUYNqeIdVGely1NC0nLzsAaBbvoDSbuBd2KoQ00rfVslpPB');


const Payment = () => {
    const { id } = useParams();
    const url = `https://spare-gear-server.onrender.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid justify-items-center content-center mt-5 lg:ml-[-200px]'>
            <h2 className='text-2xl font-bold text-primary mt-5 text-center'>Payment</h2>
            <div className="card bg-base-100 shadow-xl lg:w-96 w-72 max-w-md mb-8 mt-6">
                <div className="card-body text-center">
                    <h2 className='text-lg'>Hello, <span className='font-bold'> {order.name}</span></h2>
                    <p className='text-lg'>Order: <span className='text-primary font-semibold'>{order.productName}</span></p>
                    <p className='text-lg font-medium'>Please pay,</p>
                    <p className='text-2xl text-primary font-medium'>${order.totalPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 lg:w-96 w-72 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order} />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default Payment;
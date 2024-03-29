import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const quantityRef = useRef();
    const { register, handleSubmit } = useForm();

    const [product, setProduct] = useState({});
    const [orderTotal, setOrderTotal] = useState('');
    const [error, setError] = useState('');
    const [disable, setDisable] = useState(false);

    const errorAvailable = <p className='text-red-500'>Please order within the available quantity </p>
    const errorMinimum = <p className='text-red-500'>Please meet the minimum order quantity </p>

    const { _id, name, availableQuantity, minQuantity, img, price, description } = product;

    useEffect(() => {
        const url = `https://spare-gear-server.onrender.com/products/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleQuantity = () => {
        const quantity = quantityRef.current.value;
        if (parseInt(quantity) >= parseInt(minQuantity) && parseInt(quantity) <= parseInt(availableQuantity)) {
            setOrderTotal(quantity);
            setError('');
        }
        else if (parseInt(quantity) < parseInt(minQuantity)) {
            setError(errorMinimum)
        }
        else if (parseInt(quantity) > parseInt(availableQuantity)) {
            setError(errorAvailable);
        }
    }

    const onSubmit = data => {
        // console.log(data)
        const totalOrder = orderTotal || minQuantity;
        const totalPrice = (!orderTotal ? price * minQuantity : orderTotal * price).toString();

        const order = {
            productId: _id,
            productName: name,
            totalOrder,
            totalPrice,
            name: user?.displayName,
            email: user?.email,
            phone: data.phone,
            address: data.address
        }
        // console.log(order);

        fetch('https://spare-gear-server.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Your order has been confirmed!")
            })

    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value)
        // console.log(value);
        if ((value + 1) <= parseInt(minQuantity) || isNaN(value)) {
            setDisable(true)
            setError(errorMinimum)
        }
        else if ((value - 1) >= parseInt(availableQuantity)) {
            setDisable(true)
            setError(errorAvailable)
        }
        else {
            setDisable(false);
            setOrderTotal(value)
            setError('')
        }
    }

    return (
        <div className='max-w-7xl mx-auto mb-24'>
            <h2 className="text-4xl font-bold text-primary text-center my-8">Purchase</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">

                    {/* Product Info */}
                    <div className="text-center lg:text-left ">
                        <div className="card lg:max-w-lg md:w-96 lg:w-96 w-80 shadow-xl mx-2">
                            <figure><img src={img} className='h-64 p-6' alt="products" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                                <p className='text-2xl my-2 font-medium'>Price: ${price}</p>
                                <p>{description}</p>
                                <p className='text-neutral text-xl font-medium'>Available: {availableQuantity}</p>
                                <p className='text-xl font-medium text-neutral my-1'>Minimum Order: {minQuantity}</p>
                            </div>
                        </div>
                    </div>

                    {/* Purchase Info */}
                    <div className="card flex-shrink-0 max-w-sm shadow-xl bg-base-100 ">
                        <div className="card-body py-5">
                            <h2 className="text-2xl font-semibold text-primary mb-5">Purchase Info</h2>

                            <div className='mb-2'>
                                <h2 className='mr-4 text-xl font-medium'>Total Order: {!orderTotal ? minQuantity : orderTotal}</h2>
                            </div>

                            {/* Total Price */}
                            <h2 className='mr-4 text-xl font-medium my-4'>Total Price: ${!orderTotal ? price * minQuantity : orderTotal * price}</h2>

                            <label htmlFor="">Enter Quantity</label>
                            <input
                                type="number"
                                defaultValue={minQuantity}
                                onChange={handleChange}
                                className='input input-bordered' />
                            {error}

                            {/* Form */}
                            <form className='my-3 lg:w-full md:w-full w-64 lg:mx-0 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                {/* Order */}

                                <input
                                    className='input input-bordered w-full mb-2'
                                    value={user?.displayName || ""}
                                    disabled />
                                {/* User info */}
                                <input
                                    className='input input-bordered w-full mb-2'
                                    value={user?.email || ""}
                                    disabled />
                                <input
                                    className='input input-bordered w-full mb-2'
                                    placeholder="Phone Number"
                                    type="number" {...register("phone")}
                                    required />
                                <textarea
                                    className='h-32 textarea w-full input input-bordered mb-2'
                                    placeholder="Address"
                                    type="text" {...register("address")}
                                    required />
                                <input
                                    className='btn btn-primary block mx-auto'
                                    type="submit"
                                    disabled={disable}
                                    value="Order"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
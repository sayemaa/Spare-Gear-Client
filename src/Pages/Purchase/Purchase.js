import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { partsId } = useParams();
    const quantityRef = useRef();
    const { register, handleSubmit } = useForm();

    const [eachParts, setEachParts] = useState({});
    const [orderTotal, setOrderTotal] = useState('');
    const [error, setError] = useState('');

    const errorElement = <p className='text-red-500'>Please Order within the range</p>

    const { name, availableQuantity, minQuantity, img, price, description } = eachParts;

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEachParts(data));
    }, [])

    const handleQuantity = () => {
        const quantity = quantityRef.current.value;
        if (parseInt(quantity) >= parseInt(minQuantity) && parseInt(quantity) <= parseInt(availableQuantity)) {
            setOrderTotal(quantity);
            setError('');
        }
        else {
            setError(errorElement)
        }
    }

    const onSubmit = data => {
        // console.log(data)
        // const totalOrder = orderTotal || minQuantity;
        // const totalPrice = (!orderTotal ? price * minQuantity : orderTotal * price).toString();
        // const name = user?.displayName;
        // const email = user?.email;
        // const productName = name;
        // const phone = data.phone;
        // const address = data.address;

        const order = {
            totalOrder: orderTotal || minQuantity,
            totalPrice: (!orderTotal ? price * minQuantity : orderTotal * price).toString(),
            name: user?.displayName,
            email: user?.email,
            productName: name,
            phone: data.phone,
            address: data.address
        }

        console.log(order);

    };

    return (
        <div className='max-w-7xl mx-auto mb-24'>
            <h2 className="text-4xl font-bold text-primary text-center my-8">Purchase</h2>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">

                    {/* Product Info */}
                    <div class="text-center lg:text-left ">
                        <div className="card lg:max-w-lg md:w-96 lg:w-96 w-80 shadow-xl mx-2">
                            <figure><img src={img} className='h-64 p-6' alt="parts" /></figure>
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
                    <div class="card flex-shrink-0 max-w-sm shadow-xl bg-base-100 ">
                        <div class="card-body py-5">
                            <h2 className="text-2xl font-semibold text-neutral mb-5">Purchase Info</h2>

                            {/* Form */}
                            <form className='my-3 lg:w-full md:w-full w-64 lg:mx-0 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                {/* Order */}
                                <div className='flex '>
                                    <h2 className='mr-4 text-xl font-medium'>Total Order: {!orderTotal ? minQuantity : orderTotal}</h2>
                                    <label for="quantity-modal" class="btn modal-button btn-primary btn-xs">Change</label>
                                </div>
                                {error}
                                {/* Total Price */}
                                <h2 className='mr-4 text-xl font-medium my-4'>Total Price: {!orderTotal ? price * minQuantity : orderTotal * price}</h2>
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
                                    className='h-32 w-full input input-bordered mb-2'
                                    placeholder="Address"
                                    type="text" {...register("address")}
                                    required />
                                <input
                                    className='btn btn-primary block mx-auto'
                                    type="submit"
                                    value="Order" />
                            </form>

                            {/* Modal */}
                            <input type="checkbox" id="quantity-modal" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box text-center">
                                    <label htmlFor="quantity-modal" className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
                                    <h3 class="font-bold text-lg">Enter a quantity</h3>
                                    <input
                                        type="number"
                                        ref={quantityRef}
                                        min={minQuantity}
                                        className='input input-bordered mt-4 w-72' />
                                    <div class="modal-action">
                                        <label onClick={handleQuantity} for="quantity-modal" class="btn btn-primary btn-outline mx-auto">Enter</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
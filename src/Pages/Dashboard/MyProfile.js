import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

    }

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-primary mt-10 mb-5'>My Profile</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">

                    {/* Product Info */}
                    <div className="text-center lg:text-left ">
                        <div className="card lg:max-w-lg md:w-96 lg:w-96 w-80 shadow-xl mx-2">
                            <figure><img src="" className='h-64 p-6' alt="products" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold text-primary"></h2>
                                <p className='text-2xl my-2 font-medium'></p>
                                <p></p>
                                <p className='text-neutral text-xl font-medium'></p>
                                <p className='text-xl font-medium text-neutral my-1'></p>
                            </div>
                        </div>
                    </div>

                    {/* Purchase Info */}
                    <div className="card flex-shrink-0 max-w-sm shadow-xl bg-base-100 ">
                        <div className="card-body py-5">
                            <h2 className="text-2xl font-semibold text-primary mb-5">Purchase Info</h2>

                            {/* Form */}
                            <form className='my-3 lg:w-full md:w-full w-64 lg:mx-0 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                {/* Order */}
                                <div className='flex mb-2'>
                                    <h2 className='mr-4 text-xl font-medium'></h2>
                                    <label htmlFor="quantity-modal" className="btn modal-button btn-primary btn-xs">Change</label>
                                </div>

                                {/* Total Price */}
                                <h2 className='mr-4 text-xl font-medium my-4'>Total Price: </h2>
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
                                    value="Order"
                                />
                            </form>

                            {/* Modal */}
                            <input type="checkbox" id="quantity-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box text-center">
                                    <label htmlFor="quantity-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="font-bold text-lg">Enter a quantity</h3>
                                    <input
                                        type="number"
                                        className='input input-bordered mt-4 w-72' />
                                    <div className="modal-action">
                                        <label htmlFor="quantity-modal" className="btn btn-primary btn-outline mx-auto" >Enter</label>
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

export default MyProfile;
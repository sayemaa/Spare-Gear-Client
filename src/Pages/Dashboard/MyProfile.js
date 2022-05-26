import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const { data: profile, refetch } = useQuery('profile', () => fetch(`http://localhost:5000/user/${user?.email}`).then(res => res.json())
    )

    const onSubmit = data => {
        const name = user?.displayName
        const email = user?.email
        const phone = data.phone
        const education = data.education
        const address = data.address
        const linkedIn = data.linkedIn

        const userProfile = {
            name,
            email,
            phone,
            education,
            address,
            linkedIn
        }

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(result => {
                reset()
                toast.success('Profile Updated!')
                refetch();
            })
    }

    return (
        <div className='max-w-7xl mx-auto mb-24'>
            <h2 className='text-2xl font-bold text-primary mb-5 mt-10 text-center'>My Profile</h2>
            <div className="hero w-full">
                <div className="hero-content flex-col lg:flex-row">

                    {/* User Info */}
                    <div className="text-center lg:text-left">
                        <div className="card lg:max-w-lg md:w-96 lg:w-96 w-64 shadow-xl mx-2 bg-base-100">
                            <div className="card-body text-center">
                                <h2 className="text-xl"><span className='font-medium'>Name: </span>{user?.displayName}</h2>
                                <p className='text-xl my-2'><span className='font-medium'>Email: </span>{user?.email}</p>
                                <p className='text-xl my-2'><span className='font-medium'>Address: </span>{profile?.address}</p>
                                <p className='text-xl my-2'><span className='font-medium'>Education: </span>{profile?.education}</p>
                                <p className='text-xl my-2'><span className='font-medium'>LinkedIn: </span>{profile?.linkedIn}</p>
                                <p className='text-xl my-2'><span className='font-medium'>Phone no: </span>{profile?.phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Update Info */}
                    <div className="card flex-shrink-0 max-w-sm shadow-xl bg-base-100 ">
                        <div className="card-body py-5">
                            <h2 className="text-2xl font-semibold text-primary mb-2">Update Info</h2>

                            {/* Form */}
                            <form className='my-3 lg:w-full md:w-full w-56 lg:mx-0 mx-auto' onSubmit={handleSubmit(onSubmit)}>
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
                                    className='w-full input input-bordered mb-2'
                                    placeholder="Address"
                                    type="text" {...register("address")}
                                    required />
                                <textarea
                                    className='textarea input-bordered w-full max-w-md'
                                    placeholder='Education'
                                    rows={3}
                                    type="text" {...register("education")}
                                ></textarea>
                                <input
                                    className='w-full input input-bordered mb-2'
                                    placeholder="LinkedIn URL"
                                    type="text" {...register("linkedIn")}
                                    required />
                                <input
                                    className='input input-bordered w-full mb-2'
                                    placeholder="Phone Number"
                                    type="number" {...register("phone")}
                                    required />
                                <input
                                    className='btn btn-primary block mx-auto'
                                    type="submit"
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

export default MyProfile;
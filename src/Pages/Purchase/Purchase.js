import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { partsId } = useParams();
    const [eachParts, setEachParts] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEachParts(data));
    }, [])

    return (
        <div className='max-w-7xl mx-auto mb-24'>
            <h2 className="text-4xl font-bold text-error text-center my-8">Purchase</h2>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left ">
                        <div className="card lg:max-w-lg md:w-96 lg:w-96 w-96 shadow-2xl mx-2">
                            <figure><img src={eachParts.img} className='h-64 p-6' alt="parts" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold">{eachParts.name}</h2>
                                <p className='text-xl my-2'>Price: ${eachParts.price}</p>
                                <p>{eachParts.description}</p>
                                <p className='text-lg text-neutral'>Available Quantity: <span className='text-xl font-medium'>{eachParts.availableQuantity}</span></p>
                                <p className='text-lg text-neutral my-1'>Minimum Purchase Quantity: <input className='input input-bordered w-32 text-xl font-medium' type="number" value={eachParts.minQuantity} /></p>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 text-center">
                        <div class="card-body">
                            <form className='my-3 lg:w-full md:w-full w-80 lg:mx-0 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                <input className='input input-bordered w-full mb-2' placeholder="Your Name" {...register("name", { required: true, maxLength: 20 })} value />
                                <input className='input input-bordered w-full mb-2' placeholder="Email Address" {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                                <input className='input input-bordered w-full mb-2' placeholder="Phone no" type="number" {...register("phone", { min: 18, max: 99 })} />
                                <textarea className='h-32 w-full input input-bordered mb-2' placeholder="Address" type="text" {...register("address", { min: 18, max: 99 })} />
                                <input className='btn btn-outline btn-error block mx-auto' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
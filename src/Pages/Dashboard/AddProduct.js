import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        // console.log(data)
        const product = {
            name: data.name,
            price: data.price,
            description: data.description,
            img: data.image,
            minQuantity: data.minQuantity,
            availableQuantity: data.availableQuantity
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product has been added successfully!');
                    reset();
                }
            })

    }

    return (
        <div className='grid justify-items-center content-center mt-5 lg:ml-[-200px]'>
            <h2 className='text-2xl font-bold text-primary my-5'>Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Product Name */}
                <div className="form-control w-72 max-w-xs ">
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs mb-3"
                        {...register("name")} />

                    {/* Description */}
                    <textarea className='textarea input-bordered w-full max-w-xs mb-3'
                        placeholder='Product Description'
                        rows={4}
                        required
                        {...register("description")}>
                    </textarea>

                    {/* Price */}
                    <input
                        type="number"
                        placeholder="Price"
                        min="0"
                        className="input input-bordered w-full max-w-xs mb-3"
                        required
                        {...register("price")} />

                    {/* Photo */}
                    <input
                        type="text"
                        placeholder="Product Image URL"
                        className="input input-bordered w-full max-w-xs mb-3"
                        required
                        {...register("image")} />

                    {/* Minimum Order */}
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs mb-3"
                        required
                        {...register("minQuantity")} />

                    {/* Available Quantity */}
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs mb-3"
                        required
                        {...register("availableQuantity")} />

                    <div className="flex justify-center">
                        <input className='btn btn-primary w-24 max-w-xs' type="submit" value="Add" />
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddProduct;
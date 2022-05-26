import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        // console.log(data)
        const review = {
            name: user?.displayName,
            userReview: data.userReview,
            rating: data.rating,
            image: data.image
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Your review has been added successfully!');
                    reset();
                }
            })

    }

    return (
        <div className='grid justify-items-center content-center mt-5 lg:ml-[-200px]'>
            <h2 className='text-2xl font-bold text-primary my-5'>Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div className="form-control w-72 max-w-xs ">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs mb-3"
                        value={user?.displayName || ""}
                        disabled />


                    {/* Review */}

                    <textarea className='textarea input-bordered w-full max-w-xs mb-3'
                        placeholder='Your Review'
                        rows={4}
                        required
                        {...register("userReview")}>
                    </textarea>

                    {/* Ratings */}
                    <input
                        type="number"
                        min="1"
                        max="5"
                        placeholder="Your Rating"
                        className="input input-bordered w-full max-w-xs mb-3"
                        required
                        {...register("rating")} />

                    {/* Photo */}
                    <input
                        type="text"
                        placeholder="Your Photo URL"
                        className="input input-bordered w-full max-w-xs mb-3"
                        required
                        {...register("image")} />
                    <div className="flex justify-center">
                        <input className='btn btn-primary w-24 max-w-xs' type="submit" value="Add" />
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddReview;
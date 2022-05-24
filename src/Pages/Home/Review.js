import React from 'react';

const Review = ({ review }) => {
    const { name, picture, post, ratings } = review
    return (
        <div>
            <div className="card h-full lg:max-w-lg bg-base-100 shadow-xl py-5 px-3">
                <img src={picture} className='w-32 rounded-full ring ring-error ring-offset-base-100 mx-auto' alt="review" />
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-neutral">{name}</h2>
                    <p className='my-2'>{post}</p>
                    <p className='text-xl'>Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
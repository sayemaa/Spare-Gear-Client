import React from 'react';

const Review = ({ review }) => {
    const { name, image, userReview, rating } = review
    return (
        <div>
            <div className="card h-full lg:max-w-lg bg-base-100 shadow-xl py-5 px-3">
                <img src={image} className='w-32 rounded-full ring ring-secondary ring-offset-base-100 mx-auto' alt="review" />
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-primary">{name}</h2>
                    <p className='my-2'>{userReview}</p>
                    <p className='text-xl font-medium'>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
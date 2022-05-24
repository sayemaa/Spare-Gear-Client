import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl text-neutral text-center mb-10 mt-20">Testimonials</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;
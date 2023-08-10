import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://spare-gear-server.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='mb-32  max-w-7xl mx-auto px-6' >
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-accent font-bold mb-3">Testimonials</h4>
                    <h2 className='text-3xl text-secondary'>What Our Customer Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </section >
    );
};

export default Reviews;
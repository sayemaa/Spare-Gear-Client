import React from 'react';
import customer from '../../assets/icons/customer.svg'
import revenue from '../../assets/icons/revenue.svg'
import review from '../../assets/icons/review.svg'

const BusinessSummary = () => {
    return (
        <div className='mt-32 mb-32'>
            <div className='text-center mb-14'>
                <h4 className="text-xl text-accent font-bold mb-3">Business Summary</h4>
                <h2 className='text-3xl text-secondary'>We Have Served</h2>
            </div>
            <div className='max-w-6xl mx-auto lg:w-full w-80'>
                <div className="stats stats-vertical lg:stats-horizontal shadow-lg flex-col justify-around mx-auto px-12 container text-center">
                    <div className="stat text-center">
                        <img src={customer} className="w-56" alt="" />
                        <div className="stat-value">100+</div>
                        <div className="text-secondary font-semibold">Customers</div>
                    </div>

                    <div className="stat">
                        <img src={revenue} className="w-56" alt="" />
                        <div className="stat-value">120M+</div>
                        <div className="text-secondary font-semibold">Annual Revenue</div>
                    </div>

                    <div className="stat">
                        <img src={review} className="w-40" alt="" />
                        <div className="stat-value">33K+</div>
                        <div className="text-secondary font-semibold">Reviews</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// className="stats stats-vertical lg:stats-horizontal shadow container max-w-6xl mx-auto my-10 mt-40 text-center flex-col justify-center"

export default BusinessSummary;
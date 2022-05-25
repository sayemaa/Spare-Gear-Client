import React from 'react';
import customer from '../../assets/icons/customer.svg'
import revenue from '../../assets/icons/revenue.svg'
import reviews from '../../assets/icons/reviews.svg'

const BusinessSummary = () => {
    return (
        <div className='my-10 mt-40'>
            <h2 className="text-4xl mb-12 text-primary text-center">Business Summary</h2>
            <div className='max-w-6xl mx-auto lg:w-full w-80'>
                <div class="stats stats-vertical lg:stats-horizontal shadow-lg flex-col justify-around mx-auto px-12 container text-center">
                    <div class="stat text-center">
                        <img src={customer} className="w-56" alt="" />
                        <div class="stat-value">100+</div>
                        <div class="text-secondary font-semibold">Customers</div>
                    </div>

                    <div class="stat">
                        <img src={revenue} className="w-56" alt="" />
                        <div class="stat-value">120M+</div>
                        <div class="text-secondary font-semibold">Annual Revenue</div>
                    </div>

                    <div class="stat">
                        <img src={reviews} className="w-56" alt="" />
                        <div class="stat-value">33K+</div>
                        <div class="text-secondary font-semibold">Reviews</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// class="stats stats-vertical lg:stats-horizontal shadow container max-w-6xl mx-auto my-10 mt-40 text-center flex-col justify-center"

export default BusinessSummary;
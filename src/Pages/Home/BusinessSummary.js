import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faQuoteLeft, faSackDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h2 className="text-4xl text-error text-center mb-10">We have Served</h2>
            <div className="hero">
                <div className="hero-content text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    <div className="max-w-md">
                        <FontAwesomeIcon className='h-14' icon={faUsers} />
                        <h1 className="text-4xl font-semibold mb-3 mt-5">100+</h1>
                        <h1 className="text-xl text-error">Customers</h1>
                    </div>
                    <div className="max-w-md">
                        <FontAwesomeIcon className='h-14' icon={faSackDollar} />
                        <h1 className="text-4xl font-semibold mb-3 mt-5">120M+</h1>
                        <h1 className="text-xl text-error">Annual Revenue</h1>
                    </div>
                    <div className="max-w-md">
                        <FontAwesomeIcon className='h-14' icon={faQuoteLeft} />
                        <h1 className="text-4xl font-semibold mb-3 mt-5">33K+</h1>
                        <h1 className="text-xl text-error">Reviews</h1>
                    </div>
                    <div className="max-w-md">
                        <FontAwesomeIcon className='h-14' icon={faGear} />
                        <h1 className="text-4xl font-semibold mb-3 mt-5">50+</h1>
                        <h1 className="text-xl text-error">Tools</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
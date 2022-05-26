import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import ExceptionalParts from './ExceptionalParts';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummary />
            <ExceptionalParts />
            <Reviews />
            <ContactUs />
        </div>
    );
};

export default Home;
import React from 'react';
import notFound from '../../assets/404/404.svg'

const NotFound = () => {
    return (
        <div className='max-w-7xl h-screen mx-auto container text-center mt-3'>
            <div className='max-w-md mx-auto'>
                <img src={notFound} alt="" />
            </div>
            <div className='w-80 mx-auto lg:w-full'>
                <p className='text-2xl my-1'>Opps! Page not found</p>
                <p>Sorry, the page you requested could not be found.</p>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import myImage from '../../assets/images/person.png'

const Portfolio = () => {
    return (
        <div className='max-w-7xl mx-auto mb-24 h-screen mt-8'>
            {/* <h2 className="text-4xl font-bold text-primary text-center my-8">Welcome to my Portfolio</h2> */}

            <div className="hero bg-base-100 mt-16 lg:mt-0 max-w-7xl mx-auto px-6 mb-32">
                <div className="hero-content flex-col">
                    <img src={myImage} className="max-w-sm rounded-lg w-full" />
                    <div className='lg:mx-16 text-center'>
                        <h1 className="text-2xl font-semibold lg:text-5xl py-6">Sayema Akhtar</h1>
                        <p className='text-xl'>Email: sayema990@gmail.com</p>
                        <p className='text-lg'>Email: sayema990@gmail.com</p>
                        <p className="py-6">When your motor bike is not performing well and needs an upgrade, then replacing parts might be the solution. That's where Spare Gear comes in. We not only provide parts of a motor bike, but also we will help you install them. So without further ado, check out our collection.</p>
                        <button className='btn btn-primary'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

//  lg:flex-row
export default Portfolio;
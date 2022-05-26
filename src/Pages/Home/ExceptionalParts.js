import React from 'react';
import { useNavigate } from 'react-router-dom';
import parts from '../../assets/images/image.png'

const ExceptionalParts = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/allParts');
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className="hero bg-base-100 min-h-screen mt-16 lg:mt-0 max-w-7xl mx-auto px-6 mb-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div className='lg:mx-16'>
                        <h1 className="text-5xl font-bold lg:text-7xl">Exceptional Motor Bike Parts</h1>
                        <p className="py-6">When your motor bike is not performing well and needs an upgrade, then replacing parts might be the solution. That's where Spare Gear comes in. We not only provide parts of a motor bike, but also we will help you install them. So without further ado, check out our collection.</p>
                        <button onClick={handleExplore} className='btn btn-primary'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalParts;
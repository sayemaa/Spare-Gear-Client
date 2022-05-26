import React from 'react';
import useParts from '../../hooks/useParts';
import PartsCard from '../Home/PartsCard';

const AllParts = () => {
    const [products] = useParts();

    return (
        <div>
            <h2 className="text-4xl mb-12 font-bold text-primary text-center mt-8">Parts Collection</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl px-6 mb-40">
                {
                    products?.map(product => <PartsCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default AllParts;
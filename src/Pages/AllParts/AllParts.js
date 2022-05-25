import React from 'react';
import { useQuery } from 'react-query';
import PartsCard from '../Home/PartsCard';
import Loading from '../Shared/Loading';

const AllParts = () => {

    const { data: partsCollection, isLoading } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-4xl mb-12 font-bold text-primary text-center mt-8">Parts Collection</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl px-6 mb-40">
                {
                    partsCollection?.map(parts => <PartsCard
                        key={parts._id}
                        parts={parts}
                    />)
                }
            </div>
        </div>
    );
};

export default AllParts;
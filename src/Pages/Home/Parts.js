import React from 'react';
import { useQuery } from 'react-query'
import PartsCard from './PartsCard';
import Loading from '../Shared/Loading';


const Parts = () => {
    const { data: partsCollection, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-4xl mb-12 text-primary text-center mt-20">Parts Collection</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl px-6">
                {
                    partsCollection?.slice(0, 3).map(parts => <PartsCard
                        key={parts._id}
                        parts={parts}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>


    );
};

export default Parts;
import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const Parts = () => {
    const [partsCollection, setPartsCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setPartsCollection(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl mb-12 text-primary text-center mt-20">Parts Collection</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl px-6">
                {
                    partsCollection.slice(0, 3).map(parts => <PartsCard
                        key={parts._id}
                        parts={parts}
                    />)
                }
            </div>
        </div>


    );
};

export default Parts;
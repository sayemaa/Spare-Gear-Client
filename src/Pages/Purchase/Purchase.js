import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partsId } = useParams();
    const [eachParts, setEachParts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEachParts(data));
    }, [])

    return (
        <div>
            <h2>Purchase: {eachParts.name}</h2>
            <div>

            </div>
        </div>
    );
};

export default Purchase;
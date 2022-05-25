import React from 'react';
import { useQuery } from 'react-query'
import PartsCard from './PartsCard';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Parts = () => {
    const navigate = useNavigate();
    const { data: partsCollection, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    const handleSeeMore = () => {
        navigate('/allParts');
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <h2 className="text-4xl mb-12 text-primary text-center mt-20">Parts Collection</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl px-6">
                {
                    partsCollection?.map(parts => <PartsCard
                        key={parts._id}
                        parts={parts}
                        refetch={refetch}
                    />).reverse().slice(0, 3)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <button onClick={handleSeeMore} className="btn btn-ghost text-lg text-primary font-semibold mt-5">See more<FontAwesomeIcon className='px-2' icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div >


    );
};

export default Parts;
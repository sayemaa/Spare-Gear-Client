import React from 'react';
import bg from '../../assets/bg/bg.png'

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className='px-10 py-14 mt-32'>

            <div className='text-center pb-8'>
                <h3 className='text-xl text-accent font-bold mb-4'>Contact Us</h3>
                <h2 className='text-3xl text-white text-bold mb-5'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className='btn btn-primary text-white'>Submit</button>
            </div>
        </section >
    );
};

export default ContactUs;
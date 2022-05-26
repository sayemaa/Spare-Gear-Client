import React from 'react';
import myImage from '../../assets/images/person.png'

const Portfolio = () => {
    return (
        <div className='max-w-7xl mx-auto mb-24 mt-8'>
            <div className="hero bg-base-100 mt-16 lg:mt-0 max-w-7xl mx-auto px-6 mb-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myImage} className="max-w-sm rounded-lg w-full" alt="img" />
                    <div className='lg:mx-16'>
                        <h1 className="text-2xl font-semibold lg:text-5xl py-4 text-primary">Sayema Akhtar</h1>
                        <p className='text-xl mb-5'><span className='font-medium text-primary'>Email: </span> sayema990@gmail.com</p>
                        <h4 className='text-xl my-2 font-medium text-primary'>Educational Background:</h4>
                        <p className='text-lg'>
                            B.Sc. in Computer Science & Engineering <br /> East Delta University, Chittagong
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center max-w-2xl mx-auto'>
                <p className='text-lg my-4 mb-10'><span className='font-medium text-2xl text-primary'>List of Skills</span>
                    <div className='text-left mt-5'>
                        <li>Expertise: HTML5, CSS3, JavaScript, C, ES6, React, React Router, React Hook, Bootstrap, Tailwind.</li>
                        <li>Comfortable: Node.js, MongoDB, Express.js.</li>
                        <li>Tools: VS Code, GitHub, Heroku, Netlify, Firebase, Figma, Postman.</li>
                    </div>
                </p>

                <p className='my-10'><span className='text-2xl font-medium text-primary'>Projects</span>
                    <div className='text-left mt-5'>
                        <li><a className='text-accent' target="_blank" href="https://warehouse-management-web-79467.web.app/">Fragrance</a></li>
                        <li><a className='text-accent' target="_blank" href="https://to-do-app-8d863.web.app/">To-Do App</a></li>
                        <li><a className='text-accent' target="_blank" href="https://dental-service-f0546.web.app/">inDent</a></li>

                    </div>
                </p>
            </div>
        </div>
    );
};

//  
export default Portfolio;
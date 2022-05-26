import React from 'react';

const Blogs = () => {
    return (
        <div className='h-screen mb-24'>
            <h2 className="text-4xl font-bold text-primary text-center my-8">Frequently asked Questions</h2>
            <div className='lg:max-w-6xl md:max-w-2xl max-w-xs mx-auto'>
                <div tabindex="1" className="rounded-t-xl collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <li>Memorizing React components to avoid undesired re-renders.</li>
                            <li>Keeping component state local when it's needed.</li>
                            <li>React code splitting with dynamic import ().</li>
                            <li>Ensuring components only get the props they require.</li>
                        </p>
                    </div>
                </div>
                <div tabindex="2" className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>In a React application, there are four ways to manage a state.
                            <li>The data we handle in one or more components is referred to as local state.</li>
                            <li>Data that we handle across various components called global state.</li>
                            <li>Data from an external server that must be merged with our UI state is called server state.</li>
                            <li>Finally, Information found on our URLs, such as pathname and query parameters.</li>
                        </p>
                    </div>
                </div>
                <div tabindex="3" className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>Prototype inheritance is the ability to access object properties from another object. We use a JavaScript prototype to add additional properties and methods to an existing object constructor. In this method, we can tell our JS code to inherit attributes from a prototype. Prototypical inheritance allows us to reuse attributes or functions from one JavaScript object to another by using a reference pointer function.
                        </p>
                    </div>
                </div>
                <div tabindex="4" className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </div>
                    <div className="collapse-content">
                        <p>If you update the state directly, executing setState() afterward may only overwrite the update you did, and later when you want to update the state, it does not do so instantly.</p>
                    </div>
                </div>
                <div tabindex="5" className="rounded-b-xl collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>Unit tests are automated tests to ensure that a component of an application (referred to as a "unit") meets its design specifications and performs as intended.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
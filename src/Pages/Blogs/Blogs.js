import React from 'react';

const Blogs = () => {
    return (
        <div className='h-screen mb-24'>
            <h2 className="text-4xl font-bold text-primary text-center my-8">Blogs</h2>
            <div className='lg:max-w-6xl md:max-w-2xl max-w-xs mx-auto'>
                <div tabindex="1" class="rounded-t-xl collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="2" class="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="3" class="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="4" class="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="5" class="rounded-b-xl collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
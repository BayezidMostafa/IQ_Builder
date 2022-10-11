import React from 'react';

const Blog = () => {
    return (
        <div>
            <h5 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-5' style={{textShadow: '1px 1px 3px black'}}>You Are In Q&A Section!</h5>
            <div className='flex justify-evenly mt-10 container mx-auto'>
                <div className='border'>
                    <p>What is the purpose of React Router?</p>
                    
                </div>
                <div className='border'>
                    <p>How does context API works?</p>
                </div>
                <div className='border'>
                    <p>WHat is useRef() hook?</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../banner-image.jpg'

const HeaderBanner = () => {
    return (
        <div className='container mx-auto md:flex my-20 items-center'>
            <div className='w-full'>
                <h3 className='text-2xl mx-2 md:mx-5 md:text-4xl font-bold'><span className='text-orange-500'>Hi There!</span><br className='' /> Love To Programming?<br />
                    Let's Warm Out Your Brain With Some Short Quiz!</h3>
                    <Link><button className='py-3 px-10 bg-violet-900 text-white mt-10 rounded-md'>GET STARTED</button></Link>
            </div>
            <div className='rounded-2xl bg-violet-900 mt-10 md:m-0 p-3 drop-shadow-lg w-3/4 md:w-full mx-auto'>
                <img className='shadow-2xl rounded-lg drop-shadow-lg' src={Banner} alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Nav } from '../Nav/Nav';


const ErrorPage = () => {
    return (
        <div>
            <Nav/>
            <div className='flex flex-col justify-center items-center min-h-screen bg-violet-800 '>
                <div className='bg-gray-100 drop-shadow-2xl w-2/6 p-10 rounded-2xl'>
                    <p className='text-9xl text-red-600 font-bold flex flex-row justify-center'>4<FaceFrownIcon className='w-36 inline' />4</p>
                    <p className='text-xl '>Aaah! You See! You Are Getting In A Wrong Path!</p>
                    <p className='text-2xl'>You Should Go Back To The <Link className='underline text-violet-900' to='/'>Home Page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
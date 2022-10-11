import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    return (
        <div className='bg-violet-900 m-auto p-5 rounded-2xl text-white shadow-black shadow'>
            <img className='rounded-2xl shadow shadow-black' src={logo} alt="" />
            <p className='text-2xl font-semibold pt-3'>Topic: {name}</p>
            <p className='text-xl my-1'>Total: {total}</p>
            <div className='flex justify-center'>
                <Link to={`/quiz/${id}`}><button className='bg-white text-black py-2 px-4 rounded-lg font-bold mt-3 hover:bg-gray-200 flex items-center shadow-black shadow'>START NOW<CheckIcon className='w-4 ml-2' /></button></Link>
            </div>
        </div>
    );
};

export default Quiz;
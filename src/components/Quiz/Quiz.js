import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    console.log(quiz)
    return (
        <div className='bg-violet-900 m-auto p-5 rounded-2xl text-white shadow drop-shadow-xl'>
            <img className='rounded-2xl border-2 ' src={logo} alt="" />
            <p className='text-2xl font-semibold pt-3'>Topic: {name}</p>
            <p className='text-xl my-1'>Total: {total}</p>
            <div className='flex justify-center'>
                <button className='bg-white text-black py-2 px-4 rounded-lg font-bold mt-3 hover:bg-gray-200 flex items-center'>START NOW<CheckIcon className='w-4 ml-2' /></button>
            </div>
        </div>
    );
};

export default Quiz;
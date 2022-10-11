import React from 'react';

const Question = ({ singleQuestion }) => {
    const { question, id } = singleQuestion;
    console.log(singleQuestion)
    return (
        <div className='border'>
            <div>
                <p className='text-xl'>{question}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Question;
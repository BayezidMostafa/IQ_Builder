import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData()
    const {name, questions} = quizDetails.data
    return (
        <div className='my-14'>
            <p className='text-xl md:text-2xl xl:text-3xl lg:text-4xl font-bold border w-2/5 mx-auto py-5 rounded-xl shadow shadow-gray-400'>You Are In <span className='text-violet-900'>{name}</span> Quiz Section! You Can Do It!</p>
            <div>
                {
                    questions.map(singleQuestion => <Question key={singleQuestion.id} singleQuestion={singleQuestion}/>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;
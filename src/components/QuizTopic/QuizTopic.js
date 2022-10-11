import React, { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import { QuizContext } from '../Roots/Roots';

const QuizTopic = () => {
    const quizTopic = useContext(QuizContext);
    return (
        <div>
            <p className='text-4xl font-bold'>Here I Got Some Quiz Topics For You!</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 container mx-auto my-20 w-3/4 md:w-full'>
                {
                    quizTopic.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}/>)
                }
            </div>
        </div>
    );
};

export default QuizTopic;
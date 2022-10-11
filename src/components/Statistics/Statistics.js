import React, { useContext } from 'react';
import { QuizContext } from '../Roots/Roots';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const chartData = useContext(QuizContext)
    const data = chartData.data;
    return (
        <div>
            <h4>This is Statistics</h4>
            <LineChart width={1000} height={400} data={data} >
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Statistics;
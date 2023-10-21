import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Performance = (props) => {
    const { data } = props;

    return (
        <ResponsiveContainer>
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" name="Share Price" stroke="#5a287d" strokeWidth="3" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Performance
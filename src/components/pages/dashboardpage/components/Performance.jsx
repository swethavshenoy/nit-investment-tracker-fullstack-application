import React from 'react'
// import { LineChart } from '@mui/x-charts/LineChart';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Performance = () => {
    const data = [
        { Month: 'Jan', SharePrice: 5000 },
        { Month: 'Feb', SharePrice: 1000 },
        { Month: 'Mar', SharePrice: 10000 },
        { Month: 'Apr', SharePrice: 20000 },
        { Month: 'May', SharePrice: 2500.50 },
        { Month: 'Jun', SharePrice: 24000 },
        { Month: 'Jul', SharePrice: 3211 },
        { Month: 'Aug', SharePrice: 7656 },
        { Month: 'Sep', SharePrice: 4233.85 },
        { Month: 'Oct', SharePrice: 43255.67 },
        { Month: 'Nov', SharePrice: 34543 },
        { Month: 'Dec', SharePrice: 12343 },
    ];
    return (
        // <LineChart
        //     xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        //     series={[
        //         {
        //             data: [2, 5.5, 2, 8.5, 1.5, 5],
        //             area: true,
        //         },
        //     ]}
        //     sx={{
        //         '& .MuiLineElement-root': {
        //             strokeWidth: 4,
        //             fill: "#5a287d",
        //             stroke: "#646068",
        //         },
        //     }}
        //     height={500}
        // />
        <ResponsiveContainer>
            <LineChart data={data}>
                <XAxis dataKey="Month" />
                <YAxis dataKey="SharePrice" />
                {/* <CartesianGrid vertical={false} /> */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="SharePrice" name="Share Price" stroke="#5a287d" strokeWidth="3" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Performance
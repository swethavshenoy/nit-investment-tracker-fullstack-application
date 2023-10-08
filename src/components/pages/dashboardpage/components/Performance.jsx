import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const Performance = () => {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                },
            ]}
            sx={{
                '& .MuiLineElement-root': {
                    strokeWidth: 4,
                    fill: "#5a287d",
                    stroke: "#646068",
                },
            }}
            height={500}
        />
    )
}

export default Performance
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const data = [
    { name: 'Returnable', value: 400 },
    { name: 'Non-returnable', value: 300 },
];

const COLORS = ['#6b03a8', '#c50aff'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const PieCharts = () => {
    return (
        <div className='p-5 h-max border flex flex-col items-center border-[#ffffff10] rounded-md bg-[#ffffff03] text-white'> 
            <h3 className='uppercase text-center text-sm text-[#a8a7a7] font-raleway'>returnable and non-returnable items comparison</h3>
            <div className='w-[220px] h-[300px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend></Legend>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default PieCharts;
import React, { useContext } from "react";
import {Bar,BarChart,CartesianGrid,Legend,Line,LineChart,Pie,PieChart,Tooltip,XAxis,YAxis,
} from "recharts";
const data = [
    {
        name: 'START',
        uv: 0,
    },
    {
        name: 'HTML',
        uv: 6,
    },
    {
        name: 'CSS',
        uv: 7,
    },
    {
        name: 'JS',
        uv: 5,
    },
    {
        name: 'REACT JS',
        uv: 4,
    },
    {
        name: 'GIT',
        uv: 8,
    },
    {
        name: 'BOOTSTRAP',
        uv: 10,
    },
    {
        name: 'TAILWIND',
        uv: 10,
    },
];
const Statistics = () => {
  return (
    <div className="md:mt-25 sm:mt-25">
      <div className="justify-center items-center flex md:mt-20 sm:mt-20">
      <LineChart className='text-1xl'
            width={600}
            height={250}
            data={data}
            margin={{top: 30,right: 10,left: 20,bottom: 5,}}
        >
            <CartesianGrid strokeDasharray="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line className=' border-4 border-red-600' type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

      </div>
    </div>
  );
};

export default Statistics;

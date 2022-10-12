import React, { useContext } from "react";
import {Bar,BarChart,CartesianGrid,Legend,Line,LineChart,Pie,PieChart,Tooltip,XAxis,YAxis,
} from "recharts";
import { CodeContext } from "../Root/Root";
const data = [
    {
        name: 'start',
        uv: 0,
    },
    {
        name: 'React',
        uv: 8,
    },
    {
        name: 'Java script',
        uv: 9,
    },
    {
        name: 'CSS',
        uv: 12,
    },
    {
        name: 'GIT',
        uv: 15,
    },
    {
        name: 'BOOTSTRAP',
        uv: 18,
    },
    {
        name: 'tAILWIND',
        uv: 23,
    },
    {
        name: 'OTHER',
        uv: 34,
    },
];
const Statistics = () => {
  const data = useContext(CodeContext);

  return (
    <div>
      <div className="flex justify-center items-center my-12">
        <LineChart
          width={350}
          height={250}
          data={data}
          margin={{ top: 30, right: 5, bottom: 0, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <Line type="monotone" dataKey="name" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <XAxis dataKey="total" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;

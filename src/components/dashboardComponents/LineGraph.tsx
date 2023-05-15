import React from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

interface GraphData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

interface LineGraphProps {
  graphData: GraphData;
}

const LineGraph: React.FC<LineGraphProps> = ({ graphData }) => {
  const formatGraphData = () => {
    const { cases, deaths, recovered } = graphData;

    const formattedData: {
      name: string;
      cases: number;
      deaths: number;
      recovered: number;
    }[] = [];

    for (const date in cases) {
      const formattedDate = new Date(date).toLocaleDateString();

      formattedData.push({
        name: formattedDate,
        cases: cases[date],
        deaths: deaths[date],
        recovered: recovered[date],
      });
    }

    return formattedData;
  };

  const formattedData = formatGraphData();

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={formattedData}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="cases"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="deaths"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="recovered"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;

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

// Define the shape of the graph data
interface GraphData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

// Define the props for the LineGraph component
interface LineGraphProps {
  graphData: GraphData;
}

const LineGraph: React.FC<LineGraphProps> = ({ graphData }) => {
  // Function to format the graph data into the required format for Recharts LineChart
  const formatGraphData = () => {
    const { cases, deaths, recovered } = graphData;

    // Create an array to hold the formatted data
    const formattedData: {
      name: string;
      cases: number;
      deaths: number;
      recovered: number;
    }[] = [];

    // Loop through the dates in the cases data and format the data
    for (const date in cases) {
      const formattedDate = new Date(date).toLocaleDateString();

      // Push the formatted data to the array
      formattedData.push({
        name: formattedDate,
        cases: cases[date],
        deaths: deaths[date],
        recovered: recovered[date],
      });
    }

    return formattedData;
  };

  // Format the graph data
  const formattedData = formatGraphData();

  return (
    <div className="min-h-screen flex justify-center items-center md:flex ">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={formattedData}
          width={1200}
          height={1000}
          margin={{ top: 20, right: 100, left: 40, bottom: 5 }}
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

import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import LineGraph from "./LineGraph";
import Map from "../dashboardComponents/Map";
import {
  fetchWorldwideData,
  fetchCountryData,
  fetchGraphData,
} from "../dashboardComponents/Api";

const queryClient = new QueryClient(); // Create a new instance of QueryClient

const Dashboard: React.FC = () => {
  // Use useQuery to fetch worldwideData, countryData, and graphData
  const worldwideDataQuery = useQuery("worldwideData", fetchWorldwideData);
  const countryDataQuery = useQuery("countryData", fetchCountryData);
  const graphDataQuery = useQuery("graphData", fetchGraphData);

  // If any of the queries are still loading, display a loading message
  if (
    worldwideDataQuery.isLoading ||
    countryDataQuery.isLoading ||
    graphDataQuery.isLoading
  ) {
    return <div>Loading...</div>;
  }

  // If any of the queries encountered an error, display an error message
  if (
    worldwideDataQuery.isError ||
    countryDataQuery.isError ||
    graphDataQuery.isError
  ) {
    return <div>Error occurred while fetching data.</div>;
  }

  // Render the dashboard with the fetched data
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
          COVID-19 Dashboard
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {/* Pass the graphData to the LineGraph component */}
          <LineGraph graphData={graphDataQuery.data} />
          {/* Pass the worldwideData and countryData to the Map component */}
          <Map
            worldwideData={worldwideDataQuery.data}
            countryData={countryDataQuery.data}
          />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Dashboard;

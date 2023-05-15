import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import LineGraph from "./LineGraph";
import Map from "../dashboardComponents/Map";


const queryClient = new QueryClient();

const fetchWorldwideData = async () => {
  try {
    const response = await axios.get("https://disease.sh/v3/covid-19/all");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch worldwide data");
  }
};

const fetchCountryData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch country data");
  }
};

const fetchGraphData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data = response.data;
    console.log(data); // Log the fetched data
    return data;
  } catch (error) {
    throw new Error("Failed to fetch graph data");
  }
};

const Dashboard: React.FC = () => {
  const worldwideDataQuery = useQuery("worldwideData", fetchWorldwideData);
  const countryDataQuery = useQuery("countryData", fetchCountryData);
  const graphDataQuery = useQuery("graphData", fetchGraphData);

  if (
    worldwideDataQuery.isLoading ||
    countryDataQuery.isLoading ||
    graphDataQuery.isLoading
  ) {
    return <div>Loading...</div>;
  }

  if (
    worldwideDataQuery.isError ||
    countryDataQuery.isError ||
    graphDataQuery.isError
  ) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <LineGraph graphData={graphDataQuery.data} />
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

import axios from "axios";

// Function to fetch worldwide COVID-19 data
export const fetchWorldwideData = async () => {
  try {
    const response = await axios.get("https://disease.sh/v3/covid-19/all");
    return response.data; // Return the fetched data
  } catch (error) {
    throw new Error("Failed to fetch worldwide data");
  }
};

// Function to fetch COVID-19 data for all countries
export const fetchCountryData = async () => {
  try {
    const response = await axios.get("https://disease.sh/v3/covid-19/countries");
    return response.data; // Return the fetched data
  } catch (error) {
    throw new Error("Failed to fetch country data");
  }
};

// Function to fetch COVID-19 historical graph data
export const fetchGraphData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data = response.data;
    console.log(data); // Log the fetched data
    return data; // Return the fetched data
  } catch (error) {
    throw new Error("Failed to fetch graph data");
  }
};

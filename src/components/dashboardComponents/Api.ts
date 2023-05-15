import axios from "axios";

export const fetchWorldwideData = async () => {
  try {
    const response = await axios.get("https://disease.sh/v3/covid-19/all");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch worldwide data");
  }
};

export const fetchCountryData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch country data");
  }
};

export const fetchGraphData = async () => {
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

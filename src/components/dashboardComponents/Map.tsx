import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from "../../assets/marker.png";

interface WorldwideData {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
}

interface MapProps {
  worldwideData: WorldwideData;
  countryData: CountryData[];
}

const Map: React.FC<MapProps> = ({ worldwideData, countryData }) => {
  const defaultCenter: [number, number] = [0, 0];
  const defaultZoom = 2;

  return (
    // Commenting out the div for now
    // <div className="h-screen md:h-screen md:flex flex-col sm:min-h-screen sm:min-h-screen">
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copy‌​right">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countryData.map((country) => {
        const countryIcon = new L.Icon({
          iconUrl: marker,
          iconSize: [20, 20],
          iconAnchor: [12, 41],
          popupAnchor: [0, -41],
        });

        return (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={countryIcon}
          >
            <Popup>
              <h3>{country.country}</h3>
              <img src={country.countryInfo.flag} alt="Flag" height="50" />
              <p>Active Cases: {country.active}</p>
              <p>Recovered Cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
    // Commenting out the closing div tag as well
    // </div>
  );
};

export default Map;

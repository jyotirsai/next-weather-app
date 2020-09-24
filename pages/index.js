import { useState, useEffect } from "react";
import Head from "next/head";
import WeatherBox from "./WeatherBox";
import { TextField, Typography } from "@material-ui/core";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);

  // grab users lat and long to initialize weather info
  useEffect(() => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dataFetch(position.coords.latitude, position.coords.longitude);
      }, dataFetch(undefined, undefined, "Edmonton"));
    } else {
      dataFetch(undefined, undefined, "Edmonton");
    }
  }, []);

  // fetch weather data based on users location or entered location
  function dataFetch(latitude, longitude, city) {
    const base_url = `https://api.openweathermap.org/data/2.5/weather?`;
    const api_key = `bac3f7168a13a53749b5aaf75fed3634`;
    latitude = typeof latitude !== "undefined" ? latitude : "";
    longitude = typeof longitude !== "undefined" ? longitude : "";
    city = typeof city !== "undefined" ? city : "";
    if (!city) {
      fetch(
        base_url.concat(
          "lat=",
          latitude,
          "&lon=",
          longitude,
          "&units=metric&appid=",
          api_key
        )
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    } else {
      fetch(base_url.concat("q=", city, "&units=metric&appid=", api_key))
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }

  // detect change in input and set it equal to Location state variable
  function handleChange(event) {
    setLocation(event.target.value);
  }

  // call dataFetch when button is pressed and pass location state variable
  function handleClick(event) {
    if (event.key === "Enter") {
      dataFetch(undefined, undefined, location);
      setLocation("");
      event.persist();
    }
  }

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <Typography variant="h1">Weather App</Typography>
      <TextField
        variant="filled"
        value={location}
        onChange={handleChange}
        onKeyPress={handleClick}
        label="Enter City Name"
        required
        fullWidth
      />
      <WeatherBox weather={weather} />
    </div>
  );
}

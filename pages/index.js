import { useState, useEffect } from "react";
import Head from "next/head";
import Weather from "./weather";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634`
          )
            .then((response) => response.json())
            .then((data_1) => setWeather(data_1.main.temp));
        },
        function () {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Edmonton&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634`
          )
            .then((response) => response.json())
            .then((data_1) => setWeather(data_1.main.temp));
        }
      );
    }
  }, []);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  async function handleClick(event) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634`
    );
    const data = await res.json();
    setWeather(data.main.temp);
    setLocation("");
    event.persist();
  }

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <h1>Weather App</h1>
      <input value={location} onChange={handleChange} />
      <button onClick={handleClick}>Find Weather</button>
      <Weather weather={weather} />
    </div>
  );
}

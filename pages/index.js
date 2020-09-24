import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "@material-ui/core/Card";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      }, backupFetch());
    } else {
      backupFetch();
    }

    function backupFetch() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Edmonton&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
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
    setWeather(data);
    setLocation("");
    event.persist();
  }

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <Card>
        <h1>Weather App</h1>
        <input value={location} onChange={handleChange} />
        <button onClick={handleClick}>Find Weather</button>
        {typeof weather.main != "undefined" ? <h1>{weather.main.temp}</h1> : ""}
      </Card>
    </div>
  );
}

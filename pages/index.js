import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [location, setLocation] = useState("");
  const [saveLocation, setSaveLocation] = useState("");

  function handleChange(event) {
    setLocation(event.target.value);
  }

  async function handleClick() {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Edmonton&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634"
    );
    const data = await res.json();
    setSaveLocation(data.main.temp);
  }

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <h1>Weather App</h1>
      <input value={location} onChange={handleChange} />
      <button onClick={handleClick}>Find Weather</button>
      <p>{saveLocation}</p>
    </div>
  );
}

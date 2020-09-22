import Head from "next/head";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <h1>hello world</h1>
      <p>{data.main.temp}</p>
    </div>
  );
}

// Call this function on every request
export async function getServerSideProps() {
  // fetch data from API
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Edmonton&units=metric&appid=bac3f7168a13a53749b5aaf75fed3634"
  );
  const data = await res.json();

  return { props: { data } };
}

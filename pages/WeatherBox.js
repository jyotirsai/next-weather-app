export default function WeatherBox(props) {
  return (
    <div>
      <h1>Temperature: {props.weather.main.temp}</h1>
    </div>
  );
}

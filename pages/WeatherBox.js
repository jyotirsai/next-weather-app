import { Typography } from "@material-ui/core";

export default function WeatherBox(props) {
  return (
    <div>
      <Typography variant="h2">
        City:{" "}
        {typeof props.weather.name != "undefined" ? props.weather.name : ""}
      </Typography>
      <Typography variant="h2">
        Temperature:{" "}
        {typeof props.weather.main != "undefined"
          ? props.weather.main.temp
          : ""}
        C
      </Typography>
      <Typography variant="h2">
        Humidity:{" "}
        {typeof props.weather.main != "undefined"
          ? props.weather.main.humidity
          : ""}
        %
      </Typography>
      <Typography variant="h2">
        Wind:{" "}
        {typeof props.weather.wind != "undefined"
          ? Math.trunc(props.weather.wind.speed * 3.6)
          : ""}{" "}
        km/h
      </Typography>
      <Typography variant="h2">
        Description:{" "}
        {typeof props.weather.weather != "undefined"
          ? props.weather.weather[0].description
          : ""}
      </Typography>
    </div>
  );
}

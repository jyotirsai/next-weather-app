import { Typography, Card } from "@material-ui/core";

export default function WeatherBox(props) {
  return (
    <div>
      <Card>
        <Typography variant="h3">
          City:{" "}
          {typeof props.weather.name != "undefined" ? props.weather.name : ""}
        </Typography>
        <Typography variant="h3">
          Temperature:{" "}
          {typeof props.weather.main != "undefined"
            ? Math.round(props.weather.main.temp)
            : ""}
          C
        </Typography>
        <Typography variant="h3">
          Humidity:{" "}
          {typeof props.weather.main != "undefined"
            ? props.weather.main.humidity
            : ""}
          %
        </Typography>
        <Typography variant="h3">
          Wind:{" "}
          {typeof props.weather.wind != "undefined"
            ? Math.round(props.weather.wind.speed * 3.6)
            : ""}{" "}
          km/h
        </Typography>
        <Typography variant="h3">
          Description:{" "}
          {typeof props.weather.weather != "undefined"
            ? props.weather.weather[0].description
            : ""}
        </Typography>
      </Card>
    </div>
  );
}

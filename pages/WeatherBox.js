import { Typography, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardStyle: {
    padding: 20,
    width: 600,
  },
  dataStyle: {
    color: "#1589FF",
  },
});
export default function WeatherBox(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cardStyle} raised={3}>
        <Typography variant="h3">
          City:{" "}
          <Typography
            className={classes.dataStyle}
            component="span"
            variant="h3"
          >
            {typeof props.weather.name != "undefined" ? props.weather.name : ""}
          </Typography>
        </Typography>
        <Typography variant="h3">
          Temperature:{" "}
          <Typography
            className={classes.dataStyle}
            component="span"
            variant="h3"
          >
            {typeof props.weather.main != "undefined"
              ? Math.round(props.weather.main.temp)
              : ""}{" "}
            C
          </Typography>
        </Typography>
        <Typography variant="h3">
          Humidity:{" "}
          <Typography
            className={classes.dataStyle}
            component="span"
            variant="h3"
          >
            {typeof props.weather.main != "undefined"
              ? props.weather.main.humidity
              : ""}
            %
          </Typography>
        </Typography>
        <Typography variant="h3">
          Wind:{" "}
          <Typography
            className={classes.dataStyle}
            component="span"
            variant="h3"
          >
            {typeof props.weather.wind != "undefined"
              ? Math.round(props.weather.wind.speed * 3.6)
              : ""}{" "}
            km/h
          </Typography>
        </Typography>
        <Typography variant="h3">
          Description:{" "}
          <Typography
            className={classes.dataStyle}
            component="span"
            variant="h3"
          >
            {typeof props.weather.weather != "undefined"
              ? props.weather.weather[0].description
              : ""}
          </Typography>
        </Typography>
      </Card>
    </div>
  );
}

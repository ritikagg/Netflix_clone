import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import getGenres from "../../services/utilService";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 12,
    color: "red",
    flexShrink: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  genre: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
  },
}));

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={movie.title}
        subheader={movie.genre_ids.map((genre) => (
          <div key={genre}>{getGenres(genre)}</div>
        ))}
      />
      <CardMedia
        className={classes.media}
        image={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;

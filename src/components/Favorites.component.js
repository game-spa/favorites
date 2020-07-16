import React from "react";
import Favorite from "./Favorite.component";
import { gameService } from "@game-spa/services";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "start",
    backgroundColor: theme.palette.background.paper,
    padding: 30,
  },
  gridItem: {
    width: "150px",
    height: "100%",
  },
  title: {
    flexGrow: 1,
    width: "100%",
  },
}));

export default function Favorites() {
  const favorites = gameService.listFavorites();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Favorites</h2>
      {favorites.map((favorite) => (
        <Favorite
          className={classes.gridItem}
          name={favorite.name}
          image={favorite.background_image}
          released={favorite.released}
        />
      ))}
    </div>
  );
}

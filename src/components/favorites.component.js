import React from "react";
import Favorite from "./favorite.component";
import { gameService } from "@game-spa/services";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "start",
    backgroundColor: theme.palette.background.paper,
    padding: 30,
  },
  title: {
    flexGrow: 1,
    width: "100%",
    marginBottom: 30,
  },
}));

export default function Favorites() {
  const classes = useStyles();
  const [favorites, setFavorites] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  async function request() {
    const response = gameService.listFavorites();
    setFavorites(response);
    setLoaded(true);
  }

  React.useEffect(() => {
    request();
  }, [loaded]);

  function onChildClick(game) {
    return () => {
      gameService.unfavorite(game);
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== game.id
      );
      setFavorites(newFavorites);
    };
  }

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Favorites</h2>
      {favorites.map((favorite) => (
        <Favorite
          name={favorite.name}
          image={favorite.background_image}
          released={favorite.released}
          onClick={onChildClick(favorite)}
        />
      ))}
    </div>
  );
}

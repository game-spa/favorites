import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Favorites from "./components/Favorites.component";

export default function Root() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Favorites />
      </Container>
    </React.Fragment>
  );
}

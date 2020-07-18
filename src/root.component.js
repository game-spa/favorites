import React from "react";
import Container from "@material-ui/core/Container";

import Favorites from "./components/favorites.component";

export default function Root() {
  return (
    <React.Fragment>
      <Container fixed>
        <Favorites />
      </Container>
    </React.Fragment>
  );
}

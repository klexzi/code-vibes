import React from "react";
import { Grid } from "@material-ui/core";

const MusicDetails = () => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      className="py-3 text-light"
    >
      <h3 className="text-light">Post Malone</h3>
      <span className="font-weight-light">Album - The Revolution</span>
      <span className="font-weight-light"> Go flex (feat Lil Wayne)</span>
    </Grid>
  );
};

export default MusicDetails;

import React from "react";
import cxs from "cxs";
import classnames from "classnames";
import { Grid } from "@material-ui/core";

const AlbumCover = props => {
  const classes = cxs({
    width: "230px",
    height: "230px"
  });
  const classNames = classnames({
    [classes]: true,
    shadow: true
  });
  return (
    <Grid container item justify="center">
      <div className={classNames}>
        <img src={props.cover} alt="album cover" className={classNames} />
      </div>
    </Grid>
  );
};

export default AlbumCover;

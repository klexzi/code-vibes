import React from "react";
import { Slider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const VolumeSlider = withStyles({
  root: {
    color: "red",
    height: 4
  },
  thumb: {
    height: 11,
    width: 28,
    backgroundColor: "#fff",
    marginTop: -4,
    marginLeft: -6,
    borderRadius: "25%",
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3,
    borderRadius: 4
  },
  rail: {
    height: 2,
    borderRadius: 2,
    opacity: 0.1
  }
})(Slider);

const VolumeController = props => {
  return (
    <Grid container item alignItems="center" direction="row">
      <Grid item xs={8}>
        <VolumeSlider defaultValue={80} onChange={props.handleVolume} />
      </Grid>
      <Grid container item xs={4} justify="flex-end">
        <Typography variant="body1" className="text-light">
          {props.volumeLevel}%
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VolumeController;

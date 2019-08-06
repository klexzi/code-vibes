import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import AlbumCover from "../../components/AlbumCover";
import MusicDetails from "../../components/MusicDetails";
import Controls from "../Controls";
import MusicProgress from "../../components/MusicProgress";

export class MusicPlayer extends Component {
  render() {
    return (
      <Grid container justify="center" direction="row">
        <div className="w-75">
          <AlbumCover cover={this.props.cover} />
          <MusicDetails />
          <MusicProgress />
          <Controls uri={this.props.uri} />
        </div>
      </Grid>
    );
  }
}

export default MusicPlayer;

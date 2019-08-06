import React, { Component } from "react";
import { Box } from "@material-ui/core";

import MediaButton from "../../components/MediaButton";
import RepeatToggle from "../../components/RepeatToggle";
import VolumeController from "../../components/VolumeController";

export class Controls extends Component {
  state = { playing: false, volume: 80 };
  audio = new Audio(this.props.uri);
  static propTypes = {};
  handlePlay = () => {
    this.audio
      .play()
      .then(() => {
        this.setState(() => ({
          playing: true
        }));
      })
      .catch(error => console.log);
  };
  handlePause = () => {
    this.audio.pause();
    this.setState(() => ({ playing: false }));
  };
  handleVolume = (e, newValue) => {
    this.setState(() => ({ volume: newValue }));
    this.audio.volume = newValue / 100;
  };
  render() {
    return (
      <Box display="flex" alignItems="center" p={1} m={1}>
        <Box p={1} css={{ width: "25%" }}>
          <RepeatToggle />
        </Box>
        <Box
          p={1}
          css={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyItems: "center"
          }}
          justifyContent="center"
        >
          <MediaButton type="prev" />
          <MediaButton
            type={this.state.playing ? "pause" : "play"}
            action={this.state.playing ? this.handlePause : this.handlePlay}
          />
          <MediaButton type="next" />
        </Box>
        <Box p={1} css={{ width: "25%" }}>
          <VolumeController
            handleVolume={this.handleVolume}
            volumeLevel={this.state.volume}
          />
        </Box>
      </Box>
    );
  }
}

export default Controls;

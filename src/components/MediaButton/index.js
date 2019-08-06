// @flow
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Fab, Icon } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { withStyles, makeStyles } from "@material-ui/styles";
import classnames from "classnames";

const StyledButton = withStyles({
  root: {
    color: pink[800],
    backgroundColor: "white"
  }
})(Fab);
const useStyles = makeStyles({
  large: {
    width: "96.02px",
    height: "96.02px",
    fontSize: "80px",
    marginLeft: "8px",
    marginRight: "12px"
  },
  medium: {
    width: "63.39px",
    height: "63.39px",
    fontSize: "40px",
    margin: "0"
  }
});
const MediaButton = (props: { type: "play" | "pause" | "next" | "prev" }) => {
  const { type } = props;
  const classStyles = useStyles();
  const classes = classnames({
    [classStyles.large]: type === "play" || type === "pause" ? true : false,
    [classStyles.medium]: type !== "play" && type !== "pause" ? true : false
  });

  const icon =
    props.type === "play"
      ? "play_circle_filled"
      : props.type === "pause"
      ? "pause_circle_filled"
      : props.type === "next"
      ? "navigate_next"
      : "navigate_before";
  return (
    <StyledButton className={classes} onClick={props.action}>
      <Icon fontSize="inherit">{icon}</Icon>
    </StyledButton>
  );
};

MediaButton.propTypes = {
  type: PropTypes.string.isRequired
};

export default memo<Function>(MediaButton);

import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

const RepeatToggle = () => {
  return (
    <React.Fragment>
      <FormControlLabel
        className="text-white"
        label="Replay"
        control={<Switch />}
      />
    </React.Fragment>
  );
};

export default RepeatToggle;

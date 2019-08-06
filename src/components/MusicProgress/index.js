import React from "react";
import { LinearProgress, Box } from "@material-ui/core";

const MusicProgress = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-center"
      p={1}
      m={1}
      className="text-light"
    >
      <Box p={1}>00:29</Box>
      <Box p={2} css={{ width: "100%" }} justifyContent="center">
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={40}
          valueBuffer={60}
        />
      </Box>
      <Box p={1}>01:34</Box>
    </Box>
  );
};

export default MusicProgress;

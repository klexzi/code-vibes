import { storiesOf } from "@storybook/react";
import React from "react";

import AlbumCover from ".";

const albumCoverProps = {
  cover: "https://miro.medium.com/max/573/1*DpbgG3UmUzEfYL-MzqEIkQ.jpeg"
};
storiesOf("AlbumCover", module).add("Default", () => (
  <AlbumCover {...albumCoverProps} />
));

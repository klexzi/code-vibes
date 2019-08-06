import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MediaButton from ".";

export const actions = {
  onClick: action("clicked")
};
storiesOf("MediaButton", module)
  .add("Play Button", () => <MediaButton type="play" {...actions} />)
  .add("Pause Button", () => <MediaButton type="pause" {...actions} />)
  .add("Previous Button", () => <MediaButton type="prev" {...actions} />)
  .add("Next Button", () => <MediaButton type="next" {...actions} />);

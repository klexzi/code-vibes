import React from "react";
import classnames from "classnames";
import cxs from "cxs";

import MusicPlayer from "../MusicPlayer";

const musicData = {
  uri:
    "http://naijaloaded.store/wp-content/uploads/2019/08/Broda-Shaggi-Black-Skin-Boy.mp3",
  cover: "https://miro.medium.com/max/573/1*DpbgG3UmUzEfYL-MzqEIkQ.jpeg",
  artist: "Broda shaggi",
  title: "Black skin boy"
};

const MusicPanel = () => {
  const firstStyles = cxs({
    "background-image":
      "url('https://miro.medium.com/max/573/1*DpbgG3UmUzEfYL-MzqEIkQ.jpeg')",
    "background-size": "cover",
    "background-repeat": "no-repeat"
  });
  const secondStyles = cxs({
    "background-image":
      "linear-gradient(180deg,rgba(192, 72, 72, 0.9), rgba(72, 0, 72, 0.9))"
  });
  const classNames = classnames({
    [firstStyles]: true,
    card: true,
    "shadow-lg": true,
    "w-75": true
  });
  const secondClassNames = classnames({
    [secondStyles]: true,
    "py-4": true
  });
  return (
    <div className={classNames}>
      <div className={secondClassNames}>
        <MusicPlayer {...musicData} />
      </div>
    </div>
  );
};

export default MusicPanel;

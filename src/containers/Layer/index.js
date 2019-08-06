import React, { Component } from "react";
import cxs from "cxs";

import MusicPanel from "../MusicPanel";

class Layout extends Component {
  render() {
    const styles = cxs({
      "background-image": "linear-gradient(180deg, #C04848, #480048)"
    });
    return (
      <div className={styles}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <MusicPanel />
        </div>
        <br />
      </div>
    );
  }
}

export default Layout;

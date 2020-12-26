import React from "react";
import "./InfoBar.css";
import PlayerProfile from "./playerProfile/PlayerProfile";

function InfoBar(props) {
  return (
    <div className="InfoBar">
      <PlayerProfile className={"playerProfile"} {...props} />
    </div>
  );
}

export default InfoBar;

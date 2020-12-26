import React from "react";
import "./PlayerAvatar.css";

function PlayerAvatar(props) {
  return <img className={"avatar"} src={props.avatar} />;
}

export default PlayerAvatar;

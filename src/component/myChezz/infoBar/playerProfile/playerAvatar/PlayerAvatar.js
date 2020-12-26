import React from "react";
import "./PlayerAvatar.css";

function PlayerAvatar(props) {
  return <img className={"avatar"} src={props.avatar} title={props.title} />;
}

export default PlayerAvatar;

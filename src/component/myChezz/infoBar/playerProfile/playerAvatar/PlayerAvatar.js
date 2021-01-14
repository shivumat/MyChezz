import React from "react";
import "./PlayerAvatar.css";
import defaultLogo from "../../../../../static/images/avatar.png";

function PlayerAvatar(props) {
  const { avatar, title } = props;

  return (
    <img
      className={"avatar"}
      src={avatar === undefined ? defaultLogo : avatar}
      title={title === undefined ? "" : title}
    />
  );
}

export default PlayerAvatar;

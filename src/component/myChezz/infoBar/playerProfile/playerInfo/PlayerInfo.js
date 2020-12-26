import React from "react";
import Flag from "react-world-flags";
import "./PlayerInfo.css";

function PlayerInfo(props) {
  const { playerInfo } = props;

  const countryCode =
    playerInfo.countryJson !== undefined ? playerInfo.countryJson.code : "none";

  return (
    <div className={"PlayerInfo"}>
      <div className={"userNameAndLocation"}>
        <Flag
          code={countryCode}
          fallback={<span></span>}
          className={"countryFlag"}
          title={
            playerInfo.countryJson !== undefined
              ? playerInfo.countryJson.name
              : ""
          }
        />
        <div className={"userName"}>{playerInfo.username}</div>
        <div className={"playerName"}>{playerInfo.name}</div>
      </div>
    </div>
  );
}

export default PlayerInfo;

import React, { useEffect, useState } from "react";
import { getPlayerProfile } from "../../../../service/chessDotComAPI";
import { MY_USER_NAME } from "../../../../static/constants/chessDotComConstants";
import defaultLogo from "../../../../static/images/avatar.png";
import PlayerAvatar from "./playerAvatar/PlayerAvatar";
import PlayerInfo from "./playerInfo/PlayerInfo";
import "./PlayerProfile.css";

function PlayerProfile(props) {
  const [playerInfo, setPlayerInfo] = useState({});

  useEffect(() => {
    getPayerInfo();
  }, []);

  const getPayerInfo = async () => {
    let playerInfo = await getPlayerProfile(props.userName);
    if (playerInfo === undefined) {
      playerInfo = await getPlayerProfile(MY_USER_NAME);
    }
    console.log(playerInfo);
    setPlayerInfo(playerInfo);
  };

  return (
    <div className={"PlayerProfile"}>
      <PlayerAvatar
        avatar={
          playerInfo.avatar === undefined ? defaultLogo : playerInfo.avatar
        }
        title={playerInfo.name === undefined ? "" : playerInfo.name}
      />
      <PlayerInfo playerInfo={playerInfo} />
    </div>
  );
}

export default PlayerProfile;

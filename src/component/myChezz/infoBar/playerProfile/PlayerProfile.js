import React, { useEffect, useState } from "react";
import Banner from "react-js-banner";
import { getPlayerProfile } from "../../../../service/chessDotComAPI";
import { MY_USER_NAME } from "../../../../static/constants/chessDotComConstants";
import defaultLogo from "../../../../static/images/avatar.png";
import PlayerAvatar from "./playerAvatar/PlayerAvatar";
import PlayerInfo from "./playerInfo/PlayerInfo";
import "./PlayerProfile.css";
import UserNameDropDown from "./userNameDropDown/UserNameDropDown";

function PlayerProfile(props) {
  const [playerInfo, setPlayerInfo] = useState({});
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const { userName } = props;
  const BANNER_TIME = 3000;

  useEffect(() => {
    getPayerInfo();
  }, []);

  useEffect(() => {
    getPayerInfo();
  }, [userName]);

  const getPayerInfo = async () => {
    let playerInfo = await getPlayerProfile(props.userName);
    if (playerInfo === undefined) {
      props.updateUserName(MY_USER_NAME);
      setIsBannerVisible(true);
      setTimeout(disableBanner, BANNER_TIME);
      playerInfo = await getPlayerProfile(MY_USER_NAME);
    } else {
      setIsBannerVisible(false);
    }
    setPlayerInfo(playerInfo);
  };

  const disableBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className={"PlayerProfile"}>
      <PlayerAvatar avatar={playerInfo.avatar} title={userName} />
      <PlayerInfo playerInfo={playerInfo} />
      <UserNameDropDown {...props} />
      {isBannerVisible ? (
        <Banner
          showBanner={true}
          title="No User Found. You are stuck with me :/"
          css={{ color: "#FFF", backgroundColor: "orange", fontSize: 15 }}
          visibleTime={BANNER_TIME}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default PlayerProfile;

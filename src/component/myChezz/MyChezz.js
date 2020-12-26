import React, { useState } from "react";
import { MY_USER_NAME } from "../../static/constants/chessDotComConstants";
import InfoBar from "./infoBar/InfoBar";
import "./MyChezz.css";

function MyChezz() {
  const [userName, setUserName] = useState(MY_USER_NAME);

  const updateUserName = (newUserName) => {
    setUserName(newUserName);
  };

  return (
    <div className="MyChezz">
      <InfoBar userName={userName} updateUserName={updateUserName} />
    </div>
  );
}

export default MyChezz;

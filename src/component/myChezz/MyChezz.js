import React, { useState } from "react";
import { MY_USER_NAME } from "../../static/constants/chessDotComConstants";
import InfoBar from "./infoBar/InfoBar";
import "./MyChezz.css";

function MyChezz() {
  const [userName, setUserName] = useState(MY_USER_NAME);

  return (
    <div className="MyChezz">
      <InfoBar userName={userName} />
    </div>
  );
}

export default MyChezz;
